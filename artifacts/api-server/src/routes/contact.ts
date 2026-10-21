import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();
const connectors = new ReplitConnectors();
const inbox = "ricardo@mazzistudios.com";
const windowMs = 60 * 60 * 1000;
const recentSubmissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (recentSubmissions.size > 10_000) {
    for (const [key, times] of recentSubmissions) {
      if (times.every((time) => now - time >= windowMs)) recentSubmissions.delete(key);
    }
  }
  const times = (recentSubmissions.get(ip) ?? []).filter((time) => now - time < windowMs);
  if (times.length >= 5) {
    recentSubmissions.set(ip, times);
    return true;
  }
  times.push(now);
  recentSubmissions.set(ip, times);
  return false;
}

function makeMessage(name: string, email: string, message: string): string {
  const text = `New inquiry from the Mazzi Studios contact page\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`;
  const mime = [
    `From: Mazzi Studios <${inbox}>`,
    `To: ${inbox}`,
    `Reply-To: <${email}>`,
    "Subject: New Mazzi Studios website inquiry",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(text, "utf8").toString("base64"),
  ].join("\r\n");
  return Buffer.from(mime, "utf8").toString("base64url");
}

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Please check the name, email, and message." });
    return;
  }

  const { website } = parsed.data;
  const name = parsed.data.name.trim();
  const email = parsed.data.email.trim();
  const message = parsed.data.message.trim();
  if (website || !name || message.length < 10 || /[<>,\r\n]/.test(email)) {
    res.status(400).json({ error: "Please check the name, email, and message." });
    return;
  }

  if (isRateLimited(req.ip ?? req.socket.remoteAddress ?? "unknown")) {
    res.status(429).json({ error: "Too many messages. Please try again later or email us directly." });
    return;
  }

  try {
    const profileResponse = await connectors.proxy("google-mail", "/gmail/v1/users/me/profile", {
      method: "GET",
    });
    if (!profileResponse.ok) {
      req.log.error({ status: profileResponse.status }, "Gmail profile unavailable");
      res.status(502).json({ error: "Could not confirm email delivery. Please use the direct email link." });
      return;
    }

    const profile = (await profileResponse.json()) as { emailAddress?: string };
    if (profile.emailAddress?.toLowerCase() !== inbox) {
      req.log.error("Connected Gmail account does not match contact inbox");
      res.status(502).json({ error: "Email delivery is temporarily unavailable. Please use the direct email link." });
      return;
    }

    const response = await connectors.proxy("google-mail", "/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw: makeMessage(name, email, message) }),
    });
    if (!response.ok) {
      req.log.error({ status: response.status }, "Gmail rejected contact message");
      res.status(502).json({ error: "Could not confirm email delivery. Please use the direct email link." });
      return;
    }

    res.json(SubmitContactResponse.parse({ status: "sent" }));
  } catch (error) {
    req.log.error({ errorType: error instanceof Error ? error.name : "unknown" }, "Contact message send failed");
    res.status(502).json({ error: "Could not confirm email delivery. Please use the direct email link." });
  }
});

export default router;
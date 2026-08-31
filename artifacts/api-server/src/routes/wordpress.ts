import { Router, type IRouter } from "express";

const router: IRouter = Router();

router.get("/wp/posts", async (req, res) => {
  const perPage = req.query.per_page ?? "3";
  const page = req.query.page ?? "1";

  try {
    const wpRes = await fetch(
      `https://mazzistudios.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_embed`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!wpRes.ok) {
      res.status(wpRes.status).json({ error: "Failed to fetch posts" });
      return;
    }

    const totalPages = wpRes.headers.get("X-WP-TotalPages") ?? "1";
    const total = wpRes.headers.get("X-WP-Total") ?? "0";
    const data = await wpRes.json();

    res.setHeader("X-WP-TotalPages", totalPages);
    res.setHeader("X-WP-Total", total);
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "WordPress proxy error");
    res.status(502).json({ error: "Failed to reach WordPress API" });
  }
});

export default router;

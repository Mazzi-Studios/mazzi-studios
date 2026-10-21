---
name: Contact form delivery
description: Reliability rule for Mazzi Studios contact and booking flows.
---

Do not render a contact form that claims a message was sent until an actual server-side delivery path is connected and checked. If email delivery is unavailable, provide working booking and direct-email options instead.

**Why:** The published contact form previously showed a success state after a timer while sending nothing, risking lost inquiries.

**How to apply:** When restoring a form, validate submissions server-side, use a verified email sender, show success only after the sender accepts the message, surface failures, and confirm a test inquiry reaches the intended inbox before publishing.

For Calendly, a reachable page or HTTP 200 does not prove booking availability. Verify the public event flow through date/time selection to the guest-details form, stopping before scheduling.

**Why:** Calendly's public event page can load successfully while displaying “This calendar is currently unavailable.”

**How to apply:** Distinguish page reachability from booking-flow verification, and do not create an appointment merely to test the widget.
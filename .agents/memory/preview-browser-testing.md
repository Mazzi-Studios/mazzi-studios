---
name: Preview browser testing
description: Avoid the platform development banner blocking standalone browser checks of fixed navigation.
---

Standalone browser checks against the development domain can show the Replit development banner over the site's fixed header. It can intercept navigation clicks even when the application button is visible and enabled.

**Why:** A services-dropdown check timed out because the platform banner, not the website, received the pointer events.

**How to apply:** Hide only the development banner in the temporary browser-test context when necessary. Do not change application layout or navigation to accommodate the testing overlay. App-preview screenshots may not show this overlay.

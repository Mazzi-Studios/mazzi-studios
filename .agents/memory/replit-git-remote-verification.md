---
name: Verify Git remote after Replit UI pushes
description: Prevents reporting a GitHub push as successful when Replit has created or selected a different repository.
---

Always verify both the local `origin` URL and the target repository's branch contents after using Replit's Git remote or push interface.

**Why:** Replit's “Create Remote” flow can create a differently named repository and repoint `origin`, even when the intended repository already exists. The UI can then show a successful push while the intended repository remains unchanged.

**How to apply:** After any Replit Git UI operation, inspect the local remote URL and query the intended GitHub repository's default branch and file tree before confirming success.
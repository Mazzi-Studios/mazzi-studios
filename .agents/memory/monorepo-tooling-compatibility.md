---
name: Monorepo tooling compatibility
description: Non-obvious tooling limitations encountered with API generation and package installation.
---

OpenAPI `format: email` may generate a Zod email method unavailable in the Zod version installed by this workspace. Use a compatible validation pattern and check the generated typecheck until the generator and Zod versions align.

**Why:** Generation succeeded, but the chained library typecheck failed on a generated email schema.

**How to apply:** When adding email fields to the API contract, run codegen and its typecheck before writing callers; prefer a pattern if this incompatibility persists.

The generic language-package installer targets the workspace root and does not accept pnpm's workspace-root flag as a package token.

**Why:** Installing an artifact-local connector dependency needed a workspace-scoped operation; the generic installer rejected both the root add and a workspace-root flag.

**How to apply:** Declare runtime dependencies in the owning package. If the package tool still cannot target that workspace package, use a filtered pnpm add and verify the lockfile importer.
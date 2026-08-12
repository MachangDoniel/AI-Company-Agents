# Small Project Mode

Small Project Mode is the default workflow when no mode is mentioned.

## Default Team

- Lead: Tech Lead / Orion
- Developer: relevant specialist
- QA: QA Engineer / Scout

## Rule

If the task appears broad, release-sensitive, security-sensitive, cross-system, or unclear, Orion asks:

```text
Should I run this in Small Project Mode or Full Company Mode?
```

## Flow

1. Lead intake and plan
2. Specialist Developer implementation
3. Lead review
4. QA verification
5. Logged closeout

## Escalation

Add specialists only when the task needs them:

- Security for auth, data, secrets, permissions, payments, or abuse risk
- DevOps for CI/CD, deployments, infrastructure, or monitoring
- Database for schema, migrations, data cleanup, or analytics
- Product Owner for unclear user value or acceptance criteria
- Release Manager for public releases, rollback, and release notes

# Release Readiness Workflow

Use this workflow before shipping a completed change.

## Required Inputs

- Manager brief
- Product acceptance criteria
- Technical implementation notes
- QA report
- Security review if applicable
- Migration or infrastructure notes if applicable

## Release Gate Checklist

- Scope is clear.
- Implementation is complete.
- QA result is pass or accepted with documented risk.
- Security review is complete for sensitive changes.
- Migrations are reviewed and reversible or otherwise mitigated.
- Deployment steps are known.
- Rollback plan exists.
- Release notes are ready.
- Known risks are documented.

## Release Decision

Use one of:

- **Ship:** Ready for release.
- **Hold:** Blocker remains.
- **Ship with Accepted Risk:** Non-blocking risk is documented and explicitly accepted.

## Release Notes Style

Release notes should be user-facing:

- Say what changed.
- Avoid internal implementation details.
- Mention breaking changes or required user action.
- Keep it concise.

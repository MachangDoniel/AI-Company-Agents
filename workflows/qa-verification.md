# QA Verification Workflow

Use this workflow to verify a completed implementation.

## Inputs

- Product acceptance criteria
- Developer handoff
- Changed areas
- Known risks
- Build or environment information

## Test Pass Structure

1. Confirm setup and environment.
2. Run acceptance criteria tests.
3. Run regression tests around nearby behavior.
4. Test failure and edge paths.
5. Record not-tested areas honestly.
6. Provide pass, fail, blocked, or not-tested result.

## Result Meanings

- **Pass:** Required behavior verified and no blocking regressions found.
- **Fail:** A required behavior is broken.
- **Blocked:** QA cannot verify because environment, build, data, or access is missing.
- **Not Tested:** QA did not run verification for this area.

## QA Standards

- Include exact reproduction steps for failures.
- Include expected and actual behavior.
- Mention test environment.
- Do not infer pass status from implementation notes.
- Prioritize critical user paths first.

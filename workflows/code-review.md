# Code Review Workflow

Use this workflow after implementation and before QA or release.

## Review Owners

- Tech Lead: architecture, maintainability, contracts, test quality
- Security Engineer: security and privacy risk when applicable
- Specialist Developer: domain-specific review when the change is complex

## Review Order

1. Developer provides implementation handoff.
2. Tech Lead reviews correctness and maintainability.
3. Security Engineer reviews sensitive surfaces if needed.
4. Developer fixes required issues.
5. Reviewer confirms changes.

## Review Priorities

Review findings should focus on:

- Bugs
- Regressions
- Security or privacy risk
- Broken contracts
- Missing tests for meaningful risk
- Maintainability issues that affect future work

Avoid review churn for:

- Pure style preferences
- Unrelated refactors
- Alternative architectures that do not materially improve the task

## Standard Review Result

```markdown
## Code Review

**Decision:** Approve | Request Changes | Block

**Findings:**
- Severity:
  File:
  Issue:
  Recommendation:

**Test Gaps:**
- 

**Questions:**
- 
```

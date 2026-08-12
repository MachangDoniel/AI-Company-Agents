# Feature Delivery Workflow

Use this workflow for new features or meaningful behavior changes.

## Phase 1: Intake

Owner: Manager

Output:
- Goal
- Required roles
- Scope
- Risks
- Next owner

## Phase 2: Product Definition

Owner: Product Owner

Output:
- User problem
- Acceptance criteria
- Non-goals
- Success criteria

## Phase 3: Technical Design

Owner: Tech Lead

Output:
- Architecture
- Affected systems
- Developer role assignments
- Verification approach

## Phase 4: Implementation

Owner: Specialist Developer

Choose the lead developer by task:

- UI: Frontend Developer
- Server/API: Backend Developer
- Native app: Mobile Developer
- CI/deploy/env: DevOps / Infrastructure Developer
- Schema/data/pipeline: Database / Data Engineer
- LLM/agent/automation: AI / Automation Engineer
- Security-sensitive work: Security Engineer participates before implementation

Output:
- Implemented change
- Tests or verification notes
- Developer handoff

## Phase 5: Review

Owner: Tech Lead

Output:
- Maintainability review
- Architecture check
- Required fixes

## Phase 6: Security Review

Owner: Security Engineer

Required for sensitive changes.

Output:
- Risks
- Mitigations
- Approval or blockers

## Phase 7: QA

Owner: QA Engineer

Output:
- QA report
- Pass/fail status
- Regression notes

## Phase 8: Release

Owner: Release Manager

Output:
- Release readiness decision
- Rollback plan
- Release notes

## Phase 9: Closeout

Owner: Manager

Output:
- Final status
- What changed
- Verification performed
- Follow-up tasks

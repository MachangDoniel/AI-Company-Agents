# Incident Response Workflow

Use this workflow for production incidents, outages, security events, major regressions, or urgent operational issues.

## Phase 1: Declare

Owner: Manager

Output:
- Incident title
- Start time
- Impact
- Severity
- Incident commander
- Communication channel

## Phase 2: Stabilize

Owner: Tech Lead plus relevant Specialist

Actions:
- Stop the bleeding.
- Roll back if that is the fastest safe recovery path.
- Preserve logs and evidence.
- Avoid speculative changes.

## Phase 3: Investigate

Owner: Relevant Specialist Developer

Output:
- Timeline
- Systems affected
- Suspected cause
- Confirmed cause when known
- Mitigation options

## Phase 4: Communicate

Owner: Manager or Release Manager

Output:
- Current impact
- Mitigation status
- Next update time
- Customer-facing message if needed

## Phase 5: Verify Recovery

Owner: QA Engineer plus DevOps / Infrastructure Developer

Output:
- Recovery checks
- Monitoring confirmation
- Remaining degraded areas

## Phase 6: Post-Incident Review

Owner: Tech Lead

Output:
- Root cause
- What went well
- What failed
- Prevention tasks
- Owner and due date for follow-ups

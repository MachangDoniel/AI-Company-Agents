# Bug Fix Workflow

Use this workflow when something is broken, flaky, confusing, or regressed.

## Phase 1: Triage

Owner: Manager

Capture:
- Symptom
- Impact
- Priority
- Environment
- Reproduction evidence
- Suspected owner

## Phase 2: Reproduction

Owner: QA Engineer

Output:
- Reproduction steps
- Expected behavior
- Actual behavior
- Frequency
- Screenshots, logs, or traces if available

## Phase 3: Root Cause

Owner: Tech Lead plus relevant Specialist Developer

Output:
- Root cause
- Affected system
- Minimal fix approach
- Regression risk

## Phase 4: Fix

Owner: Relevant Specialist Developer

Output:
- Fix
- Regression test when practical
- Notes on why the fix addresses the root cause

## Phase 5: Verification

Owner: QA Engineer

Output:
- Original bug no longer reproduces
- Related regression paths checked
- Remaining risk

## Phase 6: Release Decision

Owner: Release Manager

Output:
- Ship or hold
- Hotfix notes if needed
- Rollback plan if production-impacting

# Company Operating System

## Purpose

This operating system turns a software request into a controlled company-style workflow. It is designed for focused agents with clear responsibilities, handoffs, and approval gates.

## Default Mode

If no workflow mode is mentioned, use Small Project Mode:

- Lead: Tech Lead / Orion
- Developer: the relevant specialist
- QA: QA Engineer / Scout

The Lead asks which mode to use before starting when the work appears broad, release-sensitive, security-sensitive, cross-system, or unclear.

## Principles

- One owner per phase.
- Written handoffs before work changes hands.
- Specialists are used when their domain matters.
- QA verifies behavior, not intentions.
- Security participates early for auth, data, payment, secrets, permissions, network, AI, and infrastructure changes.
- Release readiness is a separate decision from implementation completion.

## Small Project Mode

Use this for focused day-to-day work:

1. **Lead Intake**
   - Owner: Tech Lead
   - Output: goal, scope, chosen developer specialty, verification target

2. **Implementation**
   - Owner: Relevant Specialist Developer
   - Output: working change, tests or verification notes

3. **Review**
   - Owner: Tech Lead
   - Output: correctness and maintainability check

4. **QA Verification**
   - Owner: QA Engineer
   - Output: pass, fail, blocked, or not-tested result

5. **Closeout**
   - Owner: Tech Lead
   - Output: log updates and final summary

## Full Company Delivery Lifecycle

1. **Intake**
   - Owner: Manager
   - Output: task brief, scope, priority, risks, required roles

2. **Product Definition**
   - Owner: Product Owner
   - Output: user problem, acceptance criteria, non-goals

3. **Technical Design**
   - Owner: Tech Lead
   - Output: architecture, task split, affected systems, verification plan

4. **Implementation**
   - Owner: Relevant Specialist Developer
   - Output: working change, tests, implementation notes

5. **Security Review**
   - Owner: Security Engineer
   - Required when the change touches auth, data, secrets, payments, permissions, infra, third-party services, file handling, AI tools, or user-generated content
   - Output: risks, mitigations, approval or blockers

6. **QA Verification**
   - Owner: QA Engineer
   - Output: test report, pass/fail, regression notes

7. **Release Readiness**
   - Owner: Release Manager
   - Output: release checklist, rollback plan, final status

8. **Closeout**
   - Owner: Manager
   - Output: final summary, unresolved risks, follow-up tasks

## Decision Authority

- Product Owner owns "what" and "why".
- Tech Lead owns "how".
- Specialist Developers own implementation details inside their domain.
- Security Engineer can block risky releases.
- QA Engineer can block unverified releases.
- Release Manager can block releases with operational gaps.
- Manager resolves priority, scope, and sequencing conflicts.

## Handoff Format

Every handoff should include:

- Current status
- Decisions already made
- Files, systems, or areas affected
- Known risks
- What the next role should do
- What should not be changed

## Escalation Rules

Escalate to the Manager when:

- Scope is unclear.
- Two roles disagree on priority.
- A task grows beyond the original request.
- A blocker requires user input.

Escalate to the Tech Lead when:

- Architecture is unclear.
- A change crosses multiple systems.
- A shortcut creates future maintenance risk.
- Existing patterns conflict with the new requirement.

Escalate to Security when:

- Sensitive data, identity, payments, permissions, secrets, or external integrations are involved.

Escalate to QA when:

- Acceptance criteria are vague.
- The change is user-facing.
- A regression path is likely.

## Default Meeting Rhythm

This can be run asynchronously with written notes:

- Intake note before work starts
- Design note before implementation
- Developer handoff after implementation
- QA report before release
- Release note after verification

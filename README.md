# AI Company Agents

This folder is a reusable software-company workflow for running focused AI agents as if they were a small product engineering organization. It includes a static HTML dashboard, agent role profiles, workflow modes, sprint logs, release pages, and reusable templates.

## How To Use

1. Open `index.html` in a browser.
2. Pick the workflow that matches the task from `workflows/`.
3. Assign roles from `agents/`.
4. Use templates from `templates/` for briefs, plans, QA, reviews, releases, and handoffs.

## Default Mode

If no workflow mode is mentioned, use Small Project Mode:

```text
Tech Lead: Orion
Developer: relevant specialist
QA: Scout
```

If a task looks broad, release-sensitive, security-sensitive, or cross-system, Orion should ask which mode to use before starting.

## Core Company Flow

Small Project Mode:

```text
Tech Lead clarifies and plans
-> Specialist Developer implements
-> QA Engineer verifies
-> Tech Lead closes out logs and summary
```

Full Company Mode:

```text
Manager / Product Owner clarifies the goal
-> Tech Lead defines architecture and ownership
-> Specialist Developer implements the relevant slice
-> Security Engineer reviews risk-sensitive work
-> QA Engineer verifies behavior and regressions
-> Release Manager checks readiness
-> Manager summarizes status and next steps
```

## Agent Roster

- `manager.md`: execution control, prioritization, status, handoffs
- `product-owner.md`: user value, scope, acceptance criteria
- `tech-lead.md`: architecture, technical decisions, code quality
- `frontend-developer.md`: web UI, accessibility, responsive behavior
- `backend-developer.md`: APIs, services, integrations, business logic
- `mobile-developer.md`: iOS/Android/native app architecture and UX
- `devops-infrastructure-developer.md`: CI/CD, deployment, environments, observability
- `database-data-engineer.md`: schema, migrations, analytics, pipelines
- `ai-automation-engineer.md`: LLM workflows, agents, prompts, automations
- `security-engineer.md`: threat modeling, auth, privacy, secrets
- `qa-engineer.md`: test plans, exploratory QA, regression risk
- `release-manager.md`: release readiness, deployment gates, rollback planning

## Recommended Operating Rule

Use one lead agent per phase. Do not ask every agent to comment on every task. Bring specialists in only when their expertise materially changes the outcome.

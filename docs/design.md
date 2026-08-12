# AI Company Agents Design

## Goal

Create a reusable working folder outside any project repository that defines focused AI software-company roles and practical workflows for delivering software tasks.

## Scope

The system is a markdown-based operating kit. It contains role prompts, company operating rules, workflows, and templates. It is general-purpose and can be used across any software project.

## Roles

The company includes management, product, technical leadership, specialist developers, QA, security, and release ownership.

Developer roles are divided by expertise:

- Frontend Developer
- Backend Developer
- Mobile Developer
- DevOps / Infrastructure Developer
- Database / Data Engineer
- AI / Automation Engineer
- Security Engineer

## Workflow Model

The default lifecycle is:

```text
Manager / Product Owner
-> Tech Lead
-> Specialist Developer
-> Security Engineer when needed
-> QA Engineer
-> Release Manager
-> Manager closeout
```

## Design Decisions

- Markdown files are used so the system works with any AI tool.
- Each role has a distinct character, expertise, responsibilities, rules, and handoff prompt.
- Workflows are separated from role definitions so the same role can participate in different task types.
- Templates standardize outputs without requiring heavy process.

## Non-Goals

- This is not tied to one repository.
- This is not a real multi-agent runtime.
- This does not install tools, scripts, or dependencies.
- This does not replace project-specific engineering standards.

# AI Company Agents Implementation Plan

> **For agentic workers:** Use this plan to create or update the external working folder. Steps use checkbox syntax for tracking.

**Goal:** Build a reusable `/Users/donieltripura/AI-Company-Agents` folder containing focused software-company agent prompts, workflows, templates, and operating documentation.

**Architecture:** Use plain markdown files grouped by responsibility: `agents/` for role prompts, `workflows/` for process playbooks, `templates/` for reusable outputs, and `docs/` for design notes.

**Tech Stack:** Markdown files only. No runtime dependencies.

## Global Constraints

- Do not place this system inside a software project repository.
- Keep roles general-purpose across software projects.
- Give each developer specialty distinct expertise and review criteria.
- Keep the workflow practical, not bureaucratic.

---

## Task 1: Create Folder Structure

**Files:**
- Create directory: `/Users/donieltripura/AI-Company-Agents`
- Create directory: `/Users/donieltripura/AI-Company-Agents/agents`
- Create directory: `/Users/donieltripura/AI-Company-Agents/workflows`
- Create directory: `/Users/donieltripura/AI-Company-Agents/templates`
- Create directory: `/Users/donieltripura/AI-Company-Agents/docs`

**Produces:** External working folder with stable file organization.

- [x] Create the directory structure.
- [x] Verify the directories exist.

## Task 2: Create Operating Documentation

**Files:**
- Create: `/Users/donieltripura/AI-Company-Agents/README.md`
- Create: `/Users/donieltripura/AI-Company-Agents/company-operating-system.md`
- Create: `/Users/donieltripura/AI-Company-Agents/docs/design.md`

**Produces:** Entry point, lifecycle, decision authority, and design rationale.

- [x] Write README with folder map and usage instructions.
- [x] Write operating system with lifecycle, gates, handoffs, and escalation rules.
- [x] Write design document with scope and non-goals.

## Task 3: Create Agent Role Files

**Files:**
- Create all files in `/Users/donieltripura/AI-Company-Agents/agents/`

**Produces:** Focused prompts for manager, product, lead, developer specialties, QA, security, and release roles.

- [x] Write management and product roles.
- [x] Write technical lead role.
- [x] Write specialist developer roles.
- [x] Write QA, security, and release roles.

## Task 4: Create Workflows

**Files:**
- Create all files in `/Users/donieltripura/AI-Company-Agents/workflows/`

**Produces:** Feature, bug, review, QA, release, and incident workflows.

- [x] Write feature delivery workflow.
- [x] Write bug fix workflow.
- [x] Write code review workflow.
- [x] Write QA verification workflow.
- [x] Write release readiness workflow.
- [x] Write incident response workflow.

## Task 5: Create Templates

**Files:**
- Create all files in `/Users/donieltripura/AI-Company-Agents/templates/`

**Produces:** Standard written outputs for task briefs, implementation plans, QA reports, code reviews, release checks, and handoffs.

- [x] Write task brief template.
- [x] Write implementation plan template.
- [x] Write QA test plan template.
- [x] Write code review report template.
- [x] Write release checklist template.
- [x] Write handoff note template.

## Task 6: Verify

**Files:**
- Inspect all files under `/Users/donieltripura/AI-Company-Agents`

**Produces:** Confirmation that the working folder exists and contains the expected files.

- [x] List generated files.
- [x] Confirm no files were created inside the repository.

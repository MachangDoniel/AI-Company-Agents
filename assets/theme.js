(function () {
  const currentScript = document.currentScript;
  const scriptSrc = currentScript ? currentScript.getAttribute("src") || "" : "";
  const prefix = scriptSrc.includes("../") ? "../" : "";
  const storageKey = "ai-company-agents-theme";

  const navGroups = [
    {
      title: "Company",
      links: [
        ["Dashboard", "index.html"],
        ["Agent roster", "agents/agent-roster.html"],
        ["Operating system", "company-operating-system.html"]
      ]
    },
    {
      title: "Modes",
      links: [
        ["Small Project Mode", "workflows/small-project-mode.html"],
        ["Full Company Mode", "workflows/feature-delivery.html"]
      ]
    },
    {
      title: "Logs",
      links: [
        ["Activity log", "logs/activity-log.html"],
        ["Decision log", "logs/decision-log.html"],
        ["Risk log", "logs/risk-log.html"],
        ["QA log", "logs/qa-log.html"],
        ["Release log", "logs/release-log.html"]
      ]
    },
    {
      title: "Sprints",
      links: [
        ["Current sprint", "sprints/current-sprint.html"],
        ["Sprint report", "sprints/sprint-report-template.html"],
        ["Release page", "sprints/release-page-template.html"]
      ]
    },
    {
      title: "Templates",
      links: [
        ["Task brief", "templates/task-brief.html"],
        ["Implementation plan", "templates/implementation-plan.html"],
        ["Handoff note", "templates/handoff-note.html"],
        ["QA test plan", "templates/qa-test-plan.html"],
        ["Code review report", "templates/code-review-report.html"],
        ["Release checklist", "templates/release-checklist.html"]
      ]
    },
    {
      title: "Docs",
      links: [
        ["HTML dashboard design", "docs/html-dashboard-design.html"],
        ["Implementation plan", "docs/html-dashboard-implementation-plan.html"]
      ]
    }
  ];

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(storageKey, theme);
    } catch (_) {}
  }

  function initialTheme() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "dark" || saved === "light") return saved;
    } catch (_) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function normalizedPath(href) {
    const url = new URL(href, window.location.href);
    return url.pathname.replace(/\/+$/, "");
  }

  function buildSidebar() {
    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";
    sidebar.innerHTML = `
      <div class="brand-block">
        <div class="brand-mark">AC</div>
        <div>
          <h1>AI Company Agents</h1>
          <p>Focused software team dashboard.</p>
        </div>
      </div>
      <button class="theme-toggle" type="button" aria-label="Toggle light and dark mode">
        <span class="theme-toggle__icon" aria-hidden="true"></span>
        <span class="theme-toggle__label">Theme</span>
      </button>
      <nav aria-label="Primary navigation"></nav>
    `;

    const nav = sidebar.querySelector("nav");
    const current = normalizedPath(window.location.href);
    navGroups.forEach((group) => {
      const wrapper = document.createElement("div");
      wrapper.className = "nav-group";
      const heading = document.createElement("h2");
      heading.textContent = group.title;
      wrapper.appendChild(heading);

      group.links.forEach(([label, path]) => {
        const link = document.createElement("a");
        link.href = prefix + path;
        link.textContent = label;
        if (normalizedPath(link.href) === current) {
          link.className = "active";
          link.setAttribute("aria-current", "page");
        }
        wrapper.appendChild(link);
      });
      nav.appendChild(wrapper);
    });
    return sidebar;
  }

  function ensureShell() {
    const existingSidebar = document.querySelector(".shell .sidebar");
    if (existingSidebar) {
      existingSidebar.replaceWith(buildSidebar());
      return;
    }
    const main = document.querySelector("main.content");
    if (!main) return;

    const shell = document.createElement("div");
    shell.className = "shell";
    const sidebar = buildSidebar();
    document.body.insertBefore(shell, document.body.firstChild);
    shell.appendChild(sidebar);
    shell.appendChild(main);
  }

  function wireThemeToggle() {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    const label = toggle.querySelector(".theme-toggle__label");
    const sync = () => {
      const theme = document.documentElement.dataset.theme || "light";
      label.textContent = theme === "dark" ? "Dark mode" : "Light mode";
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    };
    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      sync();
    });
    sync();
  }

  applyTheme(initialTheme());

  document.addEventListener("DOMContentLoaded", () => {
    ensureShell();
    wireThemeToggle();
  });
})();

window.DASHBOARD_SAMPLE_DATA = {
  workspace: "demo-agent-workbench",
  updatedAt: "2026-01-05 09:30 demo time",
  ports: [
    { name: "dashboard-lite", port: "3001", status: "online", note: "static preview" },
    { name: "demo-api-placeholder", port: "3002", status: "offline", note: "no backend connected" },
    { name: "docs-preview", port: "3003", status: "online", note: "sample docs view" }
  ],
  agents: [
    { id: "product-manager", team: "product-team", status: "ready", memoryFiles: 2, currentTask: "clarify acceptance criteria" },
    { id: "engineer", team: "engineering-team", status: "ready", memoryFiles: 2, currentTask: "keep demo runnable" },
    { id: "qa-reviewer", team: "qa-team", status: "reviewing", memoryFiles: 2, currentTask: "readonly workspace audit" }
  ],
  cronJobs: [
    { name: "daily-workspace-check", schedule: "09:00 demo", status: "active", lastResult: "PASS" },
    { name: "weekly-skill-review", schedule: "Monday demo", status: "paused", lastResult: "not scheduled" },
    { name: "demo-report-rollup", schedule: "Friday demo", status: "active", lastResult: "PASS" }
  ],
  skills: [
    { name: "team-boss-lite", use: "route a task to the right demo role", status: "demo" },
    { name: "readonly-audit", use: "check facts without changing files", status: "demo" },
    { name: "context-builder", use: "assemble a task context from demo files", status: "demo" },
    { name: "qa-checklist", use: "verify acceptance criteria", status: "demo" }
  ],
  pipeline: [
    "reader request",
    "team-boss-lite routes task",
    "product-manager clarifies goal",
    "engineer keeps demo runnable",
    "qa-reviewer performs readonly check",
    "final report cites files"
  ],
  usage: {
    demoRequests: 18,
    demoToolCalls: 42,
    reviewPasses: 5,
    blockedUnsafeActions: 3
  },
  memory: {
    roleProfiles: 3,
    memoryLogs: 6,
    latestNote: "Each role has one experience log and one failure log."
  }
};

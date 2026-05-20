window.DASHBOARD_SAMPLE_DATA = {
  meta: {
    workspace: "demo-agent-workbench",
    subtitle: "基于真实 Hermes Dashboard 重写的脱敏静态预览版",
    notice: "这是基于真实 Hermes Dashboard 重写的脱敏静态演示，不是完整后端。",
    updatedAt: "Demo snapshot · no live data"
  },
  summary: [
    { label: "Demo 项目", value: "2" },
    { label: "Agent 角色", value: "3" },
    { label: "定时任务", value: "4" },
    { label: "技能卡片", value: "4" },
    { label: "流水线阶段", value: "6" },
    { label: "安全拦截", value: "5" }
  ],
  ports: [
    { project: "demo-agent-workbench", service: "dashboard preview", type: "frontend", port: 4101, status: "online", owner: "product-team", note: "静态预览服务，按钮为 demo disabled" },
    { project: "demo-agent-workbench", service: "workspace api mock", type: "backend", port: 8101, status: "unknown", owner: "engineering-team", note: "示例后端占位，不连接真实 API" },
    { project: "demo-content-pipeline", service: "review console", type: "frontend", port: 4102, status: "offline", owner: "qa-team", note: "虚构项目，用于展示离线状态" },
    { project: "demo-content-pipeline", service: "worker queue", type: "worker", port: 8102, status: "online", owner: "engineering-team", note: "虚构 worker，非真实服务" }
  ],
  agents: [
    { id: "product-manager", team: "product-team", role: "需求拆解 / 验收口径", memory: "ready", memoryFiles: 2, lastTask: "整理 demo-agent-workbench 下一步范围", status: "active" },
    { id: "engineer", team: "engineering-team", role: "实现 / 风险隔离", memory: "ready", memoryFiles: 2, lastTask: "把 dashboard-lite 保持为纯静态", status: "active" },
    { id: "qa-reviewer", team: "qa-team", role: "只读检查 / 发布前验收", memory: "partial", memoryFiles: 2, lastTask: "核对事实源、团队边界和敏感信息", status: "reviewing" }
  ],
  cronJobs: [
    { name: "demo-workspace-health-check", cron: "0 9 * * 1", frequency: "每周一 09:00", nextRun: "next Monday 09:00", lastRun: "last Monday 09:00", lastStatus: "PASS" },
    { name: "readonly-audit-sample", cron: "30 9 * * 1", frequency: "每周一 09:30", nextRun: "next Monday 09:30", lastRun: "last Monday 09:30", lastStatus: "WARN" },
    { name: "context-pack-refresh", cron: "0 18 * * 5", frequency: "每周五 18:00", nextRun: "Friday 18:00", lastRun: "last Friday 18:00", lastStatus: "PASS" },
    { name: "demo-report-digest", cron: "15 18 * * 5", frequency: "每周五 18:15", nextRun: "Friday 18:15", lastRun: "last Friday 18:15", lastStatus: "SKIPPED" }
  ],
  skills: [
    { name: "team-boss-lite", category: "routing", status: "ready", description: "识别请求、分派角色、收口验收；不替所有角色全包干。", tags: ["route", "review"] },
    { name: "readonly-audit", category: "safety", status: "ready", description: "只读扫描 demo-workspace，所有结论指向具体文件。", tags: ["safe", "audit"] },
    { name: "context-builder", category: "context", status: "demo", description: "把 registry、STATE、roles、memories 拼成任务上下文。", tags: ["context", "facts"] },
    { name: "qa-checklist", category: "quality", status: "ready", description: "检查边界、敏感信息、下一步建议是否清楚。", tags: ["qa", "checklist"] }
  ],
  pipeline: [
    { step: "request", title: "用户提出任务", owner: "human", detail: "把目标、输入目录、禁止事项写清楚。", state: "done" },
    { step: "team-boss", title: "team-boss-lite 路由", owner: "team-boss-lite", detail: "判断该让哪个角色处理，先做只读检查。", state: "done" },
    { step: "product-manager", title: "产品经理拆范围", owner: "product-manager", detail: "确认事实源、团队边界、验收标准。", state: "done" },
    { step: "engineer", title: "工程师处理实现", owner: "engineer", detail: "只改 demo 文件，不接真实后端。", state: "done" },
    { step: "qa-reviewer", title: "QA 做安全验收", owner: "qa-reviewer", detail: "扫描敏感词、路径、真实服务名和发布链路。", state: "review" },
    { step: "report", title: "生成结果报告", owner: "team-boss-lite", detail: "列出改动、验证截图、风险说明。", state: "pending" }
  ],
  usage: {
    demoRequests: 128,
    toolCalls: 342,
    reviewPasses: 19,
    blockedUnsafeActions: 5,
    contextPacksBuilt: 27,
    humanConfirmations: 11
  },
  memory: {
    roleProfiles: 3,
    memoryLogs: 6,
    nodes: [
      { id: "demo-agent-workbench", type: "project", label: "demo-agent-workbench" },
      { id: "product-team", type: "team", label: "product-team" },
      { id: "engineering-team", type: "team", label: "engineering-team" },
      { id: "qa-team", type: "team", label: "qa-team" },
      { id: "product-manager", type: "role", label: "product-manager" },
      { id: "engineer", type: "role", label: "engineer" },
      { id: "qa-reviewer", type: "role", label: "qa-reviewer" }
    ],
    logs: [
      "product-manager/experience-log.md",
      "product-manager/failure-log.md",
      "engineer/experience-log.md",
      "engineer/failure-log.md",
      "qa-reviewer/experience-log.md",
      "qa-reviewer/failure-log.md"
    ]
  },
  alerts: [
    { level: "info", message: "当前页面是静态 demo，所有按钮均为 disabled 演示。" },
    { level: "warn", message: "不要把真实路径、日志、密钥或团队注册表放进公开版本。" },
    { level: "ok", message: "sample-data.js 使用虚构数据，可安全复制改造。" }
  ]
};

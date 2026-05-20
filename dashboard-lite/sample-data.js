/**
 * Hermes Dashboard Lite - Demo Sample Data
 * 所有页面都从这里读取虚构数据，不访问任何真实 API。
 */
const DEMO_DATA = {
    // ========== 端口状态页 ==========
    health: {
        status: "healthy",
        status_text: "系统正常",
        uptime: "99.8%",
        last_check: new Date().toISOString()
    },

    services: [
        { id: "demo-agent-workbench", name: "Demo Agent Workbench", port: 8001, group: "agent", status: "running" },
        { id: "demo-content-pipeline", name: "Demo Content Pipeline", port: 8002, group: "pipeline", status: "running" },
        { id: "demo-knowledge-base", name: "Demo Knowledge Base", port: 8003, group: "data", status: "running" },
        { id: "demo-api-gateway", name: "Demo API Gateway", port: 8004, group: "core", status: "running" },
        { id: "demo-task-scheduler", name: "Demo Task Scheduler", port: 8005, group: "core", status: "running" },
        { id: "demo-memory-store", name: "Demo Memory Store", port: 8006, group: "data", status: "running" },
        { id: "demo-web-ui", name: "Demo Web UI", port: 3001, group: "ui", status: "running" },
        { id: "demo-monitor", name: "Demo Monitor", port: 9001, group: "ops", status: "stopped" }
    ],

    // ========== Agent 页 ==========
    teams: [
        {
            id: "product-team",
            name: "Product Team",
            icon: "📋",
            desc: "Demo product planning and requirements",
            badge: "PRODUCT",
            roleCount: 4,
            memoryCount: 12,
            roles: [
                { id: "product-manager", name: "Product Manager", icon: "👤", type: "pm", summary: "Demo product direction and priority management", files: 3, hasMemory: true, healthTags: [{ label: "Active", status: "ok" }, { label: "12 entries", status: "ok" }] },
                { id: "context-builder", name: "Context Builder", icon: "🧩", type: "data", summary: "Build and maintain project context knowledge base", files: 5, hasMemory: true, healthTags: [{ label: "Complete", status: "ok" }] },
                { id: "qa-reviewer", name: "QA Reviewer", icon: "🔍", type: "test", summary: "Quality gates and acceptance criteria", files: 2, hasMemory: false, healthTags: [{ label: "Needs update", status: "warn" }] },
                { id: "team-boss-lite", name: "Team Boss Lite", icon: "🎯", type: "ops", summary: "Demo team routing and task dispatch", files: 4, hasMemory: true, healthTags: [{ label: "Running", status: "ok" }, { label: "8 entries", status: "ok" }] }
            ]
        },
        {
            id: "engineering-team",
            name: "Engineering Team",
            icon: "⚙️",
            desc: "Demo coding, architecture, research",
            badge: "ENGINEERING",
            roleCount: 3,
            memoryCount: 18,
            roles: [
                { id: "engineer", name: "Engineer", icon: "🔧", type: "dev", summary: "Core coding and architecture implementation", files: 6, hasMemory: true, healthTags: [{ label: "Active", status: "ok" }, { label: "18 entries", status: "ok" }] },
                { id: "readonly-audit", name: "Readonly Audit", icon: "🛡️", type: "ops", summary: "Security audit and compliance checks", files: 2, hasMemory: true, healthTags: [{ label: "Secure", status: "ok" }] },
                { id: "tech-researcher", name: "Tech Researcher", icon: "🔬", type: "data", summary: "Demo technology research and solution comparison", files: 3, hasMemory: false, healthTags: [{ label: "Needs update", status: "warn" }] }
            ]
        },
        {
            id: "qa-team",
            name: "QA Team",
            icon: "✅",
            desc: "Demo testing, validation, quality assurance",
            badge: "QA",
            roleCount: 2,
            memoryCount: 6,
            roles: [
                { id: "qa-checklist", name: "QA Checklist", icon: "📝", type: "test", summary: "Demo test case and checklist management", files: 2, hasMemory: true, healthTags: [{ label: "Complete", status: "ok" }] },
                { id: "bug-tracker", name: "Bug Tracker", icon: "🐛", type: "test", summary: "Demo bug tracking and regression verification", files: 1, hasMemory: false, healthTags: [{ label: "Needs update", status: "warn" }] }
            ]
        }
    ],

    // ========== 定时任务页 ==========
    tasks: [
        { job_id: "demo-daily-report", name: "Daily Report Generation", schedule: "0 2 * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T02:05:00Z", next_run: "2025-01-16T02:00:00Z", prompt: "Collect demo community data and generate daily digest" },
        { job_id: "demo-weekly-summary", name: "Weekly Summary Report", schedule: "0 5 * * 1", enabled: true, last_status: "ok", last_run: "2025-01-13T05:10:00Z", next_run: "2025-01-20T05:00:00Z", prompt: "Summarize weekly demo activity into a report" },
        { job_id: "demo-health-check", name: "System Health Check", schedule: "*/30 * * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T10:30:00Z", next_run: "2025-01-15T11:00:00Z", prompt: "Check service health status, notify on anomalies" },
        { job_id: "demo-skill-audit", name: "Skill Library Audit", schedule: "0 3 * * 0", enabled: true, last_status: "ok", last_run: "2025-01-12T03:00:00Z", next_run: "2025-01-19T03:00:00Z", prompt: "Audit skill library completeness, clean up expired skills" },
        { job_id: "demo-memory-compress", name: "Memory Compression", schedule: "0 4 1 * *", enabled: true, last_status: "ok", last_run: "2025-01-01T04:00:00Z", next_run: "2025-02-01T04:00:00Z", prompt: "Compress long-term memory, remove stale entries" },
        { job_id: "demo-market-scan", name: "Market Opportunity Scan", schedule: "0 1 * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T01:05:00Z", next_run: "2025-01-16T01:00:00Z", prompt: "Scan GitHub trends and market signals" },
        { job_id: "demo-backup-task", name: "Project Backup", schedule: "0 6 * * *", enabled: false, last_status: "none", last_run: null, next_run: null, prompt: "Backup project files to remote repository" },
        { job_id: "demo-token-report", name: "Token Usage Report", schedule: "0 7 * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T07:00:00Z", next_run: "2025-01-16T07:00:00Z", prompt: "Summarize yesterday token usage, generate report" }
    ],

    // ========== 技能页 ==========
    skillCategories: [
        { id: "ai-agent", name: "AI Agent", icon: "🤖", count: 12 },
        { id: "devops", name: "DevOps", icon: "🔧", count: 8 },
        { id: "data-science", name: "Data Science", icon: "📊", count: 6 },
        { id: "web-development", name: "Web Development", icon: "🌐", count: 10 },
        { id: "research", name: "Research", icon: "🔬", count: 5 },
        { id: "productivity", name: "Productivity", icon: "📝", count: 9 },
        { id: "creative", name: "Creative", icon: "🎨", count: 7 },
        { id: "software-development", name: "Software Dev", icon: "💻", count: 11 }
    ],

    skills: [
        { id: "skill-1", name: "agent-task-delegation", desc: "Agent 任务分派与编排 - 多 Agent 协作模式", category: "ai-agent", status: "built-in", tags: ["delegation", "orchestration"] },
        { id: "skill-2", name: "context-injection", desc: "角色上下文自动注入协议", category: "ai-agent", status: "built-in", tags: ["context", "injection"] },
        { id: "skill-3", name: "ci-cd-pipeline", desc: "CI/CD 流水线自动化配置", category: "devops", status: "built-in", tags: ["ci-cd", "deploy"] },
        { id: "skill-4", name: "docker-optimization", desc: "Docker 镜像优化与缓存策略", category: "devops", status: "optional", tags: ["docker", "optimization"] },
        { id: "skill-5", name: "data-exploration", desc: "交互式数据探索与可视化", category: "data-science", status: "built-in", tags: ["pandas", "visualization"] },
        { id: "skill-6", name: "ml-experiment-tracking", desc: "ML 实验追踪与模型注册", category: "data-science", status: "optional", tags: ["mlflow", "tracking"] },
        { id: "skill-7", name: "flask-api-pattern", desc: "Flask API 开发最佳实践", category: "web-development", status: "built-in", tags: ["flask", "api"] },
        { id: "skill-8", name: "react-component-pattern", desc: "React 组件模式与状态管理", category: "web-development", status: "built-in", tags: ["react", "state"] },
        { id: "skill-9", name: "paper-analysis", desc: "学术论文自动解析与摘要", category: "research", status: "optional", tags: ["arxiv", "summary"] },
        { id: "skill-10", name: "github-trend-monitor", desc: "GitHub 趋势监控与报告", category: "research", status: "built-in", tags: ["github", "trend"] },
        { id: "skill-11", name: "doc-automation", desc: "文档自动生成与格式化", category: "productivity", status: "built-in", tags: ["doc", "format"] },
        { id: "skill-12", name: "meeting-notes", desc: "会议记录整理与行动项提取", category: "productivity", status: "built-in", tags: ["meeting", "notes"] },
        { id: "skill-13", name: "ascii-art-generator", desc: "ASCII 艺术生成器", category: "creative", status: "optional", tags: ["ascii", "art"] },
        { id: "skill-14", name: "diagram-generator", desc: "架构图与流程图自动生成", category: "creative", status: "built-in", tags: ["diagram", "svg"] },
        { id: "skill-15", name: "tdd-workflow", desc: "测试驱动开发工作流", category: "software-development", status: "built-in", tags: ["tdd", "testing"] },
        { id: "skill-16", name: "code-review-checklist", desc: "代码审查清单与自动化检查", category: "software-development", status: "built-in", tags: ["review", "quality"] },
        { id: "skill-17", name: "debug-systematic", desc: "系统性调试四阶段方法", category: "software-development", status: "built-in", tags: ["debug", "methodology"] },
        { id: "skill-18", name: "memory-compression", desc: "长期记忆语义去重与压缩", category: "ai-agent", status: "built-in", tags: ["memory", "compression"] }
    ],

    // ========== Token 页 ==========
    tokenStats: {
        overview: {
            totalTokens: "2,847,392",
            inputTokens: "1,923,841",
            outputTokens: "923,551",
            totalCalls: "4,218",
            avgPerCall: "675"
        },
        byDate: [
            { date: "01-09", input: 45200, output: 21800, calls: 68 },
            { date: "01-10", input: 52100, output: 25400, calls: 74 },
            { date: "01-11", input: 38900, output: 18200, calls: 56 },
            { date: "01-12", input: 61200, output: 29800, calls: 89 },
            { date: "01-13", input: 47800, output: 22100, calls: 71 },
            { date: "01-14", input: 55600, output: 26900, calls: 82 },
            { date: "01-15", input: 43500, output: 20100, calls: 63 }
        ],
        byModel: [
            { name: "demo-model-a", tokens: 1847392, pct: 64.9, color: "#6366f1" },
            { name: "demo-model-b", tokens: 523841, pct: 18.4, color: "#8b5cf6" },
            { name: "demo-model-c", tokens: 312550, pct: 11.0, color: "#10b981" },
            { name: "demo-model-d", tokens: 163609, pct: 5.7, color: "#f59e0b" }
        ],
        topSessions: [
            { title: "Demo Dashboard Migration", tokens: 184200, calls: 156, date: "2025-01-14" },
            { title: "Demo Skill Library Audit", tokens: 92100, calls: 87, date: "2025-01-13" },
            { title: "Demo Notification Format Review", tokens: 67800, calls: 52, date: "2025-01-12" },
            { title: "Demo Memory Cleanup", tokens: 54300, calls: 41, date: "2025-01-11" },
            { title: "Demo Market Scan Pipeline", tokens: 43200, calls: 38, date: "2025-01-10" }
        ]
    },

    // ========== 流水线页 ==========
    pipeline: {
        stats: {
            totalSessions: 12847,
            todaySessions: 42,
            avgTokens: 675,
            totalDelegations: 3891
        },
        sessions: [
            { id: "sess-001", userMsg: "Demo dashboard frontend migration", preview: "Migrate dashboard frontend to a sanitized static public demo...", route: "delegation", delegates: 3, tools: 47, tokens: 12400, duration: "8m 32s", time: "2025-01-15 10:23", timeline: [
                { label: "User Request", summary: "Migrate dashboard frontend to static demo", time: "10:23:01" },
                { label: "Intent Classification", summary: "Identified as frontend migration + sanitization task", time: "10:23:03" },
                { label: "Sub-agent Delegation", summary: "Spawned 3 sub-agents for CSS/HTML/JS in parallel", time: "10:23:05", children: 3 },
                { label: "Security Scan", summary: "Full repo scan for sensitive content, no hits", time: "10:31:28" }
            ]},
            { id: "sess-002", userMsg: "Fix demo schedule board time conflict bug", preview: "Schedule board time conflict detection logic has issues...", route: "direct", delegates: 0, tools: 18, tokens: 5600, duration: "3m 15s", time: "2025-01-15 09:45", timeline: [
                { label: "User Request", summary: "Schedule time conflict detection is incorrect", time: "09:45:01" },
                { label: "Bug Localization", summary: "Found incorrect time slot overlap condition", time: "09:46:12" },
                { label: "Fix & Verification", summary: "Fixed and passed test cases", time: "09:48:16" }
            ]},
            { id: "sess-003", userMsg: "Generate demo community digest", preview: "Auto-collect yesterday's community discussions and generate a digest...", route: "cron", delegates: 0, tools: 12, tokens: 8900, duration: "5m 42s", time: "2025-01-15 02:30", timeline: [
                { label: "Cron Trigger", summary: "Auto-triggered at 02:30 daily", time: "02:30:00" },
                { label: "Data Collection", summary: "Pulled 47 records from demo message source", time: "02:30:15" },
                { label: "Digest Generation", summary: "Demo AI model generated digest body", time: "02:33:28" },
                { label: "Notification Delivery", summary: "Delivered to demo notification group", time: "02:35:42" }
            ]},
            { id: "sess-004", userMsg: "Demo memory store cleanup", preview: "Memory store approaching capacity, needs cleanup...", route: "direct", delegates: 1, tools: 31, tokens: 15200, duration: "12m 08s", time: "2025-01-14 22:10", timeline: [
                { label: "User Request", summary: "Memory store needs cleanup optimization", time: "22:10:01" },
                { label: "Audit Analysis", summary: "Scanned demo facts, found 342 duplicate entries", time: "22:12:15" },
                { label: "Compression Execution", summary: "Merged duplicate entries, freed 18% space", time: "22:18:33" },
                { label: "Health Check", summary: "Integrity check passed", time: "22:22:09" }
            ]},
            { id: "sess-005", userMsg: "Demo article draft review", preview: "Generate an article draft following the standard review workflow...", route: "delegation", delegates: 2, tools: 23, tokens: 9800, duration: "6m 55s", time: "2025-01-14 16:30", timeline: [
                { label: "User Request", summary: "Write a demo article about AI experience", time: "16:30:01" },
                { label: "Style Analysis", summary: "Reviewer-A analyzed style profile", time: "16:31:12" },
                { label: "Draft Generation", summary: "Lead writer generated draft based on profile", time: "16:34:45" },
                { label: "Editor Review", summary: "Editor-A approved, waiting for human reviewer", time: "16:36:56" }
            ]}
        ]
    },

    // ========== 记忆图谱页 ==========
    memory: {
        totalFacts: 2395,
        totalEntities: 187,
        categories: ["user_pref", "project", "tool", "general"],
        graphUrl: "/demo-memory-graph.html"
    }
};

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
            desc: "产品规划、需求分析、路线图",
            badge: "PRODUCT",
            roleCount: 4,
            memoryCount: 12,
            roles: [
                { id: "product-manager", name: "Product Manager", icon: "👤", type: "pm", summary: "负责产品方向和需求优先级排序", files: 3, hasMemory: true, healthTags: [{ label: "活跃", status: "ok" }, { label: "经验 12 条", status: "ok" }] },
                { id: "context-builder", name: "Context Builder", icon: "🧩", type: "data", summary: "构建和维护项目上下文知识库", files: 5, hasMemory: true, healthTags: [{ label: "完整", status: "ok" }] },
                { id: "qa-reviewer", name: "QA Reviewer", icon: "🔍", type: "test", summary: "质量把关与验收标准制定", files: 2, hasMemory: false, healthTags: [{ label: "待补充", status: "warn" }] },
                { id: "team-boss-lite", name: "Team Boss Lite", icon: "🎯", type: "ops", summary: "团队总控与任务路由", files: 4, hasMemory: true, healthTags: [{ label: "运行中", status: "ok" }, { label: "经验 8 条", status: "ok" }] }
            ]
        },
        {
            id: "engineering-team",
            name: "Engineering Team",
            icon: "⚙️",
            desc: "编码、架构、技术调研",
            badge: "ENGINEERING",
            roleCount: 3,
            memoryCount: 18,
            roles: [
                { id: "engineer", name: "Engineer", icon: "🔧", type: "dev", summary: "核心编码与架构实现", files: 6, hasMemory: true, healthTags: [{ label: "活跃", status: "ok" }, { label: "经验 18 条", status: "ok" }] },
                { id: "readonly-audit", name: "Readonly Audit", icon: "🛡️", type: "ops", summary: "安全审计与合规检查", files: 2, hasMemory: true, healthTags: [{ label: "安全", status: "ok" }] },
                { id: "tech-researcher", name: "Tech Researcher", icon: "🔬", type: "data", summary: "技术调研与方案对比", files: 3, hasMemory: false, healthTags: [{ label: "待补充", status: "warn" }] }
            ]
        },
        {
            id: "qa-team",
            name: "QA Team",
            icon: "✅",
            desc: "测试、验证、质量保障",
            badge: "QA",
            roleCount: 2,
            memoryCount: 6,
            roles: [
                { id: "qa-checklist", name: "QA Checklist", icon: "📝", type: "test", summary: "测试清单与用例管理", files: 2, hasMemory: true, healthTags: [{ label: "完整", status: "ok" }] },
                { id: "bug-tracker", name: "Bug Tracker", icon: "🐛", type: "test", summary: "Bug 追踪与回归验证", files: 1, hasMemory: false, healthTags: [{ label: "待补充", status: "warn" }] }
            ]
        }
    ],

    // ========== 定时任务页 ==========
    tasks: [
        { job_id: "demo-daily-report", name: "Daily Report Generation", schedule: "0 2 * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T02:05:00Z", next_run: "2025-01-16T02:00:00Z", prompt: "采集今日社区讨论，生成日报并播报" },
        { job_id: "demo-weekly-summary", name: "Weekly Summary Report", schedule: "0 5 * * 1", enabled: true, last_status: "ok", last_run: "2025-01-13T05:10:00Z", next_run: "2025-01-20T05:00:00Z", prompt: "汇总本周社区动态，生成周报" },
        { job_id: "demo-health-check", name: "System Health Check", schedule: "*/30 * * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T10:30:00Z", next_run: "2025-01-15T11:00:00Z", prompt: "检查各服务健康状态，异常时播报" },
        { job_id: "demo-skill-audit", name: "Skill Library Audit", schedule: "0 3 * * 0", enabled: true, last_status: "ok", last_run: "2025-01-12T03:00:00Z", next_run: "2025-01-19T03:00:00Z", prompt: "审计技能库完整性，清理过期技能" },
        { job_id: "demo-memory-compress", name: "Memory Compression", schedule: "0 4 1 * *", enabled: true, last_status: "ok", last_run: "2025-01-01T04:00:00Z", next_run: "2025-02-01T04:00:00Z", prompt: "压缩长期记忆，移除过期信息" },
        { job_id: "demo-market-scan", name: "Market Opportunity Scan", schedule: "0 1 * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T01:05:00Z", next_run: "2025-01-16T01:00:00Z", prompt: "扫描 GitHub 趋势和市场需求" },
        { job_id: "demo-backup-task", name: "Project Backup", schedule: "0 6 * * *", enabled: false, last_status: "none", last_run: null, next_run: null, prompt: "备份项目文件到远程仓库" },
        { job_id: "demo-token-report", name: "Token Usage Report", schedule: "0 7 * * *", enabled: true, last_status: "ok", last_run: "2025-01-15T07:00:00Z", next_run: "2025-01-16T07:00:00Z", prompt: "汇总昨日 token 用量，生成报告" }
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
            { name: "qwen3.6-plus", tokens: 1847392, pct: 64.9, color: "#6366f1" },
            { name: "qwen3.5-plus", tokens: 523841, pct: 18.4, color: "#8b5cf6" },
            { name: "gpt-4o-mini", tokens: 312550, pct: 11.0, color: "#10b981" },
            { name: "claude-sonnet", tokens: 163609, pct: 5.7, color: "#f59e0b" }
        ],
        topSessions: [
            { title: "Dashboard 前端重构", tokens: 184200, calls: 156, date: "2025-01-14" },
            { title: "技能库架构审计", tokens: 92100, calls: 87, date: "2025-01-13" },
            { title: "消息播报格式优化", tokens: 67800, calls: 52, date: "2025-01-12" },
            { title: "记忆压缩策略", tokens: 54300, calls: 41, date: "2025-01-11" },
            { title: "市场扫描流水线", tokens: 43200, calls: 38, date: "2025-01-10" }
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
            { id: "sess-001", userMsg: "重做 dashboard-lite 前端迁移", preview: "将本地 Dashboard 前端迁移为脱敏静态公开版...", route: "delegation", delegates: 3, tools: 47, tokens: 12400, duration: "8m 32s", time: "2025-01-15 10:23", timeline: [
                { label: "用户请求", summary: "重做 dashboard-lite，直接迁移本地 Dashboard 前端", time: "10:23:01" },
                { label: "意图识别", summary: "识别为前端迁移 + 脱敏任务", time: "10:23:03" },
                { label: "子代理分派", summary: "分派 3 个子代理并行处理 CSS/HTML/JS", time: "10:23:05", children: 3 },
                { label: "安全扫描", summary: "全仓库扫描敏感词，无命中", time: "10:31:28" }
            ]},
            { id: "sess-002", userMsg: "修复排课系统时间冲突 Bug", preview: "排课页面时间冲突检测逻辑有误...", route: "direct", delegates: 0, tools: 18, tokens: 5600, duration: "3m 15s", time: "2025-01-15 09:45", timeline: [
                { label: "用户请求", summary: "排课时间冲突检测有误", time: "09:45:01" },
                { label: "定位 Bug", summary: "发现时段重叠判断条件错误", time: "09:46:12" },
                { label: "修复验证", summary: "修复并跑通测试用例", time: "09:48:16" }
            ]},
            { id: "sess-003", userMsg: "生成社区日报", preview: "自动采集昨日社区讨论，生成日报...", route: "cron", delegates: 0, tools: 12, tokens: 8900, duration: "5m 42s", time: "2025-01-15 02:30", timeline: [
                { label: "定时触发", summary: "每日 02:30 自动触发", time: "02:30:00" },
                { label: "数据采集", summary: "从消息源拉取昨日记录 47 条", time: "02:30:15" },
                { label: "日报生成", summary: "AI 模型生成日报正文", time: "02:33:28" },
                { label: "群聊播报", summary: "投递到播报群", time: "02:35:42" }
            ]},
            { id: "sess-004", userMsg: "记忆库压缩优化", preview: "长期记忆接近上限，需要压缩...", route: "direct", delegates: 1, tools: 31, tokens: 15200, duration: "12m 08s", time: "2025-01-14 22:10", timeline: [
                { label: "用户请求", summary: "记忆库需要压缩优化", time: "22:10:01" },
                { label: "审计分析", summary: "扫描 2395 条 facts，发现重复 342 条", time: "22:12:15" },
                { label: "压缩执行", summary: "合并重复条目，释放 18% 空间", time: "22:18:33" },
                { label: "健康检查", summary: "PRAGMA integrity_check=ok", time: "22:22:09" }
            ]},
            { id: "sess-005", userMsg: "文章初稿生成", preview: "按标准流程生成一篇关于 AI 教育实战经验的文章...", route: "delegation", delegates: 2, tools: 23, tokens: 9800, duration: "6m 55s", time: "2025-01-14 16:30", timeline: [
                { label: "用户请求", summary: "写一篇 AI 教育实战经验文章", time: "16:30:01" },
                { label: "风格分析", summary: "阿珍分析风格画像", time: "16:31:12" },
                { label: "初稿生成", summary: "主笔基于画像生成初稿", time: "16:34:45" },
                { label: "主编审核", summary: "丧彪审核通过，等待强哥确认", time: "16:36:56" }
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

# Demo Agent Workbench

这是一个虚构 demo 项目，用来演示最小 AI Agent 文件治理工作台。

项目目标：

让 AI 在处理任务前，能先找到项目状态、项目进度和知识库入口，而不是每次靠猜。

目录：

```text
demo-project/
├── README.md
├── STATE.md
├── registry.yaml
├── docs/
│   └── progress.md
└── knowledge/
    └── README.md
```

推荐试用任务：

```markdown
请读取这个 demo 项目，判断当前项目处于什么阶段、下一步应该做什么。不要修改文件，只输出依据和建议。
```

如果 AI 没先读 STATE 和 progress，就说明导航还不够清楚。

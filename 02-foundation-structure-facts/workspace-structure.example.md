# 工作区目录结构示例

下面是一个适合 AI Agent 协作的最小工作区结构。

```text
workspace/
├── knowledge/
│   ├── README.md
│   └── standards/
│       ├── terminology.md
│       └── structure.md
├── projects/
│   ├── registry.yaml
│   └── demo-project/
│       ├── STATE.md
│       └── docs/
│           └── progress.md
└── teams/
    └── team-registry.example.yaml
```

核心原则：

1. `knowledge/` 放通用规范，不放某个项目的临时进度。
2. `projects/registry.yaml` 是项目索引，不写长篇历史。
3. 每个项目自己的事实放在项目目录里。
4. `STATE.md` 写当前状态，`docs/progress.md` 写过程记录。
5. `teams/` 放团队边界，不把团队经验塞进项目状态。

最容易翻车的做法：

- 把所有东西都写进一个 README。
- 让 AI 自己猜哪个文件最新。
- 旧文档不标历史，导致 AI 拿旧信息覆盖新事实。

# QUICKSTART：10 分钟打开这个 AI Agent 工作台公开包

这个公开包不是完整系统安装器，也不是商业产品。

它是一个可阅读、可复制、可让 AI 做只读检查的 AI Agent 工作台 demo：

- 用 `demo-workspace/` 看一个多团队工作台应该怎么组织事实源、团队边界、角色档案和角色记忆。
- 用 `dashboard-lite/index.html` 直接看一个基于真实 Hermes Dashboard 重写的脱敏静态预览版。
- 用 `prompts/start-here-task.md` 让你常用的 AI 帮你做第一次只读检查。
- 用 `scripts/build-demo-context.py` 体验最小版“上下文注入”：从工作区文件拼出一份任务上下文。

---

## 第一步看什么

如果你只想快速体验，按这个顺序来：

1. 打开 `dashboard-lite/index.html`，先看接近真实 3102 工作台风格的脱敏静态预览。
2. 阅读 `demo-workspace/README.md`，看 demo 工作区怎么组织。
3. 复制 `prompts/start-here-task.md`，让 AI 对 `demo-workspace/` 做只读检查。
4. 运行 `python scripts/build-demo-context.py`，看它如何把事实源、角色和记忆拼成任务上下文。

---

## 怎么复制 demo-workspace

你可以把 `demo-workspace/` 整个目录复制到自己的电脑任意位置，然后改名：

```bash
cp -R demo-workspace my-agent-workspace
```

接着优先改这些文件：

- `my-agent-workspace/projects/registry.yaml`
- `my-agent-workspace/projects/demo-agent-workbench/STATE.md`
- `my-agent-workspace/projects/demo-agent-workbench/docs/progress.md`
- `my-agent-workspace/teams/team-registry.example.yaml`
- `my-agent-workspace/roles/*.md`
- `my-agent-workspace/memories/*/*.md`

不要先追求复杂自动化。先让 AI 能读懂：现在有哪些项目、哪些团队、谁负责什么、下一步该做什么。

---

## 怎么打开 dashboard-lite

在线预览：

```text
https://liuxiaoqianglongxia.github.io/hermes-genesis-season1-pack/dashboard-lite/
```

也可以下载仓库后，直接用浏览器打开：

```text
dashboard-lite/index.html
```

它不需要安装依赖，不连接后端，不读取真实系统。它保留真实 Hermes Dashboard 的深色背景、顶部导航、紫色高亮、卡片、表格和状态标签，但全部数据都是 demo。

所有展示数据都在：

```text
dashboard-lite/sample-data.js
```

这是基于真实 Hermes Dashboard 重写的脱敏静态预览版，用来说明一个 AI Agent 工作台可以如何展示端口状态、角色、任务、技能、流水线、用量观察和轻量记忆状态。

---

## 怎么让 AI 做只读检查

把 `prompts/start-here-task.md` 的内容复制给你常用的 AI，同时把输入目录指向：

```text
demo-workspace/
```

这个任务会要求 AI：

- 只读检查；
- 不修改文件；
- 不联网；
- 不上传；
- 每个结论都指向具体文件。

它适合作为第一次验收：这个工作台是否有清楚的事实源、团队边界、角色职责和下一步建议。

---

## 如果只想轻量起步

看这些文件：

1. `QUICKSTART.md`
2. `demo-workspace/README.md`
3. `demo-workspace/projects/demo-agent-workbench/STATE.md`
4. `prompts/start-here-task.md`

目标不是搭系统，而是先让 AI 读懂你的项目现状。

---

## 如果想学“一个 AI 管多个团队”

看这些文件：

1. `03-team-workbench/team-boss.min.md`
2. `03-team-workbench/subagent-task-boundary.md`
3. `demo-workspace/teams/team-registry.example.yaml`
4. `demo-workspace/roles/product-manager.md`
5. `demo-workspace/roles/engineer.md`
6. `demo-workspace/roles/qa-reviewer.md`

重点看三件事：

- team-boss 只负责理解、路由和验收，不全包；
- 角色档案让 AI 知道“我是谁”；
- 角色记忆让 AI 不要每次从零开始。

---

## 如果想看 Dashboard 思路

看这些文件：

1. `dashboard-lite/index.html`
2. `dashboard-lite/sample-data.js`
3. `06-dashboard-observability/six-pages-design.md`
4. `06-dashboard-observability/dashboard-data-flow.md`
5. `06-dashboard-observability/what-not-to-copy.md`

公开包里的 Dashboard Lite 是基于真实 Hermes Dashboard 重写的脱敏静态预览版，不是完整后端。

真正要做自己的 Dashboard，先想清楚你有哪些可靠数据源，再考虑页面。

---

## 不要一上来做什么

不要一上来就：

- 把自己的密钥、账号、群 ID、日志贴进公开仓库；
- 复制完整私有系统；
- 直接做复杂 Dashboard 后端；
- 让 AI 同时改代码、重启服务、发布结果；
- 把 README 当数据库，所有状态都往 README 里塞；
- 期待这个公开包一键安装或保证跑通。

正确顺序是：先建事实源，再建团队边界，再建角色档案，最后再考虑自动化和可视化。

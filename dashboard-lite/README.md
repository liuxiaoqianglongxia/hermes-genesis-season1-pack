# Dashboard Lite

这是基于真实 Hermes Dashboard 重写的脱敏静态预览版。

它的目的不是提供完整产品，而是让读者快速看懂：一个 AI Agent 工作台可以如何把端口状态、Agent 角色、定时任务、技能、流水线、用量观察和轻量记忆状态放到一个可观测界面里。

## 怎么打开

在线预览：

```text
https://liuxiaoqianglongxia.github.io/hermes-genesis-season1-pack/dashboard-lite/
```

本地打开：

```text
dashboard-lite/index.html
```

直接用浏览器打开即可。

## 它是什么

- 基于真实 Hermes Dashboard 的视觉和页面结构重写；
- 深色背景、顶部导航、紫色高亮、卡片、表格、状态标签；
- 使用虚构 demo 数据；
- 适合用来理解工作台页面应该展示哪些信息。

## 它不是什么

- 不是完整 Hermes Dashboard 后端；
- 不包含真实 API；
- 不读取真实数据；
- 不连接本地服务；
- 不包含真实端口、真实路径、真实日志、真实 team-registry 或真实角色记忆。

## 数据在哪里

所有展示数据都在：

```text
dashboard-lite/sample-data.js
```

这里的数据全部是虚构 demo：

- demo-agent-workbench
- demo-content-pipeline
- product-team
- engineering-team
- qa-team
- product-manager
- engineer
- qa-reviewer
- team-boss-lite
- readonly-audit
- context-builder
- qa-checklist

## 如果想接自己的数据

不要一上来接后端。

推荐顺序：

1. 先准备自己的事实源：项目 registry、STATE、progress、team-registry、roles、memories。
2. 先把 `sample-data.js` 改成你的脱敏数据。
3. 确认页面结构适合你。
4. 再考虑接自己的后端 API。

公开仓库里这个版本保持纯静态，方便 GitHub Pages 直接预览。

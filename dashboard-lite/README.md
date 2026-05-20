# Hermes Dashboard Lite — 脱敏静态演示版

> 基于真实 Hermes Dashboard v3.0 前端迁移的脱敏静态预览版。

## 这是什么

这是从**本地运行的 Hermes Dashboard (端口 3102)** 直接迁移出来的前端页面。

保留了真实的页面结构、CSS 样式、布局和视觉体验，但：

- **不包含真实后端** — 没有 API 服务、数据库、WebSocket
- **不读取真实数据** — 所有数据来自 `sample-data.js` 中的虚构 demo 数据
- **不执行服务控制** — 重启、暂停、日志等按钮点击后弹出 "demo disabled" 提示
- **不访问外部 CDN** — 所有资源本地化，GitHub Pages 可直接打开

## 为什么创建

让读者**直观感受 Hermes Dashboard 前端长什么样**，无需部署后端、无需配置环境。

打开 `index.html` 即可看到完整的深色科技风 UI，包括：

- 顶部导航栏（毛玻璃效果 + 紫色高亮选中态）
- 端口状态卡片（服务状态、运行/停止指示器）
- Agent 团队与角色页面（可展开的团队区块、角色卡片）
- 定时任务表格（磨砂玻璃风格表格 + 详情弹窗）
- 技能中心（分类导航 + 卡片网格）
- 会话流水线（左侧列表 + 右侧详情面板）
- Token 统计页面（统计卡片 + 模型分布）
- 记忆图谱页面（demo 占位）

## 文件结构

```
dashboard-lite/
├── index.html          # 端口状态首页
├── agents.html         # 团队与角色
├── tasks.html          # 定时任务
├── skills.html         # 技能中心
├── pipeline.html       # 会话流水线
├── token.html          # Token 统计
├── memory.html         # 记忆图谱
├── sample-data.js      # 所有页面的 demo 数据源
├── css/                # 从真实 Dashboard 迁移的样式
│   ├── style.css
│   ├── navigation.css
│   ├── responsive.css
│   ├── transitions.css
│   ├── sse-components.css
│   ├── tasks.css
│   └── console-v31.css
├── js/
│   └── app.js          # 所有页面的 demo 渲染逻辑
├── components/         # UI 组件（toast、modal、skeleton、charts）
│   ├── toast.js
│   ├── modal.js
│   ├── skeleton.js
│   └── charts.js
└── README.md
```

## 如何使用

### 本地打开

直接双击 `index.html`，或用浏览器打开：

```
file:///path/to/dashboard-lite/index.html
```

### GitHub Pages

```
https://liuxiaoqianglongxia.github.io/hermes-genesis-season1-pack/dashboard-lite/
```

### 接入自己的系统

如果你有自己的后端，需要：

1. 修改 `sample-data.js` → 替换为真实 API 返回的数据结构
2. 修改 `js/app.js` → 将 DEMO_DATA 读取改为 `fetch()` 调用
3. 保留 `css/` 和 `components/` 不变

## 数据来源

所有数据都来自 `sample-data.js`，包含虚构的：

- `demo-agent-workbench`、`demo-content-pipeline` 等服务名
- `product-team`、`engineering-team`、`qa-team` 等团队
- `demo-daily-report`、`demo-weekly-summary` 等任务
- 虚构的 token 用量数据、会话记录

**不出现**任何真实项目名、真实端口、真实路径、真实日志、API Key、飞书/微信相关信息。

## 注意事项

- 这不是一个完整的产品，只是前端演示
- 部分页面功能（如图表）因缺少 CDN 而显示占位
- 记忆图谱页面需要 Brain-Graph 后端，此处显示 demo 统计
- 所有控制按钮（重启、暂停、运行等）在 demo 模式下不可用

## License

Dashboard Lite 作为本资料包的一部分，遵循仓库根目录 LICENSE。具体使用边界见仓库根目录 LICENSE 文件。

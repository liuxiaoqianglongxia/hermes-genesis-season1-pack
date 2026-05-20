# Hermes Genesis 第一季公开资料包

这是一个给中文读者看的 AI Agent 工作台资料包。路径使用英文（为了保证 GitHub 和 zip 的跨平台稳定性），正文使用中文（为了方便阅读）。

这份资料包来自「麦尖AI」Hermes Genesis 第一季连载，目标是把「一个 AI 怎么管多个团队」这件事，拆成可以阅读、复制和改造的模板、案例和检查清单。

公众号文章入口 → [待发布]

---

## 这是什么

一个教育行业老板用 AI Agent 同时管理多个团队的完整工作台资料包。

来自 15 篇连载文章的实战沉淀，包含：

- 目录规范、事实源、STATE.md、progress.md 这些地基材料
- 子代理、team-boss、team-registry 这套团队协作骨架
- 角色档案、角色记忆和上下文注入的简化示例
- 一个脱敏后的真实团队协作案例
- Dashboard 可观测系统的页面结构和设计思路
- 可以直接复制给 AI 的任务提示词和检查清单
- 常见翻车点和自查表

它解决的不是"下载以后自动拥有完整系统"。

而是帮你少翻很多文章，先看清楚：这套系统到底从哪里开始搭，哪些东西应该先做，哪些东西千万别一上来就抄。

## 它不是什么

- 完整的 Hermes Agent 安装器
- 商业系统
- 一键部署工具
- 开箱即用的 Dashboard 产品
- 不包含任何 API Key、密钥或私有配置
- 不提供一对一部署服务
- 不保证在所有电脑环境下直接跑通

## 适合谁

- 正在用（或准备用）AI Agent 管理多个项目或团队的实践者
- 被"AI 每次新会话都像白纸"困扰过的人
- 想建立 AI 工作文件治理秩序的人
- 喜欢从真实踩坑经验中学习的人

## 不适合谁

- 想要一键安装、开箱即用的人
- 没有 AI Agent 使用经验、需要从基础教起的人
- 期望完整产品级解决方案的人
- 需要商业级售后支持的人

## 三条使用路线

| 路线 | 预计时间 | 阅读范围 | 完成后你能得到什么 |
|------|---------|---------|-----------------|
| **轻量起步** | ~30 分钟 | `00-start-here/` + `02-foundation-structure-facts/` | 搭出一个最小文件治理工作台 |
| **多团队实战** | ~2 小时 | 轻量起步 + `03-team-workbench/` + `05-roles-and-memory/` | 让一个 AI 开始管多个团队 |
| **可观测进阶** | ~半天 | 多团队实战 + `06-dashboard-observability/` + `08-pitfalls-and-checklists/` | 让系统运行态真正可见 |

## 目录说明

| 目录 | 里面有什么 |
|------|-----------|
| `QUICKSTART.md` | 10 分钟快速体验入口：先看什么、怎么打开 Dashboard Lite、怎么让 AI 做只读检查 |
| `demo-workspace/` | 可复制的完整 demo 工作区：knowledge、projects、teams、roles、memories |
| `dashboard-lite/` | 基于真实 Hermes Dashboard 重写的脱敏静态预览版，不连接真实后端 |
| `prompts/` | 可直接复制给 AI 的任务提示词，包含 start-here 只读检查任务 |
| `scripts/` | 只读 demo 辅助脚本，例如 `build-demo-context.py`，不连接真实 Hermes |
| `examples/` | demo 脚本输出样例，例如 `demo-context-output.md` |
| `00-start-here/` | 资料包说明、使用建议、边界声明 |
| `01-season-roadmap/` | 第一季 15 篇文章的路线图、每篇对应交付材料、三条复制路线 |
| `02-foundation-structure-facts/` | 目录结构规范、STATE 模板、progress 模板、项目 registry 示例、术语表 |
| `03-team-workbench/` | team-boss 最小规则、子代理防卡死清单、主代理验收清单、团队注册表示例 |
| `04-team-case-sanitized/` | 脱敏后的真实团队协作案例：项目经理先出方案、团队分工、验收口径 |
| `05-roles-and-memory/` | 角色档案模板、角色记忆模板、经验日志模板、上下文注入伪代码、demo 角色 |
| `06-dashboard-observability/` | Dashboard 六页设计思路、数据流说明、可观测字段、不建议直接抄的部分 |
| `07-copyable-prompts/` | 可直接复制给 AI 的任务提示词：团队规划、子代理派单、Dashboard 审计、文章审稿等 |
| `08-pitfalls-and-checklists/` | README 变数据库、team-boss 写胖、子代理卡死、多团队串线、安全自查 |
| `09-demo-project/` | 最小 demo 项目：STATE + progress + knowledge README + registry，用来验证你的 setup |
| `10-faq/` | 常见问题、如何改成自己的项目、不承诺事项 |

## 先看哪三个文件

如果你只想快速体验，先打开 **`QUICKSTART.md`**。

`dashboard-lite/index.html` 是基于真实 Hermes Dashboard 重写的脱敏静态预览版，可以直接浏览器打开看效果；在线预览地址：

https://liuxiaoqianglongxia.github.io/hermes-genesis-season1-pack/dashboard-lite/

也可以下载仓库后，直接用浏览器打开 `dashboard-lite/index.html`。它保留真实工作台的深色导航、卡片、表格、状态标签和信息密度，但不包含后端、不读取真实数据。

`demo-workspace/` 可以复制后让 AI 做只读检查；`prompts/start-here-task.md` 可以直接复制给 AI；`scripts/build-demo-context.py` 是只读 demo 脚本，不连接真实 Hermes。

1. **`00-start-here/README.md`** — 5 分钟了解全貌，知道先做什么。
2. **`02-foundation-structure-facts/workspace-structure.example.md`** — 最小目录结构，复制后就能用。
3. **`08-pitfalls-and-checklists/safety-checklist.md`** — 搭完后对照自查，确认没有踩坑。

## 如何改成自己的项目

- 所有模板里的 `<your-project>` 替换成你的项目名。
- `team-registry.example.yaml` 里的团队名替换成你的团队。
- 角色档案模板保留结构，内容按你的场景重写。
- Dashboard 思路需要对接你自己的数据源，不能直接复制后端。
- 这份资料包鼓励你改，不鼓励你原封不动地抄。

## 安全提醒

本资料包不包含任何密钥、Token、群 ID、App ID。

复制前请自行扫描，确认没有把自己的敏感信息写进模板后直接提交到公开仓库。

## 公众号文章入口

这个资料包来自「麦尖AI」微信公众号的 Hermes Genesis 第一季连载。

文章讲的是：一个教育行业老板怎么从一个"每次新会话都重新认识我"的 AI，慢慢搭出一个有目录、有规范、有导航、有分工、有记忆、有边界、还能被看见的 AI 工作台。

如果你只想理解思路，可以先读文章；如果你想动手改，直接从这个公开包的 demo project 开始。

→ **最后一篇文章**：[待发布链接]

## Star / 关注 / 赞赏

这个资料包完全公开，免费下载。

如果这个仓库对你有帮助，欢迎点 Star、转发给朋友，或关注公众号「麦尖AI」。赞赏只是自愿支持创作，不和资料获取绑定。

---

## License / 授权

本资料包采用 CC BY-NC-SA 4.0 协议开放。
你可以学习、复制、修改和分享，但请保留出处，不要将本资料包直接打包转售。
具体使用边界见 LICENSE。

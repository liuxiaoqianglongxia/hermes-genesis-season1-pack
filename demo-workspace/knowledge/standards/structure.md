# Structure：demo 工作台目录职责

## knowledge/

放稳定规则、术语和结构说明。

不要把项目进度写在这里。

## projects/

放项目事实。

- `registry.yaml`：项目索引。
- `<project-id>/STATE.md`：项目当前状态。
- `<project-id>/docs/progress.md`：项目进展。

## teams/

放团队注册表。

团队注册表应该说明：

- 团队负责什么；
- 能读取哪些事实源；
- 能写哪些文件；
- 哪些关键词会路由到这个团队；
- 角色记忆目录如何映射。

## roles/

放角色档案。

每个角色档案至少包含：

- 核心定位；
- 核心能力；
- SOP 工作流；
- 交付物；
- 红线。

## memories/

放角色记忆。

建议每个角色至少有：

- `experience-log.md`
- `failure-log.md`

经验记录要可复用，失败记录要写清下次如何避免。

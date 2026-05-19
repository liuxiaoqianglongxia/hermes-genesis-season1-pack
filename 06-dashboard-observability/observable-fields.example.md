# 可观测字段示例

可观测字段要能回答三个问题：现在是什么状态？证据在哪里？下一步该不该处理？

示例字段：

| 模块 | 字段 | 说明 |
| --- | --- | --- |
| 服务 | name | 服务名称 |
| 服务 | status | online / offline / unknown |
| 服务 | checked_at | 最近检查时间 |
| 服务 | source | 数据来源说明 |
| 角色 | role_id | 角色标识 |
| 角色 | team_id | 所属团队 |
| 角色 | responsibility | 职责摘要 |
| 角色 | memory_status | 是否有可用经验摘要 |
| 任务 | job_name | 任务名称 |
| 任务 | last_result | 最近结果摘要 |
| 任务 | next_run | 下次计划时间 |
| 流水线 | stage | 当前阶段 |
| 流水线 | artifact | 最近产物路径或说明 |

重要原则：

- 字段少一点没关系，但每个字段要有真实来源。
- 如果来源不稳定，字段值写 unknown，不要编。
- 不要把展示页当成事实裁决者。

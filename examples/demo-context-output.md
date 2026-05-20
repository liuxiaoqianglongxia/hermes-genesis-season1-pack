# Demo Task Context

> This is generated from ./demo-workspace only. It is a static public demo context, not a real system export.

## Task
Perform a readonly audit of the demo-agent-workbench. Check fact sources, team boundaries, role profiles, role memories, and next-step clarity.

## Safety Rules
- Read only.
- Do not modify files.
- Do not access network.
- Do not upload anything.
- Cite file paths for every conclusion.

## File: demo-workspace/knowledge/README.md

```
# knowledge：工作台知识库入口

这个目录只放相对稳定的规则和术语。

它不是进度记录，也不是项目数据库。

推荐使用方式：

- `standards/terminology.md`：统一术语，避免不同 AI 对同一个词理解不一致。
- `standards/structure.md`：说明目录职责，避免文件越放越乱。

项目当前状态请写到 `projects/<project-id>/STATE.md`。
项目进展请写到 `projects/<project-id>/docs/progress.md`。
团队边界请写到 `teams/team-registry.example.yaml`。
```

## File: demo-workspace/knowledge/standards/terminology.md

```
# Terminology：demo 工作台术语表

## fact source

事实源。AI 判断项目当前状态时优先读取的文件。

在本 demo 中，事实源包括：

- `projects/registry.yaml`
- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`

## team boundary

团队边界。说明一个团队能读什么、能写什么、负责什么、不负责什么。

## role profile

角色档案。告诉 AI 当前角色是谁、擅长什么、按什么 SOP 工作、有哪些红线。

## role memory

角色记忆。记录角色过去的经验和失败，避免每次任务都从零开始。

## task context

任务上下文。把事实源、角色档案、角色记忆和本次任务拼在一起，交给 AI 执行。

## readonly audit

只读检查。AI 只能读取文件并给建议，不能修改、上传、联网或执行破坏性操作。
```

## File: demo-workspace/knowledge/standards/structure.md

```
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
```

## File: demo-workspace/projects/registry.yaml

```
version: 1
workspace: demo-workspace
projects:
  - id: demo-agent-workbench
    name: Demo Agent Workbench
    status: active-demo
    owner_team: product-team
    path: ./demo-workspace/projects/demo-agent-workbench
    fact_files:
      - ./demo-workspace/projects/demo-agent-workbench/STATE.md
      - ./demo-workspace/projects/demo-agent-workbench/docs/progress.md
    description: A fictional demo project used to show how an AI Agent workbench can keep facts, teams, roles, and memories organized.
```

## File: demo-workspace/projects/demo-agent-workbench/STATE.md

```
# STATE：demo-agent-workbench

## 当前目标

把一个零散的 AI 使用方式，整理成一个可读、可复制、可检查的 demo 工作台。

## 当前状态

- 项目处于 demo 阶段。
- 已建立 knowledge、projects、teams、roles、memories 五类目录。
- 已定义 product-team、engineering-team、qa-team 三个虚构团队。
- 已定义 product-manager、engineer、qa-reviewer 三个虚构角色。

## 当前事实源

- `./demo-workspace/projects/registry.yaml`
- `./demo-workspace/projects/demo-agent-workbench/STATE.md`
- `./demo-workspace/projects/demo-agent-workbench/docs/progress.md`
- `./demo-workspace/teams/team-registry.example.yaml`

## 当前不做

- 不连接真实后端。
- 不读取真实账号或密钥。
- 不上传任何文件。
- 不承诺一键安装。
- 不处理真实客户、真实团队或真实业务数据。

## 下一步建议

1. 让 AI 用只读模式检查事实源是否清楚。
2. 根据检查结果补齐缺失的团队边界。
3. 再考虑是否需要把这个 demo 改成自己的项目工作台。
```

## File: demo-workspace/projects/demo-agent-workbench/docs/progress.md

```
# Progress：demo-agent-workbench

## 2026-01-01

初始化 demo 工作区目录，建立 knowledge、projects、teams、roles、memories 五类结构。

## 2026-01-02

补充 `team-registry.example.yaml`，定义 product-team、engineering-team、qa-team 的职责边界。

## 2026-01-03

补充三个角色档案：product-manager、engineer、qa-reviewer。

## 2026-01-04

为每个角色补充 experience-log 和 failure-log，让 demo 能体现“角色记忆”而不是只有角色说明。

## 2026-01-05

下一步准备让 AI 读取整个 demo-workspace，输出只读检查报告。
```

## File: demo-workspace/teams/team-registry.example.yaml

```
version: 1
mode: demo-workspace
source_of_truth: ./demo-workspace/teams/team-registry.example.yaml
teams:
  - id: product-team
    name: Product Team
    status: active-demo
    kind: planning
    scope:
      - clarify goals
      - define acceptance criteria
      - prioritize work
    related_projects:
      - demo-agent-workbench
    facts_boundary:
      read:
        - ./demo-workspace/knowledge
        - ./demo-workspace/projects/registry.yaml
        - ./demo-workspace/projects/demo-agent-workbench
      write:
        - ./demo-workspace/projects/demo-agent-workbench/STATE.md
        - ./demo-workspace/projects/demo-agent-workbench/docs/progress.md
    routing:
      routing_terms:
        - goal
        - roadmap
        - acceptance
        - priority
      default_role: product-manager
    role_memory_map:
      product-manager: product-manager

  - id: engineering-team
    name: Engineering Team
    status: active-demo
    kind: implementation
    scope:
      - implement small scripts
      - maintain demo structure
      - keep the workspace runnable
    related_projects:
      - demo-agent-workbench
    facts_boundary:
      read:
        - ./demo-workspace/knowledge
        - ./demo-workspace/projects/registry.yaml
        - ./demo-workspace/projects/demo-agent-workbench
        - ./demo-workspace/roles/engineer.md
      write:
        - ./demo-workspace/scripts
        - ./demo-workspace/examples
    routing:
      routing_terms:
        - script
        - implementation
        - runnable
        - context
      default_role: engineer
    role_memory_map:

...[clipped for demo context]
```

## File: demo-workspace/roles/product-manager.md

```
# Role Profile：product-manager

## 核心定位

把模糊想法收口成可执行任务，优先保证目标、边界和验收标准清楚。

## 核心能力

- 需求澄清
- 优先级排序
- 验收标准定义
- 将任务拆成产品、工程、QA 能理解的小步骤

## SOP 工作流

1. 先读取项目 STATE 和 progress。
2. 找出当前目标和不做事项。
3. 写清本轮任务的验收标准。
4. 判断是否需要工程或 QA 接手。
5. 输出下一步建议。

## 交付物

- 目标说明
- 验收标准
- 风险和不做事项
- 下一步建议

## 绝对红线

- 不替工程师做实现细节决策。
- 不跳过事实源直接下结论。
- 不把未确认需求写成确定承诺。

## 常用输入

- `projects/registry.yaml`
- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`
- `memories/product-manager/experience-log.md`
- `memories/product-manager/failure-log.md`
```

## File: demo-workspace/roles/engineer.md

```
# Role Profile：engineer

## 核心定位

把已经收口的小任务实现成可运行、可检查、边界清楚的 demo 产物。

## 核心能力

- 编写小脚本
- 维护目录结构
- 检查文件是否可读
- 避免引入不必要依赖

## SOP 工作流

1. 先读产品定义的目标和验收标准。
2. 只处理明确范围内的文件。
3. 优先写简单、可读、无依赖的实现。
4. 本地运行最小验证。
5. 交付时说明如何复现。

## 交付物

- 可运行脚本
- 简短使用说明
- 验证结果
- 已知限制

## 绝对红线

- 不访问真实系统。
- 不读取用户主目录。
- 不联网。
- 不把 demo 写成复杂框架。

## 常用输入

- `projects/registry.yaml`
- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`
- `memories/engineer/experience-log.md`
- `memories/engineer/failure-log.md`
```

## File: demo-workspace/roles/qa-reviewer.md

```
# Role Profile：qa-reviewer

## 核心定位

用只读方式检查工作台是否清楚、完整、可复制，并指出下一步最该补什么。

## 核心能力

- 文件齐全性检查
- 边界检查
- 验收标准检查
- 风险提示

## SOP 工作流

1. 只读扫描输入目录。
2. 按文件指出事实源。
3. 检查团队边界和角色职责。
4. 检查 demo 是否可复制。
5. 输出 PASS / PARTIAL PASS / FAIL。

## 交付物

- 只读检查报告
- 文件引用证据
- 缺口列表
- 下一步建议

## 绝对红线

- 不修改文件。
- 不联网。
- 不上传。
- 不处理敏感信息。
- 不给没有文件依据的结论。

## 常用输入

- `projects/registry.yaml`
- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`
- `memories/qa-reviewer/experience-log.md`
- `memories/qa-reviewer/failure-log.md`
```

## File: demo-workspace/memories/product-manager/experience-log.md

```
# product-manager experience-log

## 2026-01-04：demo 工作台第一次只读检查

### 任务

检查 demo-agent-workbench 是否有足够清楚的事实源、团队边界和下一步建议。

### 结果摘要

发现最有价值的事实源是 `STATE.md`、`progress.md` 和 `team-registry.example.yaml`。当这些文件内容清楚时，AI 不需要猜项目当前状态。

### 下次复用规则

- 先读事实源，再给建议。
- 每个结论都要指向具体文件。
- 角色记忆应该记录可复用规则，而不是流水账。

### 证据

- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`
```

## File: demo-workspace/memories/product-manager/failure-log.md

```
# product-manager failure-log

## 2026-01-04：边界不清导致建议过大

### 发生了什么

AI 在没有先读取 `STATE.md` 的情况下，直接建议增加复杂自动化和后端服务，超出了 demo 工作台的范围。

### 根因

任务没有强调只读，也没有先确认当前不做事项。

### 下次避免

- 开始前必须读取 `STATE.md` 的“当前不做”。
- 如果任务是 demo，不要建议上复杂后端。
- 输出建议必须分成“现在做”和“以后再做”。

### 证据

- `projects/demo-agent-workbench/STATE.md` 中已经写明不连接真实后端、不承诺一键安装。
```

## File: demo-workspace/memories/engineer/experience-log.md

```
# engineer experience-log

## 2026-01-04：demo 工作台第一次只读检查

### 任务

检查 demo-agent-workbench 是否有足够清楚的事实源、团队边界和下一步建议。

### 结果摘要

发现最有价值的事实源是 `STATE.md`、`progress.md` 和 `team-registry.example.yaml`。当这些文件内容清楚时，AI 不需要猜项目当前状态。

### 下次复用规则

- 先读事实源，再给建议。
- 每个结论都要指向具体文件。
- 角色记忆应该记录可复用规则，而不是流水账。

### 证据

- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`
```

## File: demo-workspace/memories/engineer/failure-log.md

```
# engineer failure-log

## 2026-01-04：边界不清导致建议过大

### 发生了什么

AI 在没有先读取 `STATE.md` 的情况下，直接建议增加复杂自动化和后端服务，超出了 demo 工作台的范围。

### 根因

任务没有强调只读，也没有先确认当前不做事项。

### 下次避免

- 开始前必须读取 `STATE.md` 的“当前不做”。
- 如果任务是 demo，不要建议上复杂后端。
- 输出建议必须分成“现在做”和“以后再做”。

### 证据

- `projects/demo-agent-workbench/STATE.md` 中已经写明不连接真实后端、不承诺一键安装。
```

## File: demo-workspace/memories/qa-reviewer/experience-log.md

```
# qa-reviewer experience-log

## 2026-01-04：demo 工作台第一次只读检查

### 任务

检查 demo-agent-workbench 是否有足够清楚的事实源、团队边界和下一步建议。

### 结果摘要

发现最有价值的事实源是 `STATE.md`、`progress.md` 和 `team-registry.example.yaml`。当这些文件内容清楚时，AI 不需要猜项目当前状态。

### 下次复用规则

- 先读事实源，再给建议。
- 每个结论都要指向具体文件。
- 角色记忆应该记录可复用规则，而不是流水账。

### 证据

- `projects/demo-agent-workbench/STATE.md`
- `projects/demo-agent-workbench/docs/progress.md`
- `teams/team-registry.example.yaml`
```

## File: demo-workspace/memories/qa-reviewer/failure-log.md

```
# qa-reviewer failure-log

## 2026-01-04：边界不清导致建议过大

### 发生了什么

AI 在没有先读取 `STATE.md` 的情况下，直接建议增加复杂自动化和后端服务，超出了 demo 工作台的范围。

### 根因

任务没有强调只读，也没有先确认当前不做事项。

### 下次避免

- 开始前必须读取 `STATE.md` 的“当前不做”。
- 如果任务是 demo，不要建议上复杂后端。
- 输出建议必须分成“现在做”和“以后再做”。

### 证据

- `projects/demo-agent-workbench/STATE.md` 中已经写明不连接真实后端、不承诺一键安装。
```


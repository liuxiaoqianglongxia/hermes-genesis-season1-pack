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

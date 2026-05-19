# 上下文注入最小伪代码

这个文件只解释机制，不提供真实内部脚本。

目标：让读者理解一个任务被派给角色前，为什么要先把项目事实源、角色档案、角色记忆拼成一份任务上下文。

## 输入

- 项目目录：包含 `README.md`、`STATE.md`、`docs/progress.md`、`registry.yaml`
- 角色档案：说明这个角色负责什么、不负责什么、常用工作方式
- 角色记忆：记录这个角色过去踩过的坑、有效做法、验收习惯
- 用户任务：本轮真正要处理的问题

## 最小流程

```text
function build_task_context(project, role, task):
    project_navigation = read(project / "README.md")
    project_state = read(project / "STATE.md")
    project_progress = read(project / "docs/progress.md")
    project_registry = read(project / "registry.yaml")

    role_profile = read(role / "profile.md")
    role_experience = read(role / "experience-log.md")
    role_failures = read(role / "failure-log.md")

    context = join_sections([
        "本轮任务",
        task,
        "项目导航",
        project_navigation,
        "项目当前事实",
        project_state,
        "项目进度",
        project_progress,
        "项目清单",
        project_registry,
        "角色档案",
        role_profile,
        "角色经验",
        role_experience,
        "角色失败教训",
        role_failures,
        "本轮输出要求",
        "只处理任务范围内的事；先读事实源；输出必须带证据；不确定就标注假设。"
    ])

    return context
```

## 为什么要这样做

如果只把一句话任务丢给角色，角色很容易靠猜。

如果先注入事实源和角色经验，角色至少知道三件事：

1. 当前项目真实状态是什么。
2. 自己负责什么、不负责什么。
3. 过去哪里翻过车。

这就是上下文注入的核心：不是让 AI 自觉想起来，而是在派单前把必须知道的信息塞进去。

## 不包含什么

- 不包含真实内部脚本。
- 不包含复杂记忆检索实现。
- 不包含本机路径。
- 不包含任何发布链路。
- 不承诺复制后直接可用。

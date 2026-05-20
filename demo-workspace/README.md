# demo-workspace：一个可复制的 AI Agent 工作台 demo

这是一个完全虚构的示例工作区，用来演示“一个 AI 如何管理多个团队”的最小文件结构。

你可以把这个目录复制出去，改成自己的项目。

---

## 这里有什么

```text
demo-workspace/
  knowledge/       # 通用术语和结构规范
  projects/        # 项目事实源：registry、STATE、progress
  teams/           # 团队注册表和边界
  roles/           # 角色档案：产品、工程、QA
  memories/        # 角色记忆：经验和失败记录
```

---

## 怎么试

第一步，让 AI 做只读检查。

复制仓库根目录的：

```text
prompts/start-here-task.md
```

把输入目录设为：

```text
demo-workspace/
```

AI 应该能回答：

- 当前事实源在哪里；
- 有哪些团队；
- 每个角色负责什么；
- 哪些文件是下一步最该补的；
- 是否存在边界不清或信息缺口。

第二步，运行上下文构建脚本：

```bash
python scripts/build-demo-context.py
```

它会只读这个 demo 工作区，并输出一份 Markdown 格式的 demo task context。

---

## 怎么改成自己的项目

先改这 5 类文件：

1. `projects/registry.yaml`：登记你的项目。
2. `projects/demo-agent-workbench/STATE.md`：写清当前项目状态。
3. `projects/demo-agent-workbench/docs/progress.md`：记录最近进展。
4. `teams/team-registry.example.yaml`：定义团队边界和角色映射。
5. `roles/*.md` 与 `memories/*/*.md`：定义角色和历史经验。

建议先保留目录结构，只替换内容。

不要把真实密钥、日志、聊天记录、客户信息、内部路径写进来。

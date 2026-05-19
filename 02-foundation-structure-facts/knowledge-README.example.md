# knowledge README 示例

这个文件是导航层，不是数据库。

你可以这样写：

```markdown
# Knowledge 总入口

这里负责告诉 AI：遇到不同问题，应该先读哪里。

## 查找顺序

1. 通用术语：先读 `standards/terminology.md`
2. 目录职责：再读 `standards/structure.md`
3. 项目当前状态：去 `../projects/registry.yaml` 找项目，再读项目 `STATE.md`
4. 项目进度：读项目 `docs/progress.md`

## 类型分流

- 通用规则：放 `standards/`
- 项目事实：放项目自己的 `STATE.md`
- 项目过程：放项目自己的 `docs/progress.md`
- 团队边界：放 `../teams/team-registry.example.yaml`

## 重要提醒

README 只负责指路。
如果 README 和项目 STATE 冲突，以项目 STATE 为准，并提醒人工修正 README。
```

判断一个 README 是否写坏了：

- 如果里面开始记录每天做了什么，它就变成进度表了。
- 如果里面开始堆每个项目的细节，它就变成混乱数据库了。
- 如果 AI 读完仍不知道下一步该读哪个文件，导航失败。

# 如何改成自己的项目

建议按下面顺序改，不要一次改完所有文件。

## 第一步：复制 demo 项目

把 `09-demo-project/` 复制成你自己的项目目录。

先改：

- 项目名称
- 项目一句话
- 当前阶段
- 当前目标
- 明确不做

## 第二步：改项目注册表

在 registry 里写清楚：

- 项目标识
- 项目名称
- 当前状态
- STATE 文件位置
- progress 文件位置

## 第三步：让 AI 做只读检查

复制这个任务：

```markdown
请只读检查这个项目目录，判断 README、STATE、progress、registry 是否分工清楚。不要修改文件，只输出问题和建议。
```

## 第四步：再加团队

当一个项目能稳定被 AI 读懂后，再引入 team-boss 和 team-registry。

不要一开始就写十几个角色。先用 product-manager、engineer、qa-reviewer 三个角色练手。

## 第五步：最后再考虑 Dashboard

Dashboard 只有在你已经有稳定事实源以后才有意义。否则页面越漂亮，误导越强。

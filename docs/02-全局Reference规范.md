# 全局 Reference 规范

本文档是**索引与入口**：具体规则以引用的 Skill 与仓库文件为准，避免重复维护长文。

## 文档分层中的位置

- 本文件属于 **[第二层：外部 Spec](01-项目主Spec.md#文档三层与归档)** 中的「全局 Reference」，只做**索引与原则**，不写可维护的代码细节。
- **第一层（源码内联）**：真实配置、业务常量、组件/函数注释——见 [01](01-项目主Spec.md) 中第一层说明及 `app/constants/`、`nuxt.config.ts` 等。
- **`project-dev-conventions` Skill**：**团队/Agent 速查**；其中若出现具体 class 字号等，应与第一层（如 `nuxt.config` 的 `fontFamily`、页面实际 class）保持一致，冲突时以**代码为准**并更新 Skill。
- **第三层（归档）**：只读快照见 [archive/README.md](archive/README.md)。

## 1. 视觉与排版

- **权威来源**：`.cursor/skills/project-dev-conventions/SKILL.md` 中的「界面与样式」「当前项目排版基线」（字体、典型字号、简洁原则）。

## 2. 技术栈与实现范围

- **权威来源**：同上 `project-dev-conventions` Skill（Nuxt 4、Tailwind-only、`@antfu/eslint-config`、主流程优先、少防御性堆砌等）。

## 3. 编码与 Agent 协作

- **Agent 会话中默认不跑 lint**：`.cursor/skills/dev-no-lint-during-coding/SKILL.md`。
- **人类开发者**：日常用 `pnpm dev`；不必把 `pnpm run lint` / `pnpm run build` 当作每次改动的固定步骤。提交前若仓库在 `package.json` 中配置了 Git 钩子（如 `simple-git-hooks`、`lint-staged`），以该配置为准；排查问题时可手动执行 `pnpm run lint` 或 `pnpm run build`。

## 4. 设计 Token（Figma / 设计稿）

- **状态**：占位。进入「AI 生成 UI + Figma 标准化」阶段后，在此补充色板、间距、圆角、组件级 Token，并与代码中的 Tailwind 扩展策略对齐。
- **当前**：以 `project-dev-conventions` 中的极简排版基线为准，不强制像素级还原设计稿。

## 5. 主 Spec、模块 Spec 与模块规划

- 产品目标与边界：[01-项目主Spec.md](./01-项目主Spec.md)
- 模块拆分与开发顺序：[03-模块拆解规划.md](./03-模块拆解规划.md)
- 模块独立 Spec（第二层）：[`modules/README.md`](modules/README.md)

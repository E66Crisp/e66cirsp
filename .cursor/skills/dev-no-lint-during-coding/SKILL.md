---
name: dev-no-lint-during-coding
description: Instructs the agent not to run ESLint, pnpm lint, or lint while implementing or editing code in this repository. Apply when coding, refactoring, adding features, fixing bugs in source files, or when the user mentions 编码/开发/写代码—unless the user explicitly asks to run lint, eslint, or fix lint issues. Human commit hooks (if any) are defined in package.json; see docs/02 Reference §3.
---

# 编码阶段不执行 Lint

## 必须遵守

在本仓库里**实现、修改、重构代码**时：

- **不要**主动执行 `pnpm run lint`、`pnpm run lint:fix`、`eslint` 全量或针对项目跑校验，也**不要**把「跑一遍 lint」以及 `pnpm run build` 当作实现任务里的常规步骤。
- **不要**在回答里默认建议「先执行 lint 再提交」作为本次改动的收尾（除非用户明确要求检查风格）。

## 例外（可以跑 lint）

- 用户**明确**说：跑 lint、修 eslint 报错、执行 `lint:fix`、检查代码风格等。
- 用户给出的任务**本身**就是配置 ESLint、修规则、处理 lint 报错。

## 与仓库约定的关系

- 本 skill 只约束 **Agent 在编码会话中的行为**：默认不发起 lint 类命令。
- 人类开发者日常与提交约定见 [docs/02-全局Reference规范.md](../../docs/02-全局Reference规范.md#3-编码与-agent-协作)。

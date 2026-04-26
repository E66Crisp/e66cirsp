---
name: project-main-spec
description: Entry point for Spec-driven work on this personal Nuxt site (blob). Use when implementing features, changing routes/layout/i18n, or when the user mentions Spec, SDD, 主 Spec, 文档驱动, or repo-wide conventions. Read docs/01 first, then 02/03 as needed; defer stack details to project-dev-conventions and lint session rules to dev-no-lint-during-coding.
---

# 本仓库 Spec 入口（薄 Skill）

## 必读

- **[docs/01-项目主Spec.md](../../../docs/01-项目主Spec.md)**：个人站点目标、边界、路由、技术栈摘要、变更规则。

## 按需阅读

- **[docs/02-全局Reference规范.md](../../../docs/02-全局Reference规范.md)**：指向视觉、技术、Agent 协作、设计 Token 占位。
- **[docs/03-模块拆解规划.md](../../../docs/03-模块拆解规划.md)**：模块列表与推荐演进顺序。

## 实现习惯（不重复展开）

- **技术栈与样式**：遵循 **`.cursor/skills/project-dev-conventions/SKILL.md`**。
- **编码会话中是否默认跑 lint**：遵循 **`.cursor/skills/dev-no-lint-during-coding/SKILL.md`**；人类日常与提交约定见 **[docs/02-全局Reference规范.md](../../../docs/02-全局Reference规范.md#3-编码与-agent-协作)**。

## 文档三层（与 `docs/01` 一致）

- **第一层**：源码内联——注释、Props/TSDoc、业务常量；改代码就改这里，细节不进长文。
- **第二层**：`docs/01`～`03`、`docs/modules/`——边界、交互、验收；**禁止**用大段源码代替文档。
- **第三层**：`docs/archive/`——封版快照，只读；新版本新建子目录。

## 原则

需求或架构有变时，**先改第二层（Spec / Reference / 模块规划），再改代码**，并同步**第一层**注释；与 `docs/01` 中 SDD 对齐说明一致。

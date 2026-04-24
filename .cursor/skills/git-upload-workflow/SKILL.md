---
name: git-upload-workflow
description: When the user asks to upload/push to Git, 上传 git, 提交代码, push, commit and push, or similar—run checks before commit, enforce branch guard and commit message shape, no code edits during the flow. Overrides dev-no-lint-during-coding for this explicit upload intent only.
---

# Git 上传 / 提交流程（本仓库）

在用户**明确**要求把改动上传到 Git（如：上传 git、提交、push、commit and push）时启用本 Skill。

## 与 `dev-no-lint-during-coding` 的关系

- 仅在用户**本次意图为「上传 / 提交 / push」**时：允许并**必须**执行下面的格式/检查命令。
- 其它普通编码任务仍以 `dev-no-lint-during-coding` 为准，不默认跑全量检查。

## 必须遵守

### 1. 提交过程中不改代码

- 从用户提出「上传 git」到 `git push`（或用户喊停）为止：**不要**修改、重构或格式化任何源码/配置（除非用户另行明确要求改代码后再传）。
- 只读状态用 `git status` / `git diff` 即可。

### 2. 保护分支

- 若当前分支为 **`master`** 或 **`main`**（以 `git branch --show-current` 为准）：**中止**提交与推送，并明确提示用户：保护分支上不允许按本流程上传，请先切换到功能分支。

### 3. 格式 / 静态检查（有错即停）

- 在本仓库根目录执行：**`pnpm run lint`**（本仓库无单独 `format` 脚本，代码风格与格式由 ESLint 承担）。
- **若命令非零退出**：停止后续 `git add` / `commit` / `push`，向用户展示错误摘要，并说明需先修复或通过检查后再上传；**不要**在未经用户要求时擅自 `lint:fix`。

### 4. 提交信息格式

- 使用单行说明，形如：**`动作(修改范围)：修改内容`**
  - 示例：`feat(docs)：补充三层 Spec 与归档说明`
  - **`修改范围`** 与 **`修改内容`** 应来自当前暂存/即将提交的改动；细节让用户自行用 **`git diff`** 查看，**不要**在说明里堆文件列表替代概括。
- **不要**在流程中执行 `git log`、`git show` 等仅为浏览历史的命令（除非用户明确要求查历史）。

### 5. 推荐最小命令序列（无多余操作）

在检查通过、且非保护分支时，按需执行（已暂存则跳过 add）：

1. `git status`
2. `pnpm run lint`
3. `git add …`（仅包含本次要提交的路径，或用户指定）
4. `git commit -m "动作(范围)：内容"`
5. `git push`（推送到当前分支跟踪的远程分支；若未设置上游，按用户说明或提示用户设置）

## 可选

- 若 `package.json` 中配置了 **`git commit` 钩子**，以该配置为准；Agent 仍应先执行 `pnpm run lint` 再提交，降低钩子失败概率。人类日常约定见 [docs/02-全局Reference规范.md](../../../docs/02-全局Reference规范.md#3-编码与-agent-协作)。

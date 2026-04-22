# 开发流程约定

## 开发阶段

- 日常请使用 `pnpm dev` 启动开发环境。
- **不要**把 `pnpm run build`（生产打包）或 `pnpm run lint`（全量 ESLint）当作开发时的固定步骤；本仓库不把这些命令绑在 `dev` 上，避免拖慢热更新。

## 提交代码（Git）

- **在 `git commit` 时** 会通过 Git 钩子执行校验：先对**暂存区**相关文件跑 ESLint，再执行**完整生产构建**（`nuxt build`），通过后才允许完成提交。
- 配置见 `package.json` 中的 `simple-git-hooks` 与 `lint-staged`。
- 首次克隆后若钩子未生成，可执行 `pnpm run prepare`（或重新 `pnpm install`）。

## 需要单独检查时

- 可手动执行 `pnpm run lint` / `pnpm run build` 作排查，但团队约定以 **提交时钩子** 为统一准绳。

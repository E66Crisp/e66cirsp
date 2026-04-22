---
name: project-dev-conventions
description: Guides Nuxt 4+ development with @antfu/eslint-config, Tailwind-only styling, and minimal scope—main paths only, no edge-case engineering, simple UI. Use when writing or changing code in this repository, when the user mentions stack choices, 规范, 简洁, or refactors. See repo skills /nuxt and /antfu for full framework and ESLint details.
---

# 本仓库开发约定

## 技术栈

- **Nuxt**：使用当前项目锁定的**最新 Nuxt 技术栈**（以 `package.json` 为准），目录与能力遵循 Nuxt 官方与团队 skill **`/nuxt`**（`app/`、路由、模块、`nuxt.config` 等，不引入过时 Nuxt2 习惯）。
- **ESLint**：使用 **`@antfu/eslint-config`** 与根目录已合并的 Nuxt/Flat 配置，习惯与调参见 **`/antfu`**；不在此重复细则。
- **样式**：**仅使用 Tailwind CSS** 实现（utility / `@apply` 在必要时），不新增第二套 CSS 框架。主题与复用在 `nuxt.config` 的 `tailwindcss` 与少量全局样式中扩展即可。

## 实现范围

- 代码**只服务主要功能与主流程**，不为罕见边界、奇怪设备或极端数据单独分支，除非产品明确要求。
- 不堆防御性 `try/catch`、不预写用不到的抽象；保持与现有文件风格、命名一致。

## 界面与样式

- **以简洁为主**：白底/中性色、够用的间距与字号即可；避免多余阴影、动效、装饰性渐变。
- **基础即可**：能表达层级与可点中即可，不追求「像素级复刻设计稿」除非用户给稿。
- 少写自定义 `@keyframes`、少叠 class；能 Tailwind 一行解决的不要拆多文件（除非可复用组件确实值得抽）。

import type { AppLocale } from '~/i18n/messages'

/**
 * 收藏页 Skills 区数据源（第一层 Spec）。
 * 字段语义：展示名、外链、中英安装说明、中英短描述；勿在 docs 中重复维护条目内容。
 */
export type FavoriteSkillEntry = {
  /** 列表中展示的标题 */
  name: string
  /** 可点击的文档或仓库地址 */
  url: string
  /** 安装或接入方式，按语言 */
  install: Record<AppLocale, string>
  /** 一句话用途说明，按语言 */
  description: Record<AppLocale, string>
}

/** 收藏的技能列表；增删改只改本文件与收藏页展示结构。 */
export const favoriteSkills: FavoriteSkillEntry[] = [
  {
    name: 'Code Review Expert',
    url: 'https://github.com/sanyuan0704/sanyuan-skills/blob/main/skills/code-review-expert/README.md',
    install: {
      en: 'npx skills add sanyuan0704/sanyuan-skills --path skills/code-review-expert',
      zh: 'npx skills add sanyuan0704/sanyuan-skills --path skills/code-review-expert',
    },
    description: {
      en: 'helps you review code.',
      zh: '审查代码。',
    },
  },
  {
    name: 'Sigma',
    url: 'https://github.com/sanyuan0704/sanyuan-skills/blob/main/skills/sigma/README.md',
    install: {
      en: `npx skills add sanyuan0704/sanyuan-skills --path skills/sigma`,
      zh: `npx skills add sanyuan0704/sanyuan-skills --path skills/sigma`,
    },
    description: {
      en: `Personalized 1-on-1 AI tutor agent skill. Based on Bloom's 2-Sigma mastery learning`,
      zh: `个性化1对1 AI 导师技能。基于布鲁姆的2-Sigma掌握学习理论`,
    },
  },
  {
    name: 'markdown-documentation',
    url: 'https://skills.sh/aj-geddes/useful-ai-prompts/markdown-documentation',
    install: {
      en: 'npx skills add https://github.com/aj-geddes/useful-ai-prompts --skill markdown-documentation',
      zh: 'npx skills add https://github.com/aj-geddes/useful-ai-prompts --skill markdown-documentation',
    },
    description: {
      en: 'Comprehensive reference for markdown syntax, GitHub Flavored Markdown, and documentation best practices.',
      zh: 'Markdown 语法、GitHub Flavored Markdown 和文档最佳实践的综合参考。',
    },
  },
  {
    name: 'antfu',
    url: 'https://skills.sh/antfu/skills/antfu',
    install: {
      en: 'npx skills add https://github.com/antfu/skills --skill antfu',
      zh: 'npx skills add https://github.com/antfu/skills --skill antfu',
    },
    description: {
      en: 'Opinionated TypeScript/JavaScript conventions and tooling setup for modern projects.',
      zh: 'TypeScript/JavaScript 的约定和工具设置，适用于现代项目。',
    },
  },
  {
    name: 'git-commit',
    url: 'https://skills.sh/github/awesome-copilot/git-commit',
    install: {
      en: 'npx skills add https://github.com/github/awesome-copilot --skill git-commit',
      zh: 'npx skills add https://github.com/github/awesome-copilot --skill git-commit',
    },
    description: {
      en: 'Standardized git commits using Conventional Commits specification with intelligent diff analysis and message generation.',
      zh: '使用 Conventional Commits 规范标准化 git 提交，智能差异分析和消息生成。',
    },
  },
  {
    name: 'frontend-design',
    url: 'https://skills.sh/anthropics/skills/frontend-design',
    install: {
      en: 'npx skills add https://github.com/anthropics/skills --skill frontend-design',
      zh: 'npx skills add https://github.com/anthropics/skills --skill frontend-design',
    },
    description: {
      en: 'Generate frontend design ideas and mockups using AI.',
      zh: '使用 AI 生成前端设计想法和原型。',
    },
  }
]

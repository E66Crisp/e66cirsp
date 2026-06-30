import type { AppLocale } from '~/i18n/messages'

/**
 * 收藏页数据源（第一层 Spec）。
 * 层级：section（大类）→ subcategory（可选子类）→ 卡片条目。
 * 增删改只改本文件与 favorites/index.vue 展示结构。
 */
export type FavoriteSectionId = 'skills' | 'mcp' | 'coding-tools'

export type FavoriteSkillsSubcategory = 'development' | 'design' | 'documentation' | 'agent'

/** 各 section 可用的子类 id；新大类有子类时在此扩展联合类型 */
export type FavoriteSubcategoryId = FavoriteSkillsSubcategory

export type FavoriteIconName = 'code-review' | 'tutor' | 'markdown' | 'tooling' | 'git' | 'design'

export const favoriteSectionOrder: FavoriteSectionId[] = [
  'skills',
  'mcp',
  'coding-tools',
]

/** 有子类的 section 在此声明顺序；无子类的 section 条目可不填 subcategory */
export const favoriteSubcategoryOrder: Partial<Record<FavoriteSectionId, FavoriteSubcategoryId[]>> = {
  skills: ['development', 'design', 'documentation', 'agent'],
}

export type FavoriteEntry = {
  /** 顶层大类 */
  section: FavoriteSectionId
  /** section 配置了 subcategoryOrder 时必填 */
  subcategory?: FavoriteSubcategoryId
  name: string
  icon: FavoriteIconName
  url: string
  install: Record<AppLocale, string>
  description: Record<AppLocale, string>
}

export const favorites: FavoriteEntry[] = [
  {
    name: 'Code Review Expert',
    section: 'skills',
    subcategory: 'development',
    icon: 'code-review',
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
    section: 'skills',
    subcategory: 'agent',
    icon: 'tutor',
    url: 'https://github.com/sanyuan0704/sanyuan-skills/blob/main/skills/sigma/README.md',
    install: {
      en: 'npx skills add sanyuan0704/sanyuan-skills --path skills/sigma',
      zh: 'npx skills add sanyuan0704/sanyuan-skills --path skills/sigma',
    },
    description: {
      en: `Personalized 1-on-1 AI tutor agent skill. Based on Bloom's 2-Sigma mastery learning`,
      zh: '个性化1对1 AI 导师技能。基于布鲁姆的2-Sigma掌握学习理论',
    },
  },
  {
    name: 'markdown-documentation',
    section: 'skills',
    subcategory: 'documentation',
    icon: 'markdown',
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
    section: 'skills',
    subcategory: 'development',
    icon: 'tooling',
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
    section: 'skills',
    subcategory: 'development',
    icon: 'git',
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
    section: 'skills',
    subcategory: 'design',
    icon: 'design',
    url: 'https://skills.sh/anthropics/skills/frontend-design',
    install: {
      en: 'npx skills add https://github.com/anthropics/skills --skill frontend-design',
      zh: 'npx skills add https://github.com/anthropics/skills --skill frontend-design',
    },
    description: {
      en: 'Generate frontend design ideas and mockups using AI.',
      zh: '使用 AI 生成前端设计想法和原型。',
    },
  },
  {
    name: 'design-taste-frontend',
    section: 'skills',
    subcategory: 'design',
    icon: 'design',
    url: 'https://skills.sh/Leonxlnx/taste-skill/design-taste-frontend',
    install: {
      en: 'npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend',
      zh: 'npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend',
    },
    description: {
      en: 'Anti-slop frontend skill for landing pages, portfolios, and redesigns with brief-driven design direction.',
      zh: '反模板化前端设计技能，用于落地页、作品集与改版，先读需求再出稿。',
    },
  },
  {
    name: 'superpowers',
    section: 'skills',
    subcategory: 'agent',
    icon: 'tooling',
    url: 'https://skills.sh/obra/superpowers',
    install: {
      en: 'npx skills add obra/superpowers',
      zh: 'npx skills add obra/superpowers',
    },
    description: {
      en: 'Structured dev methodology for coding agents: brainstorming, TDD, code review, and more.',
      zh: '面向编码 Agent 的结构化开发方法论，含头脑风暴、TDD、代码审查等技能集。',
    },
  },
]

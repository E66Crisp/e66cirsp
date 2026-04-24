import type { AppLocale } from '~/i18n/messages'

export type FavoriteSkillEntry = {
  name: string
  url: string
  install: Record<AppLocale, string>
  description: Record<AppLocale, string>
}

/** 收藏的技能列表；后续可在本数组追加条目，或再拆出其它模块常量。 */
export const favoriteSkills: FavoriteSkillEntry[] = [
  {
    name: 'Cursor — Agent Skills',
    url: 'https://cursor.com/docs/context/skills',
    install: {
      en: '',
      zh: '',
    },
    description: {
      en: 'Official guide to packaging reusable instructions for the agent.',
      zh: '官方说明如何把可复用的说明打包成 Agent 可用的 Skill。',
    },
  },
  {
    name: 'Example: project-dev-conventions',
    url: 'https://github.com/E66Crisp/blob/blob/main/.cursor/skills/project-dev-conventions/SKILL.md',
    install: {
      en: '',
      zh: '',
    },
    description: {
      en: 'Nuxt + Tailwind + scope conventions for this codebase.',
      zh: '本仓库的 Nuxt、Tailwind 与实现范围约定。',
    },
  },
]

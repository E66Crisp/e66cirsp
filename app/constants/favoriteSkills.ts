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
      en: 'Read project docs: place SKILL.md under `.cursor/skills/<name>/` and reference it in rules or prompts as needed.',
      zh: '阅读官方文档：将 `SKILL.md` 放在 `.cursor/skills/<名称>/` 下，并在规则或对话中按需引用。',
    },
    description: {
      en: 'Official guide to packaging reusable instructions for the agent.',
      zh: '官方说明如何把可复用的说明打包成 Agent 可用的 Skill。',
    },
  },
  {
    name: 'create-skill',
    url: 'https://cursor.com/docs/context/rules',
    install: {
      en: 'In repo: `.cursor/skills/<skill-id>/SKILL.md`, or follow Cursor docs for project rules.',
      zh: '在仓库 `.cursor/skills/<skill-id>/` 下放置 `SKILL.md`，或按 Cursor 文档配置项目规则。',
    },
    description: {
      en: 'Official guidance on rules and skill-style context for Cursor.',
      zh: 'Cursor 对规则与类 Skill 上下文的官方说明，适合作为编写规范入口。',
    },
  },
  {
    name: 'project-dev-conventions',
    url: 'https://github.com/E66Crisp/blob/blob/main/.cursor/skills/project-dev-conventions/SKILL.md',
    install: {
      en: 'Copy the skill folder into `.cursor/skills/project-dev-conventions/` in your project.',
      zh: '将 skill 目录复制到目标项目的 `.cursor/skills/project-dev-conventions/`（与仓库内结构一致）。',
    },
    description: {
      en: 'Nuxt + Tailwind + @antfu/eslint-config conventions used in this site’s repo.',
      zh: '本站仓库采用的 Nuxt、Tailwind、@antfu/eslint-config 等开发约定摘要。',
    },
  },
  {
    name: 'dev-no-lint-during-coding',
    url: 'https://github.com/E66Crisp/blob/blob/main/.cursor/skills/dev-no-lint-during-coding/SKILL.md',
    install: {
      en: 'Same as other local skills: drop under `.cursor/skills/dev-no-lint-during-coding/`.',
      zh: '与其他本地 skill 相同：放入 `.cursor/skills/dev-no-lint-during-coding/`。',
    },
    description: {
      en: 'Tells the agent not to run ESLint during implementation unless you ask.',
      zh: '约定在实现阶段默认不跑 ESLint，除非显式要求。',
    },
  },
]

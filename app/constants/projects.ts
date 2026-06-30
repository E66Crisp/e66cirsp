import type { AppLocale } from '~/i18n/messages'

/**
 * 项目页数据源。
 * 增删改只改本文件与 project/index.vue 展示结构。
 */
export type ProjectEntry = {
  name: string
  /** 卡片图标区展示的缩写 */
  monogram: string
  url: string
  tags: string[]
  description: Record<AppLocale, string>
}

export const ownProjects: ProjectEntry[] = [
  {
    name: 'lark-UML',
    monogram: 'LM',
    url: 'https://github.com/E66Crisp/lark-UML',
    tags: ['MCP', 'TypeScript', 'Feishu'],
    description: {
      en: 'MCP server for Mermaid sequence and flow diagrams in Feishu docs. Wraps lark-cli so Cursor can update a section in one shot.',
      zh: '飞书云文档 Mermaid 时序图与流程图 MCP 服务。封装 lark-cli，可在 Cursor 中一句话更新指定章节画板。',
    },
  },
  {
    name: 'sdd-atlas',
    monogram: 'SA',
    url: 'https://github.com/E66Crisp/sdd-atlas',
    tags: ['Skills', 'SDD', 'Documentation'],
    description: {
      en: 'Agent Skills for SDD project maps: scaffold docs/atlas/, sync on code changes, and validate structure and links.',
      zh: '面向 SDD 的 Agent Skills：生成 docs/atlas/ 骨架、改代码时同步文档、校验结构与链接。',
    },
  },
  {
    name: 'clear-skills',
    monogram: 'CS',
    url: 'https://github.com/E66Crisp/clear-skills',
    tags: ['CLI', 'TypeScript', 'Skills'],
    description: {
      en: 'CLI to remove AI skill files from the current project or globally. Run with npx clear-skills, add -g for global scan.',
      zh: '清理 AI Skill 文件的 CLI，可从当前项目或全局移除。运行 npx clear-skills，加 -g 扫描全局。',
    },
  },
]

export const ossContributions: ProjectEntry[] = [
  {
    name: 'Vue',
    monogram: 'V',
    url: 'https://github.com/vuejs/core/commits?author=E66Crisp',
    tags: ['Vue', 'TypeScript'],
    description: {
      en: 'Progressive JavaScript framework for building user interfaces.',
      zh: '用于构建用户界面的渐进式 JavaScript 框架。',
    },
  },
  {
    name: 'element-plus',
    monogram: 'EP',
    url: 'https://github.com/element-plus/element-plus/commits?author=E66Crisp',
    tags: ['Vue', 'UI'],
    description: {
      en: 'Vue 3 component library based on Element UI.',
      zh: '基于 Element UI 的 Vue 3 组件库。',
    },
  },
  {
    name: 'VueUse',
    monogram: 'VU',
    url: 'https://github.com/vueuse/vueuse/commits?author=E66Crisp',
    tags: ['Vue', 'Composition API'],
    description: {
      en: 'Collection of essential Vue Composition API utilities.',
      zh: 'Vue Composition API 常用工具合集。',
    },
  },
  {
    name: 'antfu/skills',
    monogram: 'AS',
    url: 'https://github.com/antfu/skills/commits?author=E66Crisp',
    tags: ['Skills', 'TypeScript'],
    description: {
      en: 'Agent Skills for modern frontend and tooling workflows.',
      zh: '面向现代前端与工具链的 Agent Skills。',
    },
  },
  {
    name: 'next-ai-draw-io',
    monogram: 'ND',
    url: 'https://github.com/DayuanJiang/next-ai-draw-io/commits?author=E66Crisp',
    tags: ['Next.js', 'AI'],
    description: {
      en: 'AI-powered draw.io integration for Next.js apps.',
      zh: '面向 Next.js 的 AI 驱动 draw.io 集成。',
    },
  },
  {
    name: 'ai-elements-vue',
    monogram: 'AE',
    url: 'https://github.com/vuepont/ai-elements-vue/commits?author=E66Crisp',
    tags: ['Vue', 'AI'],
    description: {
      en: 'AI UI building blocks for Vue applications.',
      zh: 'Vue 应用的 AI UI 组件库。',
    },
  },
]

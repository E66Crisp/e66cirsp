/**
 * 站点级第一层 Spec：对外展示名、社交链接、顶栏路由表。
 * 与 docs/01、docs/03 信息架构对齐；改导航路径须同步改此处与 i18n。
 */
export const site = {
  name: 'E66CRISP(e66)',
  /** 头像 URL 占位，你后续替换为实际地址 */
  avatarUrl: 'https://avatars.githubusercontent.com/u/226283245?v=4',
  githubUrl: 'https://github.com/E66Crisp',
} as const

/**
 * 顶栏顺序即数组顺序；`to` 须与 `app/pages` 下路由一致。
 */
export const navRoutes = [
  { to: '/' as const },
  { to: '/project' as const },
  { to: '/blogs' as const },
  { to: '/favorites' as const },
] as const

export const site = {
  name: 'E66CRISP(e66)',
  /** 头像 URL 占位，你后续替换为实际地址 */
  avatarUrl: 'https://avatars.githubusercontent.com/u/226283245?v=4',
  githubUrl: 'https://github.com/E66Crisp',
} as const

export const navRoutes = [
  { to: '/' as const },
  { to: '/project' as const },
  { to: '/blogs' as const },
  { to: '/favorites' as const },
] as const

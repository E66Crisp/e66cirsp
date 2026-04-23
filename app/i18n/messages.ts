export type AppLocale = 'en' | 'zh'

export const messages: Record<AppLocale, {
  tagline: string
  aboutHeading: string
  aboutParagraphs: string[]
  nav: { home: string; project: string; blogs: string }
  pageTitle: { project: string; blogs: string }
  placeholder: string
  float: { languageSwitch: string; scrollTop: string }
  header: { github: string; settings: string }
}> = {
  en: {
    tagline: 'Not time to stop just yet',
    aboutHeading: 'About',
    aboutParagraphs: [
      `👋 Hey there! I'm a front-end developer based in Beijing, the capital of China, with two years of working experience.`,
      'I love organizing my code neatly and orderly, and feeling the pure joy of creation. I also hang out in open-source communities a lot — nothing beats the thrill of getting my PR merged successfully!',
      'In my free time, I enjoy playing games and admiring beautiful scenery. I’m always trying to leave my little unique marks along my life journey.',
      "You can call me e66. Let's keep in touch online only, y'know I'm a total introvert~",
    ],
    nav: { home: 'Home', project: 'Project', blogs: 'Blogs' },
    pageTitle: { project: 'Project', blogs: 'Blogs' },
    placeholder: 'More content soon.',
    float: { languageSwitch: 'Switch to Chinese', scrollTop: 'Back to top' },
    header: { github: 'GitHub', settings: 'Settings' },
  },
  zh: {
    tagline: '还没到停下的时候',
    aboutHeading: '关于',
    aboutParagraphs: [
      '👋 你好，我是一名生活在北京的前端开发，已经工作两年。',
      '我喜欢把代码整理得井井有条，也享受创造带来的纯粹快乐。我常在开源社区里活动——没有什么比自己的 PR 被顺利合并更让我兴奋了！',
      '闲暇时我会打游戏、看风景。我一直试着在这段人生路上留下一点属于自己的小印记。',
      '可以叫我 e66。我们保持线上联系就好——你懂的，我这个人挺内向~',
    ],
    nav: { home: '首页', project: '项目', blogs: '博客' },
    pageTitle: { project: '项目', blogs: '博客' },
    placeholder: '内容待补充。',
    float: { languageSwitch: 'Switch to English', scrollTop: '回到顶部' },
    header: { github: 'GitHub', settings: '设置' },
  },
}

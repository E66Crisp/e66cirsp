import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

// 第一层 Spec：运行模式、全局样式入口、字体与 Tailwind 扩展以本文件为准；摘要见 docs/01。
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/ui', '@nuxt/eslint', 'motion-v/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Borel&family=DM+Mono:ital,wght@0,300;0,400;0,500&display=swap',
        },
      ],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})

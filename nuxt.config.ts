import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
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
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            'borel': ['Borel', 'cursive'],
            'dm-mono': ['"DM Mono"', 'monospace'],
            'mono': [
              'ui-monospace',
              'SFMono-Regular',
              'Menlo',
              'monospace',
            ],
          },
        },
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})

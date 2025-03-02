// @ts-nocheck
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon'],
  css: ['@/assets/css/global.css'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
      {
        path: '~/components/MainMenu',
        pathPrefix: false,
      },
      {
        path: '~/components/BaseSlider',
        pathPrefix: false,
      },
    ],
  },
  tailwindcss: {
    exposeConfig: true,
  },
  imports: {
    dirs: ['types', 'composables', 'store'],
  },

  // Динамические настройки базового URL в зависимости от окружения
  app: {
    // Для GitHub Pages нужен префикс с названием репозитория
    baseURL: process.env.NODE_ENV === 'production' ? '/verona/' : '/',
    // Настройка для правильной генерации путей к ассетам
    buildAssetsDir: process.env.NODE_ENV === 'production' ? 'assets/' : '',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  // Настройки для генерации статики и GitHub Pages
  ssr: true,
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  compatibilityDate: '2025-02-24',
});

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
    ],
  },

  imports: {
    dirs: ['store'],
  },
  // Настройки для GitHub Pages
  app: {
    baseURL: '/verona/', // Замените 'verona' на имя вашего репозитория
    buildAssetsDir: '/assets/', // Префикс для ассетов
    // Для поддержки клиентской маршрутизации
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

  // Генерация статики
  ssr: true, // Для правильной генерации статического сайта
  nitro: {
    prerender: {
      crawlLinks: true, // Авто-прекомпиляция всех страниц
      routes: ['/'], // Дополнительные маршруты для прекомпиляции
    },
  },
  compatibilityDate: '2025-02-24',
});

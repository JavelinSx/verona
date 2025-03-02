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

  // Настройки для режима разработки
  app: {
    // Для локальной разработки используем относительный путь
    baseURL: '/',
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

  // Настройки для устранения проблем с гидратацией
  // vite: {
  //   vue: {
  //     template: {
  //       compilerOptions: {
  //         // Более терпимые настройки гидратации
  //         hydratable: true,
  //       },
  //     },
  //   },
  //   optimizeDeps: {
  //     exclude: ['swiper/vue'],
  //   },
  //   server: {
  //     fs: {
  //       strict: false,
  //     },
  //   },
  // },

  // Генерация статики
  ssr: true,
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ['/'],
  //   },
  // },

  // // Отключаем строгую гидратацию для Nuxt
  // experimental: {
  //   // Это может помочь с ошибками гидратации
  //   componentIslands: false,
  //   // Отключение строгого режима для несоответствий гидратации
  //   renderJsonPayloads: false,
  // },

  // swiper: {
  //   // Убедитесь, что Swiper правильно загружается
  //   prefix: 'Swiper',
  //   styleLang: 'css',
  // },

  compatibilityDate: '2025-02-24',
});

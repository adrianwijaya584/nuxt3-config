// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  runtimeConfig: {
    public: {}
  },
  devServer: {
    port: 3002,
  },
  // ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    // '@nuxtjs/tailwindcss',
    '@nuxthq/ui',
    // 'nuxt-proxy',
    '@kevinmarrec/nuxt-pwa'
  ],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  pwa: {
    icon: {
      fileName: 'pwa-512x512.png',
    },
    manifest: {
      name: 'Adrian PWA',
      short_name: 'Adrian PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ]
    },  
  },
//  proxy: {
//   options: [
//     {
//       target: 'http://54.254.113.229/py',
//       changeOrigin: true,
//       pathRewrite: {
//         '^/proxy/psg': '/psg'
//       },
//       pathFilter: [
//         '/proxy/psg'
//       ]
//     }
//   ]
//  },
  
  image: {
    domains: ['**', 'i.pinimg.com'],
  },

  pinia: {
    autoImports: ['defineStore', 'definePiniaStore'],
  },

  app: {
    head: {
      title: 'Nuxt 3.5 preview test',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'en'
      },
    },
  },

  devtools: {
    enabled: true,
  },

})

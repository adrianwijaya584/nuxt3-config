// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
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
    'nuxt-proxy',
    '@vite-pwa/nuxt',
  ],

 proxy: {
  options: [
    {
      target: 'http://54.254.113.229/py',
      changeOrigin: true,
      pathRewrite: {
        '^/proxy/psg': '/psg'
      },
      pathFilter: [
        '/proxy/psg'
      ]
    }
  ]
 },

  image: {
    domains: ['**', 'i.pinimg.com'],
  },

  pinia: {
    autoImports: ['defineStore', 'definePiniaStore'],
  },

  app: {
    head: {
      title: 'Nuxt 3.5 preview test',
    },
  },

  devtools: {
    enabled: true,
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },  
  },
})

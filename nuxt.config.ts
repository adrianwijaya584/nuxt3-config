// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  ssr: false,
  app: {
    head: {
      title: 'Nuxt 3.5 preview test'
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  image: {
    provider: "ipx"
  },
  pinia: {
    autoImports: ['defineStore', 'definePiniaStore'],
  },
  tailwindcss: {
    configPath: 'tailwind.config.js'
  }
})

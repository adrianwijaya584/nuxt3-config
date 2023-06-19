// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  devServer: {
    port: 3001,
  },
  // ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    // '@nuxtjs/tailwindcss',
    '@nuxthq/ui',
  ],

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
})

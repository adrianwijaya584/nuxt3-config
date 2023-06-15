// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  // ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
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
    }
  },
})

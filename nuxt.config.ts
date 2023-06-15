// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  image: {
    domains: ['**', 'i.pinimg.com'],
    // provider: "netlify",
    // netlify: {
    //   baseURl: process.env.IMAGES_URL
    // }
  },
  pinia: {
    autoImports: ['defineStore', 'definePiniaStore'],
  },
  tailwindcss: {
    configPath: 'tailwind.config.js'
  },
  app: {
    head: {
      title: 'Nuxt 3.5 preview test',
    }
  },
})

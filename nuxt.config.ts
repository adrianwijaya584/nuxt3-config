// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Adrian | Profile"
    }
  },
  typescript: {
    shim: false
  },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt"
  ],

  tailwindcss: {
    
  },
  pinia: {
    autoImports: ["defineStore"]
  }
})

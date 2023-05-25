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
  },
  app: {
    head: {
      title: 'Nuxt 3.5 preview test',
      meta: [
        {
          name: 'description',
          content: 'web keren pokoknya'
        },
        {
          name: 'og:title',
          content: 'web cool'
        },
        {
          name: 'og:image',
          content: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg',
        }, 
        {
          name: 'thumbnail',
          content: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg',
        }, 
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@adrianwijaya584' 
        },
        {
          name: 'twitter:site',
          content: '@adrianwijaya584' 
        },
        {
          name: 'twitter:creator',
          content: '@adrianwijaya584' 
        },
        {
          name: 'twitter:title',
          content: 'web test' 
        },
        {
          name: 'twitter:description',
          content: 'web keren pokoknya' 
        },
        {
          name: 'twitter:image',
          content: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg' 
        }
      ],
    }
  },
})

<template>
  <NuxtLayout
    class="min-h-screen relative dark:bg-gray-600 dark:text-gray-100"
  >
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import 'lazysizes';
  // import a plugin
  import 'lazysizes/plugins/parent-fit/ls.parent-fit';

  useSeoMeta({
    description: 'web keren pokoknya',
    ogImage: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg',
    twitterCard: 'summary_large_image',
    twitterSite: '@adrianwijaya584',
    twitterCreator: '@adrianwijaya584',
    twitterTitle: 'Web test',
    twitterDescription: 'Hello ini web test ya',
    twitterImage: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg',
    appleMobileWebAppTitle: 'test',
  })

</script>

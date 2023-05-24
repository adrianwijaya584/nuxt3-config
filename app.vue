<template>
  <div class="min-h-screen relative dark:bg-gray-600 dark:text-gray-100">
    <Navbar/>
    <LazyNuxtPage
      class="p-5"
    />
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    description: 'web keren pokoknya',
    ogImage: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg',
    twitterImage: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-leafgreen-version/e/e2/Pokemon-leafgreen-box.jpg',
    appleMobileWebAppTitle: 'test',
  })
</script>

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
    description: 'test123'
  })
</script>

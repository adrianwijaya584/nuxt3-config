<template>
  <NuxtLayout
    class="min-h-screen relative dark:bg-gray-600 dark:text-gray-100"
  >
    <LazyNuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import 'lazysizes';
  import 'lazysizes/plugins/parent-fit/ls.parent-fit';

</script>

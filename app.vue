<template>
  <NuxtLayout
    class="min-h-screen relative dark:bg-gray-600 dark:text-gray-100"
  >
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup lang="ts">
  // import 'lazysizes';
  // import 'lazysizes/plugins/parent-fit/ls.parent-fit';

  useServerSeoMeta({
    description: 'Web testing nuxt 3',
    author: 'Adrian',
    title: 'Nuxt 3 App',
    ogImage: 'https://i.pinimg.com/originals/78/6d/86/786d86d94d9d8764fefe6054b790fcc9.jpg',
    applicationName: '???a',
  })
</script>

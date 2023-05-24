<template>
  <div class="sticky h-[70px] top-0 left-0 z-50 flex flex-row justify-between items-center px-7 bg-gray-200 dark:bg-slate-400">
    <NuxtLink to="/">
      <h3 class="font-bold text-xl">Web Keren</h3>
    </NuxtLink>

    <div class="flex flex-row items-center space-x-5">
      <NuxtLink v-for="{to, text}, k in links" :key="k" :to="to" :class="`${to==route.path?'text-green-400':''}`">{{ text }}</NuxtLink>
      <button @click="darkModeToggler()" class="bg-black text-white p-2">{{ isDark?'light':'dark' }} mode</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const isDark= useDark()
  const darkModeToggler= useToggle(isDark)

  const route= useRoute()

  const links= [
    {
      to: '/',
      text: 'Home'
    },
    {
      to: '/about',
      text: 'About'
    },
    {
      to: '/secret',
      text: 'Secret'
    },
  ]
</script>
<template>
  <div class="sticky h-[70px] top-0 left-0 z-50 flex flex-row justify-between items-center px-7 bg-gray-200 dark:bg-slate-400">
    <NuxtLink to="/">
      <h3 class="font-bold text-xl">Web Keren</h3>
    </NuxtLink>

    <div class="flex flex-row items-center space-x-3">
      <div :class="`flex flex-col fixed duration-500 top-[70px] bg-red-300 w-[200px] h-screen md:flex md:right-0 md:bg-transparent md:h-fit md:w-fit md:relative md:top-0 md:flex-row md:space-x-5 ${!showDrawer?'overflow-hidden -right-[200px]':'right-0'}`">
        <NuxtLink v-for="{to, text}, k in links" :key="k" :to="to" :class="`${to==route.path?'text-green-400':''}`">{{ text }}</NuxtLink>
      </div>

      <button class=" md:hidden" @click="showDrawer= !showDrawer">hamburger</button>

      <button @click="darkModeToggler()" class="bg-black text-white p-2">toggle dark mode</button>
    </div>

  </div>
</template>

<script setup lang="ts">
  const isDark= useDark()
  const showDrawer= shallowRef(false)
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

  watch(route, ()=> {
    showDrawer.value= false
  })
</script>
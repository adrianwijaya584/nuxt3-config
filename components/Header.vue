<template>
  <div class="w-full h-16 bg-red-300 flex justify-between items-center fixed top-0 left-0 px-7">
    <div class="left">
      <h1 class="font-bold text-2xl">Profile</h1>
    </div>

    <div class="right flex gap-x-7 items-center">
      <ToggleColorModeBtn></ToggleColorModeBtn>
      <div v-for="link, k in links" :key="k">
        <NuxtLink :to="link.to" class="text-md duration-300 hover:text-lime-500" :class="route.path==link.to&&`text-red-600`">{{ link.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const links= [
    {
      title: "Home",
      to: "/"
    },
    {
      title: "About",
      to: "/about"
    },
  ]
  
  const route= useRoute()
</script>
<template>
  <div class="h-[calc(100vh-125px)] flex justify-center items-center">
    <div class="w-full rounded-md bg-zinc-700 text-white p-4 sm:w-4/5 md:w-3/5 xl:w-2/5 dark:text-black dark:bg-gray-300">
      <h1 class="text-center font-bold text-2xl">Login</h1>

      <p>{{ counter.counter }}</p>
      <p>{{ counter.doubleCounter }}</p>
      <button @click="counter.increment()">+</button>

      <form @submit.prevent="" class="mt-4 space-y-4">
        <p>ok</p>
        <p>ok</p>
        
        <button class="w-full bg-green-400 py-2 rounded-md text-white">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  const counter= useDoubleCounter()
</script>
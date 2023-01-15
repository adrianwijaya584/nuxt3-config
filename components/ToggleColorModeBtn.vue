<template>
    <button @click.stop="toggleColorMode()" class="bg-zinc-50 p-2 dark:bg-red-500">{{ isDark?"light":"dark" }} mode</button>
</template>

<script setup lang="ts">
  const isDark= useDark()
  const toggleColorMode= useToggle(isDark)  
  
</script>
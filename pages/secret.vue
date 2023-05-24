<template>
  <div class="">
    <p>Hi Admin</p>
  </div> 
</template>

<script lang="ts" setup>
  definePageMeta({
    middleware: ['admin']
  })
</script>
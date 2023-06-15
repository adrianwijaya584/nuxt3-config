<template>
  <div class="">
    <p>Hi Admin</p>

    <button class="bg-red-300 p-3 px-6 text-black rounded-md" @click.self="logout">Logout</button>
  </div> 
</template>

<script lang="ts" setup>
  definePageMeta({
    middleware: ['admin']
  })

  const token= useCookie('token')

  function logout() {
    token.value= null
    
    navigateTo('/')
  }
</script>
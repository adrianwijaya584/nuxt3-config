<template>
  <div class="">
    <p>Hi Admin</p>

    <button class="bg-red-300 p-3 px-6 text-black rounded-md" @click.self="logout">Logout</button>
  </div> 
</template>

<script lang="ts" setup>
  import {useTokenStore} from '~/stores/token'

  definePageMeta({
    layout: 'admin',
    middleware: 'admin'
  })

  useSeoMeta({
    description: 'lorem ipsum'
  })

  const tokenStore= useTokenStore()

  function logout() {
    tokenStore.deleteToken()
    
    navigateTo('/')
  }
</script>
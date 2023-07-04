<template>
  <div class="">
    <h3 class="text-center font-bold text-3xl">About us</h3>

      <NuxtImg
        src="/jeanne.jpg"
        height="200" 
        width="200" 
        alt="jeanne"
        class="self-start"
      />

    <p class="line-clamp-3 w-2/5 mb-6">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
    </p>

    <UButton @click="refresh()">Refresh data</UButton>

    <div v-if="pending">
      <p>getting data....</p>
    </div>

    <div v-else>
      <NuxtLink v-for="{id, title} in data" :to="`/todo/${id}`" :key="id">
        <p>{{title}}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useTokenStore} from '~/stores/token';

  const tokenStore= useTokenStore()

  const { data, pending, refresh } = await useFetch<TodoData[]>('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      token: tokenStore.getToken()
    }
  })
</script>
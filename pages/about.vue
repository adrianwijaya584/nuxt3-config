<template>
  <div class="">
    <h3 class="text-center font-bold text-3xl">About us</h3>

      <img
        src="https://i.pinimg.com/736x/1b/88/92/1b8892d1ee65e258a2ce7804f52c5f9a.jpg"
        height="200" 
        width="200" 
        alt="ryo yamada"
        class="self-start lazyload"
      />

      <img
        src="/jeanne.jpg"
        height="200" 
        width="200" 
        alt="jeanne"
        class="self-start lazyload"
      />

    <p class="line-clamp-3 w-2/5 mb-6">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
    </p>

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

  const { data, pending, refresh } = await useLazyFetch<TodoData[]>('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      token: tokenStore.getToken()
    }
  })
</script>
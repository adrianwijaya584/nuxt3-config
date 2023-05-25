<template>
  <div class="">
    <h3 class="text-center font-bold text-3xl">About us</h3>

    <p class="line-clamp-3 w-2/5 mb-6">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo illum quaerat voluptatibus rerum dolore iusto id, impedit temporibus tenetur eligendi incidunt cum, eaque, similique velit omnis eum totam. Eius, consequuntur.
    </p>

    <div v-if="todoStore.isLoading">
      <p>getting data....</p>
    </div>

    <div v-else>
      <NuxtLink v-for="{id, title}, k in todoStore.todos" :to="`/todo/${id}`">
        <p>{{title}}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import useTodoStore from '~/stores/todos';

  const todoStore= useTodoStore()

  onMounted(async ()=> {
    await todoStore.getTodos()
  })
</script>
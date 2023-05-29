<template>
  <div class="">
    <h1 class="text-3xl font-bold mb-3">Todo detail</h1>

    <div v-if="todoStore.isLoading">
      <p>mengambil detail todo....</p>
    </div>

    <div v-else>
      <div v-if="todoStore.todoDetail">
        <p>{{ todoStore.todoDetail.title }}</p>
        <p>{{ todoStore.todoDetail.completed?'':'belum' }} selesai</p>
      </div>

      <div v-else>
        <p>Todo tidak ditemukan !</p>
      </div>
    </div> 
  </div> 
</template>

<script setup lang="ts">
import useTodoStore from '~/stores/todos';

  // definePageMeta({
  //   middleware: ['admin']
  // })
  
  const route= useRoute()
  const todoStore= useTodoStore()

  onMounted(()=> {
    todoStore.getTodoDetail(route.params.id.toString())
  })
</script>
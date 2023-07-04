<template>
  <div class="">
    <p>examples</p>

    <template v-for="todo, k in todos" :key="k">
      <p>{{ todo.title }}</p>
    </template>
  </div>
</template>

<script setup lang="ts">
  const todos= shallowRef<{userId: string, title: string}[]>([]);

  async function getTodos() {
    try {
      const data= await useAxios<{userId: string, title: string}[]>('/')

      todos.value= data.data;
      
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(()=> {
    getTodos()
  })
</script>
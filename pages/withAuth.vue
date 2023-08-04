<template>
  <div class="">
    <div v-if="pending">
      <p>getting data....</p>
    </div>

    <p>{{ data?.name }}</p>
    

  </div>
</template>

<script setup lang="ts">
  const { data, pending, error } = await useFetchWithFormatter<{name: string}>('http://localhost:3000/participants/account/whoami')

  watchEffect(()=> {
    if (!pending.value) {
     if (error.value?.statusCode==401) {
      navigateTo('/')
     }
     
    //  console.log(data.value);
     
    }
  })
</script>
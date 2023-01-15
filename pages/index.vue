<template>
  <div class="">
    <p>Hello World the counter is {{ counter }}</p>

    <button class="bg-red-600 dark:bg-slate-400 p-3 hover:dark:bg-pink-400" @click="counter++">+</button>
    <button class="bg-red-600 dark:bg-slate-400 p-3 ml-3" @click="counter>0&&counter--">-</button>
    
    <p>Link to about</p>
    <NuxtLink to="about">About</NuxtLink>

    <div class="flex justify-center flex-col">
      <p>composeable counter : {{ customCounter }}</p>
      <p>composeable double counter : {{ doubleCounter }}</p>
      <button class="p-3 bg-slate-600" @click="customCounter++">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCatStore } from '@/stores/cats'
  import useCustomCounter from '@/composeables/useCustomCounter'

  const counter= useLocalStorage("counter", 0)
  const cats= useCatStore()
  const {counter: customCounter, doubleCounter}= useCustomCounter()

  onMounted(async ()=> {
    console.log(cats.cats);
    console.log(randomString());  
    console.log(randomNumber(3));
    console.log(await useCustomRequest("todos", {}));
  })
</script>
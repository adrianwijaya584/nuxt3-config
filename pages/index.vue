<template>
  <div class="flex flex-col items-start space-y-3">
    <NuxtImg
      preload
      loading="lazy"
      src="https://i.pinimg.com/736x/1b/88/92/1b8892d1ee65e258a2ce7804f52c5f9a.jpg"
      height="200" 
      class="h-[200px] self-start"
    />

    <form @submit.prevent="addNewCat" class="flex flex-col space-y-2">
      <label for="name">Cat Name</label>
      <input type="text" name="name" v-model="name" class="dark:text-black">
    </form>

    <p v-for="cat, k in catsStore.cats" :key="k">{{ cat.name }}</p>

    <button @click.stop="darkModeToggler()">Toggle</button>
  </div>
</template>

<script setup>
  import { useCatsStore } from '~/stores/cats';

  useHead({
    title: 'Home'
  })

  const darkModeToggler= useToggle(useDark())

  const name= shallowRef('pus')
  const catsStore= useCatsStore()

  function addNewCat() {
    if (!name.value) {
      return
    }

    catsStore.addCat(name.value)
  }
</script>

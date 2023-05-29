<template>
  <div class="flex flex-col items-start space-y-3">
    <NuxtImg
      preload
      loading="lazy"
      src="https://i.pinimg.com/736x/1b/88/92/1b8892d1ee65e258a2ce7804f52c5f9a.jpg"
      height="200" 
      width="200" 
      alt="ryo yamada"
      class="self-start"
    />

    <NuxtImg
      src="/jeanne.jpg"
      height="200" 
      width="200" 
      alt="jeanne"
      class="self-start"
    />

    <form @submit.prevent="addNewCat" class="flex flex-col space-y-2">
      <label for="name">Nama kucing</label>
      <input type="text" id="name" v-model="name" class="dark:text-black">
      <button class="bg-slate-400">Tambahkan kucing</button>
    </form>

    <div v-for="cat, k in catsStore.cats" :key="k">
      <p>{{ cat.name }}</p>
      <button @click="deleteCat(k)">Hapus kucing</button>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { useCatsStore } from '~/stores/cats';

  useHead({
    title: 'Home'
  })

  const nuxtApp= useNuxtApp()

  const name= shallowRef('pus')
  const catsStore= useCatsStore()

  function addNewCat() {
    if (!name.value) {
      return
    }

    catsStore.addCat(name.value)

    name.value= ''
    nuxtApp.$toast.success('Kucing berhasil ditambahkan')
  }

  function deleteCat(pos: number) {
    catsStore.deleteCat(pos)

    nuxtApp.$toast.success('Kucing berhasil dihapus')
  }
</script>

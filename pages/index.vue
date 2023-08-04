<template>
  <div class="flex flex-col items-start space-y-3">

    <ModelSelect
      :options="provinces"
      v-model="province"
      placeholder="Pilih provinsi disini"
    />

    <form @submit.prevent="addNewCat()" class="flex flex-col space-y-2">
      <label for="name">Nama kucing</label>
      <UInput v-model="name" size="lg" />
      <UButton size="lg" type="submit">Kirim</UButton>
    </form>

    <div class="space-y-2">
      <ClientOnly>
        <template v-for="cat, k in catsStore.cats" :key="k">
          <p>{{ cat.name }}</p>

          <UButton color="red" size="lg" @click="deleteCat(k)" class="text-white">Hapus kucing</UButton>
        </template>
      </ClientOnly>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { useCatsStore } from '~/stores/cats';
  import {ModelSelect} from 'vue-search-select'
  import provinces from '@/assets/province.json';

  const nuxtApp= useNuxtApp()

  useHead({
    title: 'Hello World',
  })

  useSeoMeta({
    description: 'hello'
  })

  const name= shallowRef('pus')

  const province= shallowRef('')
  const catsStore= useCatsStore()

  watch(province, (v)=> console.log(v))

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

  onMounted(()=> {
    console.log(useDateFormatter(new Date(), 'DD-MM-YYYY HH:mm:ss'));
    
  })

</script>

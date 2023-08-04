<template>
  <div>
    <input type="text" name="name" v-model="searchValue" placeholder="Cari Nama pemain disini">

    <select name="filterAge" v-model.number="filterAge">
      <option value="all">all</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
    </select>

    <EasyDataTable
      show-index
      alternating
      border-cell
      buttons-pagination
      :headers="headers"
      :items="items"
      :search-field="searchField"
      :search-value="searchValue"
      :filter-options="FilterOptions"
    >
      <template #item-name="item">
        <div class="flex items-center">
          <img :src="item.image" class="lazyload w-12 h-12 object-cover rounded-full border border-black">
          <p class="ml-2 text-base font-bold">{{ item.name }}</p>
        </div>
      </template>

      <template #item-action="item">
        <div class="">
          <button class="bg-red-400" @click="showAlert(item.name)">Hapus</button>
        </div>
      </template>
    </EasyDataTable>
  </div> 
</template>

<script setup lang="ts">
  import EasyDataTable, {Header, Item, FilterOption} from 'vue3-easy-data-table';
  import 'vue3-easy-data-table/dist/style.css';

  const nuxtApp = useNuxtApp()

  const searchField = ['name'];
  const searchValue = shallowRef('');
  const filterAge = shallowRef('all');

  const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Height (cm)", value: "height", sortable: true },
      { text: "Weight (kg)", value: "weight", sortable: true },
      { text: "Age", value: "age", sortable: true },
      {text: 'aksi', value: 'action'}
    ];

    const items: Item[] = [
      { "name": "Curry", "height": 178, "weight": 77, "age": 20, image: 'https://bafkreih3oswhrhrvxwhebuqqnlqtklnth5pbc2q3iv6446icpltt6tymvy.ipfs.dweb.link/?filename=Stephen.png' },
      { "name": "James", "height": 180, "weight": 75, "age": 21, image: 'https://bafkreih3oswhrhrvxwhebuqqnlqtklnth5pbc2q3iv6446icpltt6tymvy.ipfs.dweb.link/?filename=Stephen.png' },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 22, image: 'https://bafkreih3oswhrhrvxwhebuqqnlqtklnth5pbc2q3iv6446icpltt6tymvy.ipfs.dweb.link/?filename=Stephen.png' }
    ]

    const FilterOptions= computed((): FilterOption[]=> {
      const filterOptionsArray: FilterOption[] = [];

      if (filterAge.value != 'all') {
        filterOptionsArray.push({
          field: 'age',
          comparison: '=',
          criteria: filterAge.value
        })
      }

      return filterOptionsArray;
    });

    function showAlert(name: string) {
      alert(`hello ${name}`)
    }

  onMounted(()=> {

    // nuxtApp.$toast.success('ok')
  })
</script>
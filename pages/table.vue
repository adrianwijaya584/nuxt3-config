<template>
  <div>
    <input type="text" name="name" v-model="searchValue" placeholder="Cari Nama pemain disini">

    <EasyDataTable
      show-index
      :headers="headers"
      :items="items"
      :search-field="searchField"
      :search-value="searchValue"
    >
      <template #item-action="item">
        <div class="">
          <button class="bg-red-400" @click="showAlert(item.name)">Hapus</button>
        </div>
      </template>
    </EasyDataTable>
  </div> 
</template>

<script setup lang="ts">
  import EasyDataTable, {Header, Item} from 'vue3-easy-data-table';
  import 'vue3-easy-data-table/dist/style.css';

  const searchField = ref("name");
  const searchValue = ref("");

  const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Height (cm)", value: "height", sortable: true },
      { text: "Weight (kg)", value: "weight", sortable: true },
      { text: "Age", value: "age", sortable: true },
      {text: 'aksi', value: 'action'}
    ];

    const items: Item[] = [
      { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
      { "name": "James", "height": 180, "weight": 75, "age": 21 },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
    ]

    function showAlert(name: string) {
      alert(`hello ${name}`)
    }
</script>
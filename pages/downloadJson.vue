<template>
  <p>ok</p>

  <UButton :loading="testUtils.loading" @click="downloadJson">Download data</UButton>
</template>

<script setup lang="ts">
import XLSX from 'xlsx';

const testUtils= shallowReactive({
  loading: false,
})

async function downloadJson() {
  const rows= [
    {
      name: 'Adrian',
      age: 20,
    },
    {
      name: 'Umar',
      age: 20,
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

  XLSX.utils.sheet_add_aoa(worksheet, [["Nama", "Umur"]], { origin: "A1" });

  testUtils.loading= true;

  await XLSX.writeFile(workbook, "students.xlsx", { 
    compression: true,
    type: 'file',
  });

  testUtils.loading= false;
}
</script>
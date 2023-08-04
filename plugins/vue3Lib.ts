import Vue3Toastify, { toast } from 'vue3-toastify';
// @ts-ignore
import JsonExcel from "vue-json-excel3";
import 'vue3-toastify/dist/index.css';
import "vue-search-select/dist/VueSearchSelect.css"

export default defineNuxtPlugin(({ vueApp, provide })=> {
  vueApp.use(Vue3Toastify, { 
    autoClose: 2000,
    closeOnClick: true
  });

  vueApp.component("downloadExcel", JsonExcel);

  return {
    provide: { 
      toast,
    },
  }
})
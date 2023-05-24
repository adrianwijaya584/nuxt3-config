import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin(({ vueApp })=> {
  vueApp.use(Vue3Toastify, { 
    autoClose: 2000,
  });

  return {
    provide: { toast },
  }
})
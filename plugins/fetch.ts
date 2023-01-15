import { useCatStore } from "@/stores/cats"


export default defineNuxtPlugin(nuxtApp=> {
  const catStore= useCatStore()
  return {
    provide: {
      customRequest: $fetch.create({
        baseURL: "https://jsonplaceholder.typicode.com",
        headers: {
          authorization: catStore.cats[0]
        },
        onResponse({response}) {
          // console.log(response)
        }
      }),

    }
  }
})
import { useCatStore } from "~~/stores/cats"
const catStore= useCatStore()

export default $fetch.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    authorization: catStore.cats[0]
  },
  onResponse({response}) {
    // console.log(response)
  }
})
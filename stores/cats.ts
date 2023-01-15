export const useCatStore= defineStore("cats", {
  state: ()=> ({
    cats: useLocalStorage("cats", ["meongssss"])
  }),
})
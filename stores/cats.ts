export const useCatsStore= defineStore("cats", {
  state: ()=>({
    cats: useLocalStorage('catsData', [{
      name: "mpus",
    }, {
      name: 'meong'
    }]),
    test: useCookie('test')
  }),
  actions: {
    addCat(name: string) {
      this.cats.push({
        name
      })
    },
    deleteCat(pos: number) {
      this.cats.splice(pos, 1)
    }
  }
})
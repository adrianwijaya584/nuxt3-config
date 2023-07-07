
export const useCatsStore= defineStore("cats", {
  state: ()=>({
    cats: useLocalStorage('catsData', <{name: string}[]>[]),
  }),
  hydrate(state, initialState) {
    // @ts-ignore
    state.cats= useLocalStorage('catsData', [{
      name: "mpus",
    }, {
      name: 'meong'
    }]);
  },
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
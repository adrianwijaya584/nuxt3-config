import {useTokenStore} from './token'

export const useCatsStore= defineStore("cats", {
  state: ()=>({
    cats: useLocalStorage('catsData', [{
      name: "mpus",
    }, {
      name: 'meong'
    }]),
  }),
  actions: {
    addCat(name: string) {
      console.log(useTokenStore().getToken());
      
      
      this.cats.push({
        name
      })
    },
    deleteCat(pos: number) {
      this.cats.splice(pos, 1)
    }
  }
})
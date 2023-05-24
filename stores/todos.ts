interface TodoData {
  title: string
}

const useTodoStore= defineStore('todos', {
  state: ()=> ({
    isLoading: false,
    todos: <TodoData[]>[],
    todoDetail: <TodoData|undefined> undefined,
  }),
  actions: {
    async getTodos(){
      try {
        this.isLoading= true
        const req= await fetch('https://jsonplaceholder.typicode.com/todos')

        const data= await req.json()

        this.todos= data as TodoData[]
        this.isLoading= false
      } catch (error) {
        this.isLoading= false

        console.log(error);
      }
    }
  }
})

export default useTodoStore

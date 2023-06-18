const useTodoStore= defineStore('todos', {
  state: ()=> ({
    isLoading: false,
    todos: <TodoData[]>[],
    todoDetail: <TodoData | undefined> undefined,
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
    },
    async getTodoDetail(id: string | number) {
      try {
        this.isLoading= true

        const req= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

        if (req.status != 200) {
          throw 'error in fetching.'
        }

        const data= await req.json()

        this.isLoading= false
        
        this.todoDetail= data as TodoData
      } catch (error) {
        console.log(error);
        
        this.isLoading= false

      }
    },
  }
})

export default useTodoStore

export default ()=> {
  const counter= useState('counter', ()=> 0)

  return {
    counter,
    increment: ()=> counter.value++,
    decrement: ()=> counter.value > 0 && counter.value--,
    doubleCounter: computed(()=>  counter.value * 2)
  }
}
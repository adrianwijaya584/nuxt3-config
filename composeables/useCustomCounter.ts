import { ComputedRef, Ref } from "nuxt/dist/app/compat/capi"

type Counter= {
  counter: Ref<number>
  doubleCounter: ComputedRef<number>
}

export default (): Counter=> {
  const counter= ref(0)

  return {
    counter,
    doubleCounter:  computed(()=> counter.value * 2 )
  }
}
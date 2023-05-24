export default defineNuxtRouteMiddleware((to, from)=> {
  
  if (to.path=='/secret') {
    useNuxtApp().$toast.error('Oops anda belum login', {
    })

    const token= useLocalStorage('token', null)

    if (!token.value) {
      return navigateTo(from.path ?? '/')  
    }

  }
})
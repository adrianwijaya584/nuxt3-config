export default defineNuxtRouteMiddleware((to, from)=> {
  const pathWithMiddleware= ['/secret']

  if (pathWithMiddleware.includes(to.path)) {
    const token= useLocalStorage('token', null)

    console.log(to.path);
    
    if (!token.value) {
      const redirectUrl= useState('redirectUrl', ()=> '/')

      if (pathWithMiddleware.includes(from.path)) {
        redirectUrl.value= '/'
      } else {
        redirectUrl.value= from.path
      }
      
      useNuxtApp().$toast.error('Oops anda belum login :(', {
        
      })

      return navigateTo(redirectUrl.value)  
    }

  }
})
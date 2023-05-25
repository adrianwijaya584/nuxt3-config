export default defineNuxtRouteMiddleware((to, from)=> {
  const pathWithMiddleware= ['/secret']

  console.log(to);

  if (pathWithMiddleware.includes(to.path)) {
    const token= useLocalStorage('token', null)

    
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
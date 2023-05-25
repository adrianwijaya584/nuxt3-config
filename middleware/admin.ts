export default defineNuxtRouteMiddleware((to, from)=> {
  const nuxtApp= useNuxtApp()
  const pathWithMiddleware= ['secret', 'todo/:id']
  const regex= new RegExp(/^\/|(\(\))|\/$/gim)

  const toPath= nuxtApp.$cleanUrl(to.matched[0].path)
  const fromPath= nuxtApp.$cleanUrl(from.matched[0].path)

  if (pathWithMiddleware.includes(toPath)) {
    const token= useLocalStorage('token', null)

    if (!token.value) {
      const redirectUrl= useState('redirectUrl', ()=> '/')

      if (pathWithMiddleware.includes(fromPath)) {
        redirectUrl.value= '/'
      } else {
        redirectUrl.value= from.path
      }
      
      nuxtApp.$toast.error('Oops anda belum login :(', {
        
      })

      return navigateTo(redirectUrl.value)  
    }

  }
})
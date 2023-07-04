import {useTokenStore} from '~/stores/token'

export default defineNuxtRouteMiddleware((to, from)=> {
  const nuxtApp= useNuxtApp()
  const pathWithMiddleware= ['secret', 'todo/:id']

  try {
    useAxios('').then((data)=> {
      // console.log(data.data);
    })
  } catch (error) {
    console.log(error);
  }

  const toPath= nuxtApp.$cleanUrl(to.matched[0].path)
  const fromPath= nuxtApp.$cleanUrl(from.matched[0].path)
  
  if (pathWithMiddleware.includes(toPath)) {
    const {getToken}= useTokenStore()
    const token= getToken()

    if (!token) {
      const redirectUrl= useState('redirectUrl', ()=> '/')

      if (pathWithMiddleware.includes(fromPath)) {
        redirectUrl.value= '/'
      } else {
        redirectUrl.value= from.path
      }
      
      try {
        nuxtApp.$toast.error('Oops anda belum login :(', {})
      } catch(e) {}

      return navigateTo(redirectUrl.value)  
    }

  }
})
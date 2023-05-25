function cleanUrl(url: string): string {
  const regex= new RegExp(/^\/|(\(\))|\/$/gim)

  return url.replaceAll(regex, '')
}

export default defineNuxtPlugin(()=> {
  return {
    provide: {
      cleanUrl
    }
  }
})
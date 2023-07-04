const tokenKey= 'token'

export const useTokenStore= defineStore('token', {
  /**  tidak ada state disini untuk mengambil token
   *  menggunakan method getToken sehingga cookie selalu terefresh
   */
  // state: ()=> ({
  //   token: useCookie(tokenKey).value ?? ''
  // }),
  actions: {
    getToken(): string {
      return useCookie(tokenKey, {
        watch: true
      }).value ?? ''
    },
    setToken(token: string) {
      useCookie(tokenKey, {
        // set cookie for 7 days max age format is seconds
        maxAge: 7 * 24 * 60 * 60
      }).value= token
    },
    deleteToken() {
      useCookie(tokenKey).value= null
    }
  }
})

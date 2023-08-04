import axios, { AxiosError } from 'axios';
import appConfig from '~/app.config';
import { useTokenStore } from '~/stores/token';


axios.interceptors.request.use((request)=> {
  const tokenStore= useTokenStore();
  request.baseURL= appConfig.apiBaseUrl;

  // request.headers.Authorization= `Bearer ${tokenStore.getToken()} `;

  return request;
}, (error)=> {
  return Promise.reject(error);
});

// @ts-ignore
axios.interceptors.response.use((data)=> {
  return data;
}, (error: AxiosError)=> {
  // navigateTo('/')
  return Promise.reject(error);
})

export default axios;

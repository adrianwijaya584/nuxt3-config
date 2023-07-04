import axios, { AxiosError } from 'axios';
import appConfig from '~/app.config';

axios.interceptors.request.use((request)=> {
  request.baseURL= appConfig.apiBaseUrl;

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

import axios, { AxiosError } from 'axios';

axios.interceptors.request.use((request)=> {
  request.baseURL= 'https://jsonplaceholder.typicode.com/todos';

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

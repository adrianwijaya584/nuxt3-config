import axios from 'axios'

export default defineEventHandler(async (event)=> {
  try {
    const body= await readBody(event)

    const {data}= await axios.post('http://54.254.113.229/py/psg', body)

    return data
  } catch (error) {
    if (error instanceof axios.AxiosError) {
      console.log(error.response?.data);
    }

    setResponseStatus(event, 500)
    
    return 'error.'
  }
})
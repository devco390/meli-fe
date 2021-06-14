import axios from 'axios'

const contentAPIMeli = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_MELI_URL
})
const contentAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

const setConfig = (config: any) => {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json'
  }
  return config
}

contentAPIMeli.interceptors.request.use(setConfig)
contentAPI.interceptors.request.use(setConfig)

export default { contentAPIMeli, contentAPI }

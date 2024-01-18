import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT, //ลิ้ง api
  // baseURL: 'http://localhost:3002',
  // timeout: 30000
})

export const fetchData = async () => {
  try {
    const res = await api.get(`/photos`)
    return res.data
  } catch (err) {
    throw new Error(err.response.data)
  }
}

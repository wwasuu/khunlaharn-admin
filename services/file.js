import axios from 'axios'
import { URL_API } from '../config'

const config = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${auth.accessToken}`
    },
  }
}

const upload = (file) => {
  return axios.post(`${URL_API}/api/upload`, file, config())
}

export default {
  upload
}

import axios from 'axios'
import { URL_API } from '../config'

const config = (data = null) => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.accessToken}`
    },
  }

  if (data !== null) {
    config.data = data
  }

  return config
}

const get = () => {
  return axios.get(`${URL_API}/api/media`, config())
}

const remove = (data) => {
  return axios.delete(`${URL_API}/api/media`, config(data))
}

export default {
  get,
  remove,
}
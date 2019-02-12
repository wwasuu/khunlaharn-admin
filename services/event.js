import axios from 'axios'
import { URL_API } from '../config'

const config = () => {
  const auth = JSON.parse(localStorage.getItem('auth'))
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.accessToken}`
    },
  }
}

const get = () => {
  return axios.get(`${URL_API}/api/events`, config())
}

const getById = (id) => {
  return axios.get(`${URL_API}/api/event/${id}`, config())
}

const create = (data) => {
  return axios.post(`${URL_API}/api/events`, data, config())
}

const edit = (data) => {
  return axios.put(`${URL_API}/api/events`, data, config())
}

const remove = (id) => {
  return axios.delete(`${URL_API}/api/event/${id}`, config())
}

export default {
  get,
  getById,
  create,
  edit,
  remove
}
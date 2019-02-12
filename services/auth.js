import axios from 'axios'
import { URL_API } from '../config'

const signin = (email, password) => {
  return axios.post(`${URL_API}/login`, { email, password, grant_type: 'password' })
}

export default {
  signin
}
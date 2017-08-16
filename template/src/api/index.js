import axios from 'axios'

axios.defaults.baseURL = window.CONFIG.API_URL
axios.defaults.withCredentials = true

export default axios

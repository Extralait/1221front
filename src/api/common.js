import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://157.245.240.24:5000/api',
})



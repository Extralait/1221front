import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://localhost:8000/api',
})

HTTP.defaults.headers.post['Content-Type'] = "multipart/form-data"


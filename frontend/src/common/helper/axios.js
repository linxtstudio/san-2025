import axios from 'axios'

let accessToken = null

export const apiClientAuth = axios.create({
  baseURL: 'http://103.171.146.59:7004/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'Application/json',
    'Access-Control-Allow-Origin': '*', 
   }
})

apiClientAuth.interceptors.request.use(
  async (request) => {
    if (accessToken === null) {
      accessToken = JSON.parse(localStorage.getItem('access-token') || '{}')
    }

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`
    } else {
      delete request.headers.Authorization
    }

    return request
  },
  (error) => {
    console.error(`API Error: `, error)
    throw error
  }
)

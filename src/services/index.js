import axios from 'axios'
import AuthService from '@/services/auth'
import { useToast } from 'vue-toastification'

const toast = useToast()

const API_ENVS = {
  production: '',
  development: '',
  homolog: '',
  local: 'http://localhost:5000'
}

const httpClient = axios.create({
  baseURL: API_ENVS.local
})

httpClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnError = error.request.status === 0 || error.request.status === 500
  if (canThrowAnError) {
    toast.error('Ocorreu um erro ao criar a conta, tente novamente mais tarde')
    throw new Error(error.message)
  }
  return error
})

export default {
  auth: AuthService(httpClient)
}

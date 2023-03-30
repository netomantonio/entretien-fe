import axios from 'axios'
import AuthService from '@/services/auth'
import RegisterService from '@/services/register'
import UserService from '@/services/users'
import {useToast} from 'vue-toastification'
import {setGlobalLoading} from "@/store/global"

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

httpClient.interceptors.request.use(
  (config) => {
    // Adicionar cabeçalhos ou outras configurações antes da chamada ser enviada
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    // Tratar erros de configuração antes da chamada ser enviada
    return Promise.reject(error);
  }
)

httpClient.interceptors.response.use(
  (response) => {
    // Manipular respostas antes de retornar a chamada
    setGlobalLoading(false)
    return response;
  },
  (error) => {
    // Tratar erros de resposta
    if (error.request.status === 0 || error.request.status === 500) {
      setGlobalLoading(false)
      toast.error('Ocorreu um erro ao criar a conta, tente novamente mais tarde')
    } else if (error.response.status === 401) {
      // Redirecionar para a tela de login
      window.location = '/';
    }
    setGlobalLoading(false)
    return Promise.reject(error);
  }
)

export default {
  auth: AuthService(httpClient),
  users: UserService(httpClient),
  register: RegisterService(httpClient)
}

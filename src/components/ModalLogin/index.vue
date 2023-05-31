<template>
  <div id="modal-login" class="flex justify-between">
    <h6 class="text-3xl font-black text-gray-800">
      Entre na sua conta
    </h6>
    <button
      class="text-4xl text-gray-600 focus:outline-none"
      @click="close">
      &times;
    </button>
  </div>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <label class="block">
        <span class="text-lg font-medium text-gray-800">Username</span>
        <input
          v-model="state.username.value"
          :class="{
              'border-brand-danger': !!state.username.errorMessage
            }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="xantlee"
          type="text"
        >
        <span
          v-if="!!state.username.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.username.errorMessage }}
          </span>
      </label>
      <label class="block mt-9">
        <span class="text-lg font-medium text-gray-800">Senha</span>
        <input
          v-model="state.password.value"
          :class="{
              'border-brand-danger': !!state.password.errorMessage
            }"
          class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded"
          placeholder="Azx#32!sEW984@3.!@"
          type="password"
        >
        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.password.errorMessage }}
          </span>
        <button
          :class="{
              'opacity-50': state.isLoading
            }"
          :disabled="state.isLoading"
          class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
          type="submit"
        >
          <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
          <span v-else>Entrar</span>
        </button>
      </label>
    </form>
  </div>

</template>
<script>

import {reactive} from 'vue'
import useModal from '@/hooks/useModal'
import {useField} from 'vee-validate'
import {useToast} from 'vue-toastification'
import Icon from '../Icon'
import {validateEmptyAndLength3} from '@/utils/validators'
import services from '@/services'
import {useRouter} from 'vue-router'

export default {
  components: {
    Icon
  },
  setup() {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()
    const {
      value: usernameValue,
      errorMessage: usernameErrorMessage
    } = useField('username', validateEmptyAndLength3)

    const {
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validateEmptyAndLength3)

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      username: {
        value: usernameValue,
        errorMessage: usernameErrorMessage
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      }
    })

    async function handleSubmit() {
      try {
        toast.clear()
        state.isLoading = true
        const {
          data
        } = await services.auth.login({
          username: state.username.value,
          password: state.password.value
        })

        if (data) {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('roles', data.roles[0])
          window.localStorage.setItem('email', data.email)
          window.localStorage.setItem('id', data.id)
          await router.push({name: 'Dashboard'})
          state.isLoading = false
          modal.close()
          return
        }

        if (errors.status === 404) {
          toast.error('E-mail não encontrado')
        }
        if (errors.status === 403) {
          toast.error('Não tem permissão')
        }
        if (errors.status === 401) {
          toast.error('E-mail/Senha inválido')
        }
        if (errors.status === 400) {
          toast.error('Ocorreu um erro ao fazer o login')
        }
        state.isLoading = false
      } catch (error) {
        state.isLoading = false
        state.hasErrors = !!error
        toast.error('Ocorreu um erro ao fazer o login')
      }
    }

    return {
      state,
      close: modal.close,
      handleSubmit
    }
  }
}
</script>

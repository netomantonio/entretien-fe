<template>
  <div class="modal-content">
    <div id="modal-login" class="flex justify-between">
      <h6 class="text-3xl font-black text-gray-800">
        Crie uma entrevista
      </h6>
      <button
        class="text-4xl text-gray-600 focus:outline-none"
        @click="close">
        &times;
      </button>
    </div>
    <div class="mt-16">
      <form @submit.prevent="handleSubmit">
        <label class="block mt-2">
          <span class=" font-medium text-gray-800">CPF do candidato</span>
          <input
            v-model="state.cpf.value"
            :class="{
                'border-brand-danger': !!state.cpf.errorMessage
              }"
            class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
            placeholder="11122233344"
            type="text">
          <span
            v-if="!!state.cpf.errorMessage"
            class="block font-medium text-brand-danger">
            {{ state.cpf.errorMessage }}
          </span>
        </label>
        <label class="block mt-2">
          <span class=" font-medium text-gray-800">Observação</span>
          <input
            v-model="state.observation.value"
            :class="{
                'border-brand-danger': !!state.observation.errorMessage
              }"
            class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
            placeholder=""
            type="text">
          <span
            v-if="!!state.observation.errorMessage"
            class="block font-medium text-brand-danger">
            {{ state.observation.errorMessage }}
          </span>
        </label>
        <div class="flex-wrap p-4">
          <button :class="{'opacity-50': state.isLoading}"
                  :disabled="state.isLoading"
                  class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
                  type="submit"
                  @click="validaCpf">
            <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
            <span v-else>Criar nova entrevista</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
import useModal from '@/hooks/useModal'
import {useField} from 'vee-validate'
import {useToast} from 'vue-toastification'
import {validateCpf} from '@/utils/validators'
import {getGlobalLoading, setGlobalLoading} from "@/store/global";
import services from "@/services";

export default {
  setup() {
    const modal = useModal()
    const toast = useToast()

    const {
      value: cpfValue,
      errorMessage: cpfErrorMessage
    } = useField('cpf')
    // } = useField('cpf', validateCpf)

    const {
      value: observationValue,
      errorMessage: observationErrorMessage
    } = useField('observation')

    const state = reactive({
      hasErrors: false,
      isLoading: getGlobalLoading(),
      cpf: {
        value: cpfValue,
        errorMessage: cpfErrorMessage
      },
      observation: {
        value: observationValue,
        errorMessage: observationErrorMessage
      }
    })

    function validateCpf() {
      if (!state.cpf.value) {
        state.hasErrors = true
        return
      }
      return true
    }

    async function handleSubmit() {
      toast.clear()
      // setGlobalLoading(true)
      if (state.hasErrors) {
        toast.error('O CPF deve estar preenchido')
        setGlobalLoading(false)
      }

      const {
        errors
      } = await services.interview.createInterview({
        cpf: state.cpf.value,
        observation: state.observation.value
      })
      if (errors) {
        toast.error('Ocorreu um erro ao criar a entrevista')
      }
      setGlobalLoading(false)
      state.hasErrors = false
      if (!errors)
        toast.success('Entrevista criada!')
      new Promise(resolve => setTimeout(resolve, 5000))
      modal.close()
    }

    return {
      state,
      close: modal.close,
      handleSubmit
    }
  }
}
</script>

<style>
.modal-content {
  overflow-y: auto;
}

@media (min-width: 800px) {
  .modal-content {
  }
}

</style>

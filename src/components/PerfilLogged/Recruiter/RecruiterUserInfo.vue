<template>
  <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-medium">Informações de usuário</h2>
      <button
        class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        @click="state.isCollapsed.userInfo = !state.isCollapsed.userInfo"
      >
        <svg
          :class="{'rotate-90': state.isCollapsed.userInfo}"
          class="h-6 w-6 transition-transform duration-150 transform"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
    </div>
    <div v-if="!state.isCollapsed.userInfo">
      <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium">Informações pessoais</h2>
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            @click="state.isCollapsed.personalInfo = !state.isCollapsed.personalInfo"
          >
            <svg
              :class="{'rotate-90': state.isCollapsed.personalInfo}"
              class="h-6 w-6 transition-transform duration-150 transform"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
        <div v-if="!state.isCollapsed.personalInfo">
          <div id="basic-user">
            <div class="mb-4 px-2 mt-10 w-full">
              <input id="first-name"
                     v-model="state.userInfo.firstName.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="Nome..." type="text"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <input id="second-name"
                     v-model="state.userInfo.lastName.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="Sobrenome..."
                     type="text"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="birth-day">Aniversario:</label>
              <input id="birth-day"
                     v-model="state.userInfo.birthDay.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     type="date"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="tel">Celular:</label>
              <input id="tel" v-model="state.userInfo.phone.value"
                     v-mask="'(##)#.####-####'"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     name="phone"
                     placeholder="12999999999" type="tel">
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <input id="email"
                     v-model="state.userInfo.email.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="seuemail@seuprovedor.com" type="email"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="cpf">CPF:</label>
              <input id="cpf"
                     v-model="state.userInfo.cpf.value"
                     v-mask="'###.###.###-##'"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     disabled
                     placeholder="11122233344" type="text"/>
            </div>
          </div>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium">Informações profissionais</h2>
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            @click="state.isCollapsed.professionalInfo = !state.isCollapsed.professionalInfo"
          >
            <svg
              :class="{'rotate-90': state.isCollapsed.professionalInfo}"
              class="h-6 w-6 transition-transform duration-150 transform"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
        </div>
        <div v-if="!state.isCollapsed.professionalInfo">
          <div id="recruiter-user">
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="professionalRecord">Registro
                Profissional:
              </label>
              <input id="professionalRecord"
                     v-model="state.userInfo.professionalRecord.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="6587 CRP/MT" type="text"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="presentation">Apresentação:</label>
              <input id="presentation"
                     v-model="state.userInfo.presentation.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="Faça sua apresentação profissional aqui" type="text"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="specialities">Especialidades:</label>
              <input id="specialities"
                     v-model="state.userInfo.specialities.value"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="Escreva aqui suas especialidades separadas por virgula Ex: educação corporativa, psicopedagogia empresarial, psicologia organizacional "
                     type="text"/>
            </div>
            <div class="mb-4 px-2 mt-10 w-full">
              <label class="block mb-1 text-sm" for="cnpj">CNPJ (Opcional):</label>
              <input id="cnpj"
                     v-model="state.userInfo.cnpj.value"
                     v-mask="'##.###.###/####-##'"
                     class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                     placeholder="02631532000152" type="text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      v-if="!state.isCollapsed.userInfo"
      :class="{
              'opacity-50': state.isLoading
            }"
      :disabled="state.isLoading"
      class="hidden sm:block px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
      @click="handleUpdateInfo"
    >
      <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
      <span v-else>Salvar</span>
    </button>
  </div>
</template>
<script>
import Icon from "@/components/Icon/index.vue"
import {reactive} from "vue";
import {getGlobalLoading, setGlobalLoading} from "@/store/global";
import {useToast} from "vue-toastification";
import {useField} from "vee-validate";
import {
  validateCnpj,
  validateCpf,
  validateEmptyAndEmail,
  validateEmptyAndLength3,
  validateEmptyAndLength5
} from "@/utils/validators";
import services from "@/services";

export default {
  components: {Icon},
  setup() {
    const toast = useToast()

    const {
      value: firstNameValue,
      errorMessage: firstNameErrorMessage
    } = useField('firstName', validateEmptyAndLength3)

    const {
      value: lastNameValue,
      errorMessage: lastNameErrorMessage
    } = useField('lastName', validateEmptyAndLength3)

    const {
      value: cpfValue,
      errorMessage: cpfErrorMessage
    } = useField('cpf', validateCpf)

    const {
      value: phoneValue,
      errorMessage: phoneErrorMessage
    } = useField('phone', validateEmptyAndLength3)

    const {
      value: emailValue,
      errorMessage: emailErrorMessage
    } = useField('email', validateEmptyAndEmail)

    const {
      value: cnpjValue,
      errorMessage: cnpjErrorMessage
    } = useField('cnpj', validateCnpj)

    const {
      value: professionalRecordValue,
      errorMessage: professionalRecordErrorMessage
    } = useField('professionalRecord', validateEmptyAndLength5)
    const {
      value: presentationValue,
      errorMessage: presentationErrorMessage
    } = useField('presentation', '')
    const {
      value: specialitiesValue,
      errorMessage: specialitiesErrorMessage
    } = useField('specialities', '')

    const {
      value: birthDayValue,
      errorMessage: birthDayErrorMessage
    } = useField('birthDay', '')

    const state = reactive({
      role: '',
      hasErrors: false,
      isLoading: getGlobalLoading(),
      isCollapsed: {
        userInfo: false,
        personalInfo: false,
        professionalInfo: false,
        agendaConfig: false
      },
      userInfo: {
        id: String,
        birthDay: {
          value: birthDayValue,
          errorMessage: birthDayErrorMessage
        },
        firstName: {
          value: firstNameValue,
          errorMessage: firstNameErrorMessage
        },
        lastName: {
          value: lastNameValue,
          errorMessage: lastNameErrorMessage
        },
        cpf: {
          value: cpfValue,
          errorMessage: cpfErrorMessage
        },
        phone: {
          value: phoneValue,
          errorMessage: phoneErrorMessage
        },
        email: {
          value: emailValue,
          errorMessage: emailErrorMessage
        },
        cnpj: {
          value: cnpjValue,
          errorMessage: cnpjErrorMessage
        },
        professionalRecord: {
          value: professionalRecordValue,
          errorMessage: professionalRecordErrorMessage
        },
        presentation: {
          value: presentationValue,
          errorMessage: presentationErrorMessage
        },
        specialities: {
          value: specialitiesValue,
          errorMessage: specialitiesErrorMessage
        },
      },
    })

    async function handleGetUserInfo() {
      toast.clear()
      const {data, errors} = await services.users.getMeRecruiter()
      state.userInfo.firstName.value = data.username
      state.userInfo.firstName.value = data.firstName
      state.userInfo.lastName.value = data.lastName
      state.userInfo.birthDay.value = data.birthDay
      state.userInfo.cpf.value = data.cpf
      state.userInfo.phone.value = data.phone
      state.userInfo.email.value = data.email
      state.userInfo.professionalRecord.value = data.professionalRecord
      state.userInfo.presentation.value = data.presentation
      state.userInfo.cnpj.value = data.cnpj
      state.userInfo.specialities.value = data.specialities
      if (errors){
        toast.info("Não foi possível carregar as informações, tente mais tarde!")
      }
    }

    handleGetUserInfo()

    async function handleUpdateInfo() {
      toast.clear()
      if (state.hasErrors) {
        toast.error('Todos os campos obrigatórios devem estar preenchidos')
        setGlobalLoading(false)
      }
      let recruiterUpdateRequest = {
        firstName: state.userInfo.firstName.value,
        lastName: state.userInfo.lastName.value,
        phone: state.userInfo.phone.value,
        email: state.userInfo.email.value,
        birthDay: state.userInfo.birthDay.value,
        professionalRecord: state.userInfo.professionalRecord.value,
        presentation: state.userInfo.presentation.value,
        cnpj: state.userInfo.cnpj.value,
        specialities: state.userInfo.specialities.value
      };
      const {
        errors
      } = await services.users.updateRecruiter(
        recruiterUpdateRequest,
        state.id
      )
      if (errors) {
        toast.error('Dados não foram atualizados, tente novamente mais tarde.')
      }
      setGlobalLoading(false)
      if (!errors)
        toast.success('Dados atualizados com sucesso!')
      new Promise(resolve => setTimeout(resolve, 5000))
    }

    return {
      state,
      handleUpdateInfo
    }
  }
}
</script>

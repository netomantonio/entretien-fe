<template>
  <div class="modal-content">
    <div id="modal-create-account" class="flex justify-between">
      <h1 class="text-4xl font-black text-gray-800">
        Crie sua conta
      </h1>
      <button
        class="text-4xl text-gray-600 focus:outline-none"
        @click="close">
        &times;
      </button>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="hidden sm:block">
        <BasicUser :state="state"/>
      </div>
      <div class="flex block sm:hidden">
        <BasicUserMobile :state="state" :valida-step-one="validaStepOne" :valida-step-three="validaStepThree"
                         :valida-step-two="validaStepTwo"/>
      </div>
      <div v-if="state.role === 'candidate'">
        <div class="flex hidden sm:block">
          <CandidateDefault :state="state"/>
        </div>
        <div class="flex block sm:hidden">
          <div v-if="state.showSteps.final">
            <CandidateMobile :state="state"/>
          </div>
        </div>
      </div>
      <div v-if="state.role === 'recruiter'">
        <div class="flex hidden sm:block">
          <RecruiterDefault :state="state"/>
        </div>
        <div class="flex block sm:hidden">
          <div v-if="state.showSteps.final">
            <RecruiterMobile :state="state"/>
          </div>
        </div>
      </div>
      <div v-if="state.role === 'manager'">
        <div class="flex hidden sm:block">
          <ManagerDefault :state="state"/>
        </div>
        <div class="flex block sm:hidden">
          <div v-if="state.showSteps.final">
            <ManagerMobile :state="state"/>
          </div>
        </div>
      </div>
      <div class="flex">
        <button
          :class="{
              'opacity-50': state.isLoading
            }"
          :disabled="state.isLoading"
          class="hidden sm:block px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
          type="submit"
        >
          <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
          <span v-else>Criar</span>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import Icon from '@/components/Icon/index.vue'
import useModal from '@/hooks/useModal'
import {useToast} from 'vue-toastification'
import {useField} from 'vee-validate'
import {
  validaPassword,
  validateCnpj,
  validateCpf,
  validateEmptyAndEmail,
  validateEmptyAndLength3,
  validateEmptyAndLength5
} from '@/utils/validators'
import {reactive} from 'vue'
import services from '@/services'
import {getGlobalLoading, setGlobalLoading} from '@/store/global'
import BasicUser from "@/components/ModalAccountCreate/User/desktop/BasicUser.vue";
import BasicUserMobile from "@/components/ModalAccountCreate/User/mobile/BasicUserMobile.vue";
import CandidateDefault from "@/components/ModalAccountCreate/Candidate/CandidateDefault.vue";
import CandidateMobile from "@/components/ModalAccountCreate/Candidate/CandidateMobile.vue";
import RecruiterDefault from "@/components/ModalAccountCreate/Recruiter/RecruiterDefault.vue";
import RecruiterMobile from "@/components/ModalAccountCreate/Recruiter/RecruiterMobile.vue";
import ManagerDefault from "@/components/ModalAccountCreate/Manager/ManagerDefault.vue";
import ManagerMobile from "@/components/ModalAccountCreate/Manager/ManagerMobile.vue";

export default {
  components: {
    ManagerMobile,
    ManagerDefault,
    RecruiterMobile,
    RecruiterDefault,
    CandidateMobile,
    CandidateDefault,
    BasicUserMobile,
    BasicUser,
    Icon
  },
  setup() {
    const modal = useModal()
    const toast = useToast()

    const {
      value: confirmPasswordValue,
      errorMessage: confirmPasswordErrorMessage
    } = useField('confirmPassword', confirmPasswordFunc)

    const {
      value: usernameValue,
      errorMessage: usernameErrorMessage
    } = useField('username', validateEmptyAndLength3)

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
      value: passwordValue,
      errorMessage: passwordErrorMessage
    } = useField('password', validaPassword)

    const {
      value: socialNetworkingValue,
      errorMessage: socialNetworkingErrorMessage
    } = useField('socialNetworking')

    const {
      value: pcdValue,
      errorMessage: pcdErrorMessage
    } = useField('pcd')

    const {
      value: cepValue,
      errorMessage: cepErrorMessage
    } = useField('cep')

    const {
      value: cnpjValue,
      errorMessage: cnpjErrorMessage
    } = useField('cnpj', validateCnpj)

    const {
      value: companyNameValue,
      errorMessage: companyNameErrorMessage
    } = useField('companyName', validateEmptyAndLength3)

    const {
      value: tradingNameValue,
      errorMessage: tradingNameErrorMessage
    } = useField('tradingName', validateEmptyAndLength3)

    const {
      value: businessAreaValue,
      errorMessage: businessAreaErrorMessage
    } = useField('businessArea', validateEmptyAndLength3)


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


    const state = reactive({
      showSteps: {
        fingerprint: true,
        contactAndPassword: false,
        three: false,
        four: false,
        five: false,
        final: false
      },
      role: '',
      hasErrors: false,
      isLoading: getGlobalLoading(),
      username: {
        value: usernameValue,
        errorMessage: usernameErrorMessage
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
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage
      },
      confirmPassword: {
        value: confirmPasswordValue,
        errorMessage: confirmPasswordErrorMessage
      },
      socialNetworking: {
        value: socialNetworkingValue,
        errorMessage: socialNetworkingErrorMessage
      },
      pcd: {
        value: pcdValue,
        errorMessage: pcdErrorMessage
      },
      cep: {
        value: cepValue,
        errorMessage: cepErrorMessage
      },
      cnpj: {
        value: cnpjValue,
        errorMessage: cnpjErrorMessage
      },
      companyName: {
        value: companyNameValue,
        errorMessage: companyNameErrorMessage
      }
      ,
      tradingName: {
        value: tradingNameValue,
        errorMessage: tradingNameErrorMessage
      }
      ,
      businessArea: {
        value: businessAreaValue,
        errorMessage: businessAreaErrorMessage
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
      }
    })

    function confirmPasswordFunc() {
      if (state.password.value !== state.confirmPassword.value) {
        return 'As senhas devem ser iguais'
      }
      return true
    }

    function validaStepOne() {
      if (!state.firstName.value || !state.lastName.value || !state.cpf.value) {
        state.hasErrors = true
        return
      }
      state.showSteps.fingerprint = false
      state.showSteps.contactAndPassword = true
      return true
    }

    function validaStepTwo() {
      if (!state.phone.value || !state.email.value || !state.password.value || !state.confirmPassword.value) {
        state.hasErrors = true
        return
      }
      state.showSteps.contactAndPassword = false
      state.showSteps.three = true
      return true
    }

    function validaStepThree() {
      if (!state.role) {
        state.hasErrors = true
        return
      }
      state.showSteps.three = false
      state.showSteps.final = true
      return true
    }

    function validaStepFinal() {
      if (state.role === 'candidate') {
        if (!state.socialNetworking.value || !state.cep.value) {
          state.hasErrors = true
          return
        }
      }
      if (state.role === 'recruiter') {
        if (!state.professionalRecord.value || !state.presentation.value || !state.specialities.value) {
          state.hasErrors = true
          return
        }

      }
      if (state.role === 'manager') {
        if (!state.cnpj.value || !state.companyName.value || !state.tradingName.value || !state.businessArea.value) {
          state.hasErrors = true
          return
        }
      }
      return true
    }

    async function handleSubmit() {
      validaStepFinal()
      toast.clear()
      // setGlobalLoading(true)
      if (state.hasErrors) {
        toast.error('Todos os campos obrigatórios devem estar preenchidos')
        setGlobalLoading(false)
      }
      if (state.role === 'candidate') {
        const {
          errors
        } = await services.register.registerCandidate({
          username: state.firstName.value + state.lastName.value,
          firstName: state.firstName.value,
          lastName: state.lastName.value,
          cpf: state.cpf.value,
          phone: state.phone.value,
          email: state.email.value,
          password: state.password.value,
          socialNetworking: state.socialNetworking.value.toString(),
          pcd: !!state.pcd.value,
          cep: state.cep.value,
        })
        if (errors) {
          toast.error('Ocorreu um erro ao criar conta')
        }
        setGlobalLoading(false)
        state.hasErrors = false
        if (!errors)
          toast.success('Conta criada!!!')
        new Promise(resolve => setTimeout(resolve, 5000))
        modal.close()
      } else if (state.role === 'recruiter') {
        const {
          errors
        } = await services.register.registerRecruiter({
          username: state.firstName.value + state.lastName.value,
          firstName: state.firstName.value,
          lastName: state.lastName.value,
          cpf: state.cpf.value,
          phone: state.phone.value,
          email: state.email.value,
          password: state.password.value,
          professionalRecord: state.professionalRecord.value,
          presentation: state.presentation.value,
          cnpj: state.cnpj.value,
          specialities: state.specialities.value
        })
        if (errors) {
          toast.error('Ocorreu um erro ao criar conta')
        }
        setGlobalLoading(false)
        if (!errors)
          toast.success('Conta criada!!!')
        new Promise(resolve => setTimeout(resolve, 5000))
        modal.close()
      } else if (state.role === 'manager') {
        const {
          errors
        } = await services.register.registerManager({
          username: state.firstName.value + state.lastName.value,
          firstName: state.firstName.value,
          lastName: state.lastName.value,
          cpf: state.cpf.value,
          phone: state.phone.value,
          email: state.email.value,
          password: state.password.value,
          cnpj: state.cnpj.value,
          companyName: state.companyName.value,
          tradingName: state.tradingName.value,
          operationArea: state.businessArea.value

        })
        if (errors) {
          toast.error('Ocorreu um erro ao criar conta')
        }
        setGlobalLoading(false)
        if (!errors)
          toast.success('Conta criada!!!')
        new Promise(resolve => setTimeout(resolve, 5000))
        modal.close()
      }
    }

    return {
      state,
      close: modal.close,
      handleSubmit,
      validaStepOne,
      validaStepTwo,
      validaStepThree
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

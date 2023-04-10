<!--suppress ALL -->
<template>
<!--  <recruiter-user-info :handle-update-info="handleUpdateInfo" :state="state"/>-->

  <agenda-config
    :state="state"
    :handle-agenda-submit="handleAgendaSubmit"
    :agenda="state.agenda"
  />

</template>
<script>
import {useToast} from 'vue-toastification'
import {getGlobalLoading, setGlobalLoading} from "@/store/global";
import services from "@/services";
import {reactive} from "vue";
import {useField} from "vee-validate";
import {
  validaPassword,
  validateCnpj,
  validateCpf,
  validateEmptyAndEmail,
  validateEmptyAndLength3,
  validateEmptyAndLength5
} from "@/utils/validators";
import RecruiterUserInfo from "@/components/PerfilLogged/Recruiter/RecruiterUserInfo.vue";
import AgendaConfig from "@/components/PerfilLogged/Recruiter/AgendaConfig.vue";

export default {
  components: {
    RecruiterUserInfo,
    AgendaConfig
  },
  setup() {
    const toast = useToast()

    const {
      value: confirmPasswordValue,
      errorMessage: confirmPasswordErrorMessage
    } = useField('confirmPassword', confirmPasswordFunc)

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

    const state = reactive({
      showSteps: {
        default: true,
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        final: false,
        resume: false,
        agendaStep: false
      },
      companies: [
        {
          name: "",
          office: "",
          startDate: "",
          endDate: "",
          description: "",
          expanded: ""
        }
      ],
      role: '',
      hasErrors: false,
      isLoading: getGlobalLoading(),
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
      isCollapsed: {
        userInfo: false,
        personalInfo: false,
        prefessionalInfo: false,
        agendaConfig: false
      },
      agenda: []
    })

    function addTimeOfTheDay() {
      state.agenda.timesOfTheDay[1].push({startingAt: '', endingAt: ''})
    }

    function removeTimeOfTheDay(index) {
      this.agenda.timesOfTheDay.splice(index, 1)
    }

    function confirmPasswordFunc() {
      if (state.password.value !== state.confirmPassword.value) {
        return 'As senhas devem ser iguais'
      }
      return true
    }

    async function handleAgendaSubmit() {
      toast.clear()
      if (state.hasErrors) {
        toast.error('Todos os campos obrigatórios devem estar preenchidos')
        setGlobalLoading(false)
      }
    }

    async function handleUpdateInfo() {
      toast.clear()
      if (state.hasErrors) {
        toast.error('Todos os campos obrigatórios devem estar preenchidos')
        setGlobalLoading(false)
      }
      if (state.role === 'recruiter') {
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
      }
    }

    return {
      removeTimeOfTheDay,
      addTimeOfTheDay,
      handleAgendaSubmit,
      handleUpdateInfo,
      state
    }
  }
}
</script>


<!--suppress ALL -->
<template>
  <recruiter-user-info/>

  <agenda-config
    :agenda="state.agenda"
    :handle-agenda-submit="handleAgendaSubmit"
    :state="state"
  />

</template>
<script>
import {useToast} from 'vue-toastification'
import {getGlobalLoading, setGlobalLoading} from "@/store/global"
import {reactive} from "vue"
import RecruiterUserInfo from "@/components/PerfilLogged/Recruiter/RecruiterUserInfo.vue";
import AgendaConfig from "@/components/PerfilLogged/Recruiter/AgendaConfig.vue";

export default {
  components: {
    RecruiterUserInfo,
    AgendaConfig
  },
  setup() {
    const toast = useToast()

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
      role: '',
      hasErrors: false,
      isLoading: getGlobalLoading(),
      isCollapsed: {
        userInfo: false,
        personalInfo: false,
        professionalInfo: false,
        agendaConfig: false
      },
      agenda: []
    })

    async function handleAgendaSubmit() {
      toast.clear()
      if (state.hasErrors) {
        toast.error('Todos os campos obrigatórios devem estar preenchidos')
        setGlobalLoading(false)
      }
    }

    return {
      handleAgendaSubmit,
      state
    }
  }
}
</script>


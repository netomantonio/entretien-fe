<!--suppress ALL -->
<template>
  <manager-user-info/>
  <div class="mt-20">
  </div>
</template>
<script>
import {useToast} from 'vue-toastification'
import {getGlobalLoading, setGlobalLoading} from "@/store/global";
import services from "@/services";
import {reactive} from "vue";
import {useField} from "vee-validate";
import {
  validateCnpj,
  validateCpf,
  validateEmptyAndEmail,
  validateEmptyAndLength3,
  validateEmptyAndLength5
} from "@/utils/validators";
import ManagerUserInfo from "@/components/PerfilLogged/Manager/ManagerUserInfo.vue";

export default {
  components: {
    ManagerUserInfo: ManagerUserInfo,
  },
  setup() {
    const toast = useToast()

    const state = reactive({
      hasErrors: false,
      isLoading: getGlobalLoading(),
      isCollapsed: {
        userInfo: false,
        personalInfo: false,
        professionalInfo: false,
        agendaConfig: false
      },
    })
    return {
      state
    }
  }
}
</script>


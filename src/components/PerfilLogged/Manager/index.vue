<!--suppress ALL -->
<template>
  <manager-user-info/>
  <div class="mt-20">
  </div>
</template>
<script>
import {getGlobalLoading} from "@/store/global"
import {reactive} from "vue"
import ManagerUserInfo from "@/components/PerfilLogged/Manager/ManagerUserInfo.vue"

export default {
  components: {
    ManagerUserInfo: ManagerUserInfo,
  },
  setup() {

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


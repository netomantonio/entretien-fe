<!--suppress ALL -->
<template>
  <admin-user-info/>
  <div class="mt-20">
  </div>
</template>
<script>
import {getGlobalLoading} from "@/store/global"
import {reactive} from "vue"
import AdminUserInfo from "@/components/PerfilLogged/Admin/AdminUserInfo.vue";

export default {
  components: {
    AdminUserInfo,
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


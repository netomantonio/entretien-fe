<template>
  <interview-logged-manager v-if="roleUser === 'ROLE_MANAGER'"/>
</template>
<script>
import InterviewLoggedManager from "./Manager/index.vue";
export default {
  components: {
    InterviewLoggedManager
  },
  setup() {
    const role = window.localStorage.getItem('roles')
    return {
      roleUser: role,
    }
  }
}
</script>

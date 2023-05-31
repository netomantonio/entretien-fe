<template>
  <interview-logged-manager v-if="roleUser === 'ROLE_MANAGER'"/>
  <interview-logged-candidate v-if="roleUser === 'ROLE_CANDIDATE'"/>
</template>
<script>
import InterviewLoggedManager from "./Manager/index.vue";
import InterviewLoggedCandidate from "./Candidate/index.vue";
export default {
  components: {
    InterviewLoggedManager,
    InterviewLoggedCandidate
  },
  setup() {
    const role = window.localStorage.getItem('roles')
    return {
      roleUser: role,
    }
  }
}
</script>

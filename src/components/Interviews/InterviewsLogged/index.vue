<template>
  <interview-logged-manager v-if="roleUser === 'ROLE_MANAGER'"/>
  <interview-logged-candidate v-if="roleUser === 'ROLE_CANDIDATE'"/>
  <interview-logged-recruiter v-if="roleUser === 'ROLE_RECRUITER'"/>
  <interview-logged-admin v-if="roleUser === 'ROLE_ADMIN'"/>
</template>
<script>
import InterviewLoggedManager from "./Manager/index.vue";
import InterviewLoggedCandidate from "./Candidate/index.vue";
import InterviewLoggedRecruiter from "./Recruiter/index.vue";
import InterviewLoggedAdmin from "./Admin/index.vue";
export default {
  components: {
    InterviewLoggedManager,
    InterviewLoggedCandidate,
    InterviewLoggedRecruiter,
    InterviewLoggedAdmin
  },
  setup() {
    const role = window.localStorage.getItem('roles')
    return {
      roleUser: role,
    }
  }
}
</script>

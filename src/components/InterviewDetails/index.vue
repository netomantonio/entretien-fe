<template>
  <details-logged-admin v-if="roleUser === 'ROLE_ADMIN'"/>
  <details-logged-candidate v-if="roleUser === 'ROLE_CANDIDATE'"/>
   <details-logged-manager v-if="roleUser === 'ROLE_MANAGER'"/>
   <details-logged-recruiter v-if="roleUser === 'ROLE_RECRUITER'"/>
</template>
<script>
import DetailsLoggedAdmin from "@/components/InterviewDetails/Admin/index.vue";
import DetailsLoggedCandidate from "@/components/InterviewDetails/Candidate/index.vue";
import DetailsLoggedManager from "@/components/InterviewDetails/Manager/index.vue";
import DetailsLoggedRecruiter from "@/components/InterviewDetails/Recruiter/index.vue";

export default {
  components: {
    DetailsLoggedAdmin,
    DetailsLoggedCandidate,
    DetailsLoggedManager,
    DetailsLoggedRecruiter
  },
  setup() {
    const role = window.localStorage.getItem('roles')

    return {
      roleUser: role,
    }
  }
}
</script>

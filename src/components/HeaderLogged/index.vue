<template>
    <header-logged-admin v-if="roleUser === 'ROLE_ADMIN'"/>
    <header-logged-candidate v-if="roleUser === 'ROLE_CANDIDATE'"/>
    <header-logged-recruiter v-if="roleUser === 'ROLE_RECRUITER'"/>
    <header-logged-manager v-if="roleUser === 'ROLE_MANAGER'"/>
</template>
<script>
import HeaderLoggedAdmin from "@/components/HeaderLogged/Admin/index.vue";
import HeaderLoggedCandidate from "@/components/HeaderLogged/Candidate/index.vue";
import HeaderLoggedRecruiter from "@/components/HeaderLogged/Recruiter/index.vue";
import HeaderLoggedManager from "@/components/HeaderLogged/Manager/index.vue";

export default {
  components: {
    HeaderLoggedAdmin,
    HeaderLoggedCandidate,
    HeaderLoggedRecruiter,
    HeaderLoggedManager
  },
  setup() {
    const role = window.localStorage.getItem('roles')

    return {
      roleUser: role,
    }
  }
}
</script>

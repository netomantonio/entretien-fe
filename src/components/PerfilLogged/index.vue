<template>
  <div class="justify-center items-center w-screen">
    <profile-logged-recruiter v-if="roleUser === 'ROLE_RECRUITER'"/>
    <profile-logged-candidate v-if="roleUser === 'ROLE_CANDIDATE'"/>
  </div>
</template>
<script>
import ProfileLoggedRecruiter from '@/components/PerfilLogged/Recruiter/'
import ProfileLoggedCandidate from '@/components/PerfilLogged/Candidate/'

export default {
  components: {
    ProfileLoggedRecruiter,
    ProfileLoggedCandidate
  },
  setup() {
    const role = window.localStorage.getItem('roles')

    return {
      roleUser: role,
    }
  }
}
</script>

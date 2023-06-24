<template>
  <div class="justify-center items-center w-screen">
    <profile-logged-recruiter v-if="roleUser === 'ROLE_RECRUITER'"/>
    <profile-logged-candidate v-if="roleUser === 'ROLE_CANDIDATE'"/>
    <profile-logged-manager v-if="roleUser === 'ROLE_MANAGER'"/>
    <profile-logged-admin v-if="roleUser === 'ROLE_ADMIN'"/>
  </div>
</template>
<script>
import ProfileLoggedRecruiter from '@/components/PerfilLogged/Recruiter/'
import ProfileLoggedCandidate from '@/components/PerfilLogged/Candidate/'
import ProfileLoggedManager from '@/components/PerfilLogged/Manager/'
import ProfileLoggedAdmin from '@/components/PerfilLogged/Admin/'

export default {
  components: {
    ProfileLoggedRecruiter,
    ProfileLoggedCandidate,
    ProfileLoggedManager,
    ProfileLoggedAdmin
  },
  setup() {
    const role = window.localStorage.getItem('roles')

    return {
      roleUser: role,
    }
  }
}
</script>

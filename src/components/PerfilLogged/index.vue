<template>
  <div class="justify-center items-center w-screen">
    <profile-logged-recruiter v-if="roleUser === 'ROLE_RECRUITER'"/>
  </div>
</template>
<script>
import ProfileLoggedRecruiter from '@/components/PerfilLogged/Recruiter/'

export default {
  components: {
    ProfileLoggedRecruiter
  },
  setup() {
    const role = window.localStorage.getItem('roles')

    return {
      roleUser: role,
    }
  }
}
</script>

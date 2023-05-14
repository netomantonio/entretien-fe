<template>
  <div class="flex items-center justify-center max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <img alt="logo" class="w-full" src="@/assets/images/logo_white.png">
    </div>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {computed, reactive} from 'vue'
import {cleanCurrentUser} from '@/store/user'

export default {
  setup() {
    const state = reactive({
      isOpen: false
    })
    const router = useRouter()
    const logoutLabel = computed(() => {
      const email = window.localStorage.getItem('email')
      if (!!!email) {
        return '... sair'
      }
      return `${email} (sair)`
    })

    function handleLogout() {
      window.localStorage.removeItem('token')
      cleanCurrentUser()
      router.push({name: 'Home'})
    }

    return {
      state,
      router,
      logoutLabel,
      handleLogout
    }
  }
}
</script>


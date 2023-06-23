<template>
  <div class="flex items-center justify-between w-5/7 max-w-6xl mt-10 hidden sm:block">
    <div class="flex">
      <div class="flex-wrap">
        <ul class="flex list-none space-x-4">
          <li
            class="w-36 mr-20 mt-0 cursor-pointer focus:outline-none"
          >
            <img alt="logo" class="w-full" src="../../../../assets/images/logo_white.png">
          </li>
        </ul>
      </div>
      <div class="flex-wrap mt-3">
        <ul class="flex list-none space-x-4">
          <li
            class="font-bold text-white rounded-full cursor-pointer focus:outline-none"
            @click="() => router.push({ name: 'Dashboard'})">
            Dashboard
          </li>
          <li
            class="font-bold text-white rounded-full cursor-pointer focus:outline-none"
            @click="() => router.push({ name: 'User'})">
            Usuarios
          </li>
          <li
            class="font-bold text-white rounded-full cursor-pointer focus:outline-none"
            @click="() => router.push({ name: 'Interviews'})">
            Entrevistas
          </li>
          <li
            class="font-bold text-white rounded-full cursor-pointer focus:outline-none"
            @click="handleLogout">
            {{ logoutLabel }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {useRouter} from 'vue-router'
import {computed} from 'vue'
import {cleanCurrentUser} from '@/store/user'

export default {
  setup() {
    const router = useRouter()
    const logoutLabel = computed(() => {
      return '... sair'
    })

    function handleLogout() {
      window.localStorage.clear()
      cleanCurrentUser()
      router.push({name: 'Home'})
    }

    return {
      router,
      logoutLabel,
      handleLogout
    }
  }
}
</script>

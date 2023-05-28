<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10">
    <div class="w-28 lg:w-36">
      <img alt="logo" class="w-full" src="@/assets/images/logo_white.png">
    </div>
    <div class="flex">
      <ul class="flex list-none">
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'Dashboard'})">
          Dashboard
        </li>
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'User'})">
          Usuarios
        </li>
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'Interviews'})">
          Entrevistas
        </li>
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'Scheduling'})">
          Agendamentos
        </li>
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'Calendar'})">
          Calendário
        </li>
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'Profile'})">
          Perfil
        </li>
        <li
          class="px-6 py-2 mr-2 font-bold text-white rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: 'Config'})">
          Configurações
        </li>
        <li
          class="px-6 py-2 font-bold bg-white rounded-full cursor-pointer focus:outline-none"
          @click="handleLogout">
          {{ logoutLabel }}
        </li>
      </ul>
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
      const email = window.localStorage.getItem('email')
      if (!email) {
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
      router,
      logoutLabel,
      handleLogout
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-between w-4/5 max-w-6xl py-10 block sm:hidden">
    <div class="w-28 lg:w-36">
      <img alt="logo" class="w-full" src="@/assets/images/logo_white.png">
    </div>
    <div class="flex">
      <button
        class="menu-button lg:hidden px-4 py-2 mr-2 text-brand-main rounded-full bg-white focus:outline-none"
        @click="toggleMenu">
        Menu
      </button>
      <ul :class="menuClasses">
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.name"
          class="px-6 py-2 mr-2 font-bold text-brand-main rounded-full cursor-pointer focus:outline-none"
          @click="() => router.push({ name: menuItem.route })">
          {{ menuItem.label }}
        </li>
        <li
          class="px-6 py-2 font-bold bg-brand-main text-white rounded-full cursor-pointer focus:outline-none"
          @click="handleLogout">
          {{ logoutLabel }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { cleanCurrentUser } from '@/store/user'

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

    const menuOpen = ref(false)

    const menuItems = [
      { name: 'Interviews', route: 'Interviews', label: 'Entrevistas' },
      { name: 'Calendar', route: 'Calendar', label: 'Calendário' },
      { name: 'Profile', route: 'Profile', label: 'Perfil' }
    ]

    function handleLogout() {
      window.localStorage.removeItem('token')
      cleanCurrentUser()
      router.push({ name: 'Home' })
    }

    function toggleMenu() {
      menuOpen.value = !menuOpen.value
    }

    return {
      router,
      logoutLabel,
      menuItems,
      menuOpen,
      toggleMenu,
      handleLogout
    }
  },
  computed: {
    menuClasses() {
      return {
        'hidden': !this.menuOpen,
        'flex': this.menuOpen,
        'list-none': true,
        'flex-col': true,
        'absolute': true,
        'top-16': true,
        'right-0': true,
        'bg-white': true,
        'p-4': true,
        'rounded-md': true,
        'text-white': true,
        'z-10': true // Adiciona a classe z-10 para definir o z-index como 10
      }
    }
  }
}
</script>

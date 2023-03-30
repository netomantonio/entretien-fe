<template>
  <custom-header
    @login="handleLogin"
    @create-account="handleAccountCreate"
  />
  <contact/>
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">entretien © 2023</p>
  </div>
</template>

<script>
// import { onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import useModal from '@/hooks/useModal'

export default {
  components: {
    Contact,
    CustomHeader
  },
  setup() {
    // const router = useRouter()
    const modal = useModal()

    function handleLogin() {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleAccountCreate() {
      modal.open({
        component: 'ModalAccountCreate'
      })
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>

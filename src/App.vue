<template>
  <router-view/>
  <ModalFactory/>
</template>

<script>
import ModalFactory from '@/components/ModalFactory'
import { setCurrentUser } from '@/store/user'
import {useRoute, useRouter} from "vue-router";
import {watch} from "vue";
import services from "@/services";

export default {
  components: { ModalFactory },
  setup () {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')
        if (!token) {
          await router.push({name: 'Home'})
          return
        }
        const data = {
          id: window.localStorage.getItem('id'),
          email: window.localStorage.getItem('email'),
          role: window.localStorage.getItem('roles')
        }
        setCurrentUser(data)
      }
    })
  }
}

</script>

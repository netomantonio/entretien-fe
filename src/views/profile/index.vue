<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex pl-10 pr-10">
    <profile-logged/>
  </div>
</template>
<script>

import HeaderLogged from "@/components/HeaderLogged/index.vue"
import HeaderLoggedMobile from "@/components/HeaderLoggedMobile/index.vue"
import ProfileLogged from "@/components/PerfilLogged/index.vue"

export default {
  components: {
    HeaderLogged,
    ProfileLogged,
    HeaderLoggedMobile
  }
}

</script>

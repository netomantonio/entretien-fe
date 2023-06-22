<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex pl-10 pr-10">
    <resume/>
  </div>
</template>
<script>

import HeaderLogged from "@/components/HeaderLogged/index.vue"
import Resume from "@/components/Resume/index.vue"

export default {
  components: {
    HeaderLogged,
    Resume
  }
}

</script>

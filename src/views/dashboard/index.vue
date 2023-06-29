<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex pl-10 pr-10">
    <Dashboard/>
  </div>
</template>
<script>
import HeaderLogged from '../../components/HeaderLogged'
import Dashboard from '../../components/Dashboard/index.vue'

export default {
  components: {
    HeaderLogged,
    Dashboard
  }
}

</script>

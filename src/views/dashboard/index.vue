<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="container pl-10 pr-10">
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
<style scoped>
.container {
  /*display: flex;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}
</style>

<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex">
<!--    <Users-logged/>-->
  </div>
</template>

<script>
import HeaderLogged from "@/components/HeaderLogged/index.vue"
// import UsersLogged from "@/components/Users/index.vue";

export default {
  components: {
    // UsersLogged,
    HeaderLogged,
  }
}

</script>

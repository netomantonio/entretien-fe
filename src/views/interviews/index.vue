<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex">
    <Interviews-logged/>
  </div>
</template>

<script>
import HeaderLogged from "@/components/HeaderLogged/index.vue"
import InterviewsLogged from "@/components/Interviews/InterviewsLogged/index.vue";

export default {
  components: {
    InterviewsLogged,
    HeaderLogged,
  }
}

</script>

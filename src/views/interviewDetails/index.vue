<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
    <interview-details/>
</template>

<script>
import HeaderLogged from "@/components/HeaderLogged/index.vue"
import InterviewDetails from "@/components/InterviewDetails/index.vue";

export default {
  components: {
    InterviewDetails,
    HeaderLogged,
  }
}

</script>

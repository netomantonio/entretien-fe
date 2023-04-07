<template>
  <div class="flex">
    <FingerprintUser :state="state"/>
  </div>
  <div class="flex">
    <ContactUser :state="state"/>
    <ProfileChoice :state="state"/>
  </div>
  <div class="flex">
    <CreatePassword :state="state"/>
  </div>
</template>
<script>
import ContactUser from "@/components/ModalAccountCreate/User/desktop/ContactUser.vue";
import ProfileChoice from "@/components/ModalAccountCreate/User/desktop/ProfileChoice.vue";
import CreatePassword from "@/components/ModalAccountCreate/User/desktop/CreatePassword.vue";
import FingerprintUser from "@/components/ModalAccountCreate/User/desktop/FingerprintUser.vue";

export default {
  name: 'BasicUser',
  components: {FingerprintUser, CreatePassword, ProfileChoice, ContactUser},
  props: {
    state: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>

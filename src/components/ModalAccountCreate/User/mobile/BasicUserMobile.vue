<template>
  <div v-if="state.showSteps.fingerprint">
    <FingerprintUserMobile :state="state"/>
    <button
      :class="{
              'opacity-50': state.isLoading
            }"
      :disabled="state.isLoading"
      class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
      type="submit"
      @click="validaStepOne">
      <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
      <span v-else>Próximo</span>
    </button>
  </div>
  <div v-if="state.showSteps.contactAndPassword">
    <ContactUserMobile :state="state"/>
    <CreatePasswordMobile :state="state"/>
    <div class="flex">
      <div class="flex-wrap p-4">
        <button
          :class="{
              'opacity-50': state.isLoading
            }"
          :disabled="state.isLoading"
          class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
          type="submit"
          @click="state.showSteps.fingerprint = true; state.showSteps.contactAndPassword = false">
          <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
          <span v-else>voltar</span>
        </button>
      </div>
      <div class="flex-wrap p-4">
        <button
          :class="{
              'opacity-50': state.isLoading
            }"
          :disabled="state.isLoading"
          class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
          type="submit"
          @click="validaStepTwo">
          <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
          <span v-else>Próximo</span>
        </button>
      </div>
    </div>
  </div>
  <div v-if="state.showSteps.three">
    <ProfileChoiceMobile :state="state"/>
    <div class="flex">
      <div class="flex-wrap p-4">
        <button
          :class="{
              'opacity-50': state.isLoading
            }"
          :disabled="state.isLoading"
          class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
          type="submit"
          @click="state.showSteps.three = false; state.showSteps.contactAndPassword = true">
          <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
          <span v-else>voltar</span>
        </button>
      </div>
      <div class="flex-wrap p-4">
        <button
          :class="{
              'opacity-50': state.isLoading
            }"
          :disabled="state.isLoading"
          class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
          type="submit"
          @click="validaStepThree">
          <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
          <span v-else>Próximo</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon/index.vue'
import FingerprintUserMobile from "@/components/ModalAccountCreate/User/mobile/FingerprintUserMobile.vue";
import ContactUserMobile from "@/components/ModalAccountCreate/User/mobile/ContactUserMobile.vue";
import ProfileChoiceMobile from "@/components/ModalAccountCreate/User/mobile/ProfileChoiceMobile.vue";
import CreatePasswordMobile from "@/components/ModalAccountCreate/User/mobile/CreatePasswordMobile.vue";

export default {
  name: 'BasicUserMobile',
  components: {CreatePasswordMobile, ProfileChoiceMobile, ContactUserMobile, FingerprintUserMobile, Icon},
  props: {
    state: {},
    validaStepOne: {},
    validaStepThree: {},
    validaStepTwo: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>

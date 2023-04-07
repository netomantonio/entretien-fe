<template>
  <div class="w-1/3 p-4">
    <label class="block mt-2">
      <span class=" font-medium text-gray-800">Telefone</span>
      <input
        v-model="state.phone.value"
        v-mask="'(##)#.####-####'"
        :class="{
              'border-brand-danger': !!state.phone.errorMessage
            }"
        class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
        placeholder="12999999999"
        type="tel"
      >
      <span
        v-if="!!state.phone.errorMessage"
        class="block font-medium text-brand-danger"
      >
            {{ state.phone.errorMessage }}
          </span>
    </label>
  </div>
  <div class="w-1/3 p-4">
    <label class="block mt-2">
      <span class=" font-medium text-gray-800">E-mail</span>
      <input
        v-model="state.email.value"
        :class="{
              'border-brand-danger': !!state.email.errorMessage
            }"
        class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
        placeholder="xant.lee@gmail.com"
        type="email"
      >
      <span
        v-if="!!state.email.errorMessage"
        class="block font-medium text-brand-danger"
      >
            {{ state.email.errorMessage }}
          </span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'ContactUser',
  props: {
    state: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>

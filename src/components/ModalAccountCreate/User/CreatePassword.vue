<template>
  <div class="w-1/3 p-4">
    <label class="block mt-2">
      <span class=" font-medium text-gray-800">Senha</span>
      <input
          v-model="state.password.value"
          :class="{
              'border-brand-danger': !!state.password.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="Azx#32!sEW984@3.!@"
          type="password"
      >
      <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
      >
            {{ state.password.errorMessage }}
          </span>
    </label>
  </div>
  <div class="w-1/3 p-4">
    <label class="block mt-2">
      <span class=" font-medium text-gray-800">Confirmação</span>
      <input
          v-model="state.confirmPassword.value"
          :class="{
              'border-brand-danger': !!state.confirmPassword.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="Azx#32!sEW984@3.!@"
          type="password"
      >
      <span
          v-if="!!state.confirmPassword.errorMessage"
          class="block font-medium text-brand-danger"
      >
            {{ state.confirmPassword.errorMessage }}
          </span>
    </label>
  </div>
</template>
<script>
export default {
  name: 'CreatePassword',
  props: {
    state: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>
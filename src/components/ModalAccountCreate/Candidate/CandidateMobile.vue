<template>
  <div class="flex block sm:hidden">
    <div v-if="state.showSteps.final">
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">Rede Social</span>
        <input
          v-model="state.socialNetworking.value"
          :class="{
              'border-brand-danger': !!state.socialNetworking.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="https://www.linkedin.com/in/xantlee"
          type="url"
        >
        <span
          v-if="!!state.socialNetworking.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.socialNetworking.errorMessage }}
          </span>
      </label>
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">CEP</span>
        <input
          v-model="state.cep.value"
          v-mask="'#####-###'"
          :class="{
              'border-brand-danger': !!state.cep.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="78050-340"
          type="text"
        >
        <span
          v-if="!!state.cep.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.cep.errorMessage }}
          </span>
      </label>
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">Pessoa Com Deficiência</span>
        <label class="flex items-center mb-4">
          <input
            id="pcd-checkbox"
            v-model="state.pcd.value"
            :class="{
                'border-brand-danger': !!state.pcd.errorMessage
              }"
            class="w-4 h-4 mt-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            value="true">
          <label class="ml-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                 for="pcd-checkbox">Sim</label>
        </label>
      </label>
      <div class="flex">
        <div class="flex-wrap p-4">
          <button
            :class="{
              'opacity-50': state.isLoading
            }"
            :disabled="state.isLoading"
            class="px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
            type="submit"
            @click="state.showSteps.final = false; state.showSteps.three = true">
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
          >
            <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
            <span v-else>Criar</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon/index.vue'

export default {
  name: 'CandidateMobile',
  components: {Icon},
  props: {
    state: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>

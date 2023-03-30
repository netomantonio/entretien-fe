<template>
  <div class="flex block sm:hidden">
    <div v-if="state.showSteps.final">
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">CNPJ da Empresa</span>
        <input
          v-model="state.cnpj.value"
          v-mask="'##.###.###/####-##'"
          :class="{
              'border-brand-danger': !!state.cnpj.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="11222333000144"
          type="text"
        >
        <span
          v-if="!!state.cnpj.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.cnpj.errorMessage }}
          </span>
      </label>
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">Razão Social</span>
        <input
          v-model="state.companyName.value"
          :class="{
              'border-brand-danger': !!state.companyName.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="Xant Lee Consultoria em Tecnologia da Informacao LTDA"
          type="text"
        >
        <span
          v-if="!!state.companyName.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.companyName.errorMessage }}
          </span>
      </label>
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">Nome Fantasia</span>
        <input
          v-model="state.tradingName.value"
          :class="{
              'border-brand-danger': !!state.tradingName.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="Xant Lee Tech"
          type="text"
        >
        <span
          v-if="!!state.tradingName.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.tradingName.errorMessage }}
          </span>
      </label>
      <label class="block mt-2">
        <span class=" font-medium text-gray-800">Area de Atuação</span>
        <input
          v-model="state.operationArea.value"
          :class="{
              'border-brand-danger': !!state.operationArea.errorMessage
            }"
          class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
          placeholder="Tecnologia da Informação"
          type="text"
        >
        <span
          v-if="!!state.operationArea.errorMessage"
          class="block font-medium text-brand-danger"
        >
            {{ state.operationArea.errorMessage }}
          </span>
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
  name: 'ManagerMobile',
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

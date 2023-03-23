<template>
  <div class="flex hidden sm:block">
    <div class="flex flex-wrap">
      <div class="w-1/2 p-4">
        <label class="block mt-2">
          <span class=" font-medium text-gray-800">Registro Profissional</span>
          <input
              v-model="state.professionalRecord.value"
              :class="{
              'border-brand-danger': !!state.professionalRecord.errorMessage
            }"
              class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
              placeholder="*11111/CRA-MT *22222/CRP-AL"
              type="text"
          >
          <span
              v-if="!!state.professionalRecord.errorMessage"
              class="block font-medium text-brand-danger"
          >
            {{ state.professionalRecord.errorMessage }}
          </span>
        </label>
      </div>
      <div class="w-1/2 p-4">
        <label class="block mt-2">
          <span class=" font-medium text-gray-800">Apresentação</span>
          <input
              v-model="state.presentation.value"
              :class="{
              'border-brand-danger': !!state.presentation.errorMessage
            }"
              class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
              placeholder="Xant Lee Consultoria em Tecnologia da Informacao LTDA"
              type="text"
          >
          <span
              v-if="!!state.presentation.errorMessage"
              class="block font-medium text-brand-danger"
          >
            {{ state.presentation.errorMessage }}
          </span>
        </label>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-1/2 p-4">
        <label class="block mt-2">
          <span class=" font-medium text-gray-800">CNPJ</span>
          <input
              v-mask="'##.###.###/####-##'"
              v-model="state.cnpj.value"
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
      </div>
      <div class="w-1/2 p-4">
        <label class="block mt-2">
          <span class=" font-medium text-gray-800">Especialidades</span>
          <input
              v-model="state.specialities.value"
              :class="{
              'border-brand-danger': !!state.specialities.errorMessage
            }"
              class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
              placeholder="Tecnologia da Informação"
              type="text"
          >
          <span
              v-if="!!state.specialities.errorMessage"
              class="block font-medium text-brand-danger"
          >
            {{ state.specialities.errorMessage }}
          </span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecruiterDefault',
  props: {
    state: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>
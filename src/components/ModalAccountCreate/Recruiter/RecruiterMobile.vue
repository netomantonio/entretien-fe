<template>
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
</template>
<script>
import Icon from '@/components/Icon/index.vue'

export default {
    name: 'RecruiterMobile',
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
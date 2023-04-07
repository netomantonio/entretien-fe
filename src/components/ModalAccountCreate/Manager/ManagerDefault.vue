<template>
    <div class="flex flex-wrap">
        <div class="w-1/2 p-4">
            <label class="block mt-2">
                <span class=" font-medium text-gray-800">CNPJ da Empresa</span>
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
        </div>
    </div>
    <div class="flex flex-wrap">
        <div class="w-1/2 p-4">
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
        </div>
        <div class="w-1/2 p-4">
            <label class="block mt-2">
                <span class=" font-medium text-gray-800">Area de Atuação</span>
                <input
                        v-model="state.businessArea.value"
                        :class="{
              'border-brand-danger': !!state.businessArea.errorMessage
            }"
                        class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
                        placeholder="Tecnologia da Informação"
                        type="text"
                >
                <span
                        v-if="!!state.businessArea.errorMessage"
                        class="block font-medium text-brand-danger"
                >
            {{ state.businessArea.errorMessage }}
          </span>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ManagerDefault',
    props: {
        state: {}
    }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>
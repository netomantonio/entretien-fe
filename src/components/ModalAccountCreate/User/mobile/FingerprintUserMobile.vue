<template>
    <label class="block mt-2">
        <span class=" font-medium text-gray-800">Primeiro Nome</span>
        <input
                v-model="state.firstName.value"
                :class="{
              'border-brand-danger': !!state.firstName.errorMessage
            }"
                class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
                placeholder="Xant"
                type="text"
        >
        <span
                v-if="!!state.firstName.errorMessage"
                class="block font-medium text-brand-danger"
        >
            {{ state.firstName.errorMessage }}
          </span>
    </label><label class="block mt-2">
    <span class=" font-medium text-gray-800">Ultimo Nome</span>
    <input
            v-model="state.lastName.value"
            :class="{
              'border-brand-danger': !!state.lastName.errorMessage
            }"
            class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
            placeholder="Lee"
            type="text"
    >
    <span
            v-if="!!state.lastName.errorMessage"
            class="block font-medium text-brand-danger"
    >
            {{ state.lastName.errorMessage }}
          </span>
</label><label class="block mt-2">
    <span class=" font-medium text-gray-800">CPF</span>
    <input
            v-model="state.cpf.value"
            :class="{
              'border-brand-danger': !!state.cpf.errorMessage
            }"
            class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
            placeholder="11122233344"
            type="text"
    >
    <span
            v-if="!!state.cpf.errorMessage"
            class="block font-medium text-brand-danger"
    >
            {{ state.cpf.errorMessage }}
          </span>
</label>
</template>
<script>
export default {
    name: 'FingerprintUserMobile',
    props: {
        state: {}
    }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>
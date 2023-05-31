<template>
    <div v-if="state.mostrarFormulario" class="lg:ml-40 ml-10 flex">
        <form class="flex" @submit.prevent="handleInterviewCreate">
            <label class="flex-wrap">
                <input
                        v-model="state.cpf.value"
                        :class="{
            'border-brand-danger': !!state.cpf.errorMessage
          }"
                        class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
                        placeholder="CPF do candidato"
                        type="text"
                >
                <span
                        v-if="!!state.cpf.errorMessage"
                        class="block font-medium text-brand-danger"
                >
          {{ state.cpf.errorMessage }}
        </span>
            </label>
            <label class="flex-wrap ml-4">
                <input
                        v-model="state.observation.value"
                        :class="{
            'border-brand-danger': !!state.observation.errorMessage
          }"
                        class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded"
                        placeholder="Observação"
                        type="text"
                >
                <span
                        v-if="!!state.observation.errorMessage"
                        class="block font-medium text-brand-danger"
                >
          {{ state.observation.errorMessage }}
        </span>
            </label>
            <div class="flex-wrap ml-4">
                <button
                        :class="{'opacity-50': state.isLoading}"
                        :disabled="state.isLoading"
                        class="bg-brand-main px-4 py-2 rounded-md text-white font-semi-bold tracking-wide cursor-pointer"
                        type="submit"
                        @click="valideCpf"
                >
                    <icon
                            v-if="state.isLoading"
                            class="animate-spin"
                            name="loading"
                    ></icon>
                    <span v-else>Adicionar</span>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import Icon from "@/components/Icon/index.vue"

export default {
    name: 'create-new-interview',
    components: {Icon},
    props: {
        handleInterviewCreate: {},
        state: {},
        valideCpf: {}
    }
}
</script>
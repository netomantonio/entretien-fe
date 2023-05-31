<template>
  <form @submit.prevent="handleUpdateInfo">
    <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-medium">Informações de usuário</h2>
        <button
          class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          @click="state.isCollapsed.userInfo = !state.isCollapsed.userInfo"
        >
          <svg
            :class="{'rotate-90': state.isCollapsed.userInfo}"
            class="h-6 w-6 transition-transform duration-150 transform"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
      <div v-if="!state.isCollapsed.userInfo">
        <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">Informações pessoais</h2>
            <button
              class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              @click="state.isCollapsed.personalInfo = !state.isCollapsed.personalInfo"
            >
              <svg
                :class="{'rotate-90': state.isCollapsed.personalInfo}"
                class="h-6 w-6 transition-transform duration-150 transform"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
          <div v-if="!state.isCollapsed.personalInfo">
            <div id="basic-user">
              <div class="mb-4 px-2 mt-10 w-full">
                <input id="first-name"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="Nome..." type="text"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <input id="second-name"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="Sobrenome..." type="text"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="birth-day">Aniversario:</label>
                <input id="birth-day"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       type="date"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="tel">Celular:</label>
                <input id="tel" v-mask="'(##)#.####-####'" class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       name="phone"
                       placeholder="12999999999" type="tel">
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <input id="email"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="seuemail@seuprovedor.com" type="email"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="password">Senha:</label>
                <input id="password"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="Azx#32!sEW984@3.!@" type="password"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="confirm-password">Confirmar senha:</label>
                <input id="confirm-password"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="Azx#32!sEW984@3.!@" type="password"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="cpf">CPF:</label>
                <input id="cpf"
                       v-mask="'###.###.###-##'"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="11122233344" type="text"/>
              </div>
            </div>
          </div>
        </div>
        <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">Informações profissionais</h2>
            <button
              class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
              @click="state.isCollapsed.prefessionalInfo = !state.isCollapsed.prefessionalInfo"
            >
              <svg
                :class="{'rotate-90': state.isCollapsed.prefessionalInfo}"
                class="h-6 w-6 transition-transform duration-150 transform"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
          </div>
          <div v-if="!state.isCollapsed.prefessionalInfo">
            <div id="recruiter-user">
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="professionalRecord">Registro
                  Profissional:
                </label>
                <input id="professionalRecord"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="6587 CRP/MT" type="text"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="presentation">Apresentação:</label>
                <input id="presentation"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="Faça sua apresentação profissional aqui" type="text"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="cnpj">CNPJ (Opcional):</label>
                <input id="cnpj"
                       v-mask="'##.###.###/####-##'"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="02631532000152" type="text"/>
              </div>
              <div class="mb-4 px-2 mt-10 w-full">
                <label class="block mb-1 text-sm" for="specialities">CNPJ (Opcional):</label>
                <input id="specialities"
                       class="w-full border px-4 py-2 rounded-full focus:border-blue-500 focus:shadow-outline outline-none"
                       placeholder="Escreva aqui suas especialidades separadas por virgula Ex: educação corporativa, psicopedagogia empresarial, psicologia organizacional "
                       type="text"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        v-if="!state.isCollapsed.userInfo"
        :class="{
              'opacity-50': state.isLoading
            }"
        :disabled="state.isLoading"
        class="hidden sm:block px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
        type="submit"
      >
        <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
        <span v-else>Salvar</span>
      </button>
    </div>
  </form>
</template>
<script>
import Icon from "@/components/Icon/index.vue"

export default {
  name: 'recruiter-user-info',
  components: {Icon},
  props: {
    handleUpdateInfo: {},
    state: {}
  }
}
</script>

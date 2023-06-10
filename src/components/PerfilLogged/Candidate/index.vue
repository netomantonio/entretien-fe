<template>
  <div class="p-5" v-if="!!state.user">
    <form class="p-5" @submit.prevent="updateUserData(state.user)">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="font-semibold leading-7 text-gray-900">Pefil</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Procure manter suas informações sempre atualizadas.</p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label for="username" class="text-sm font-medium leading-6 text-gray-900">Nome de usuário</label>
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-md">
                  <input type="text" name="username" id="username" v-model="state.user.username" disabled
                         class="block flex-1 border-0 sm:text-sm sm:leading-6"
                         placeholder="username">
                </div>
              </div>
            </div>
            <div class="sm:col-span-3">
              <label for="username" class="text-sm font-medium leading-6 text-gray-900">Redes Sociais</label>
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-md">
                  <input type="text" name="username" id="username" v-model="state.user.socialNetworking"
                         class="block flex-1 border-0 sm:text-sm sm:leading-6"
                         placeholder="username">
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <label for="photo" class="text-sm font-medium leading-6 text-gray-900">Foto de Perfil</label>
              <div class="mt-2 flex items-center gap-x-3">
                <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"/>
                </svg>
                <button type="button"
                        class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Alterar
                </button>
              </div>
            </div>
            <div class="space-y-10">
              <fieldset>
                <legend class="text-sm font-semibold leading-6 text-gray-900">PCD</legend>
                <div class="mt-6 space-y-6">
                  <div class="relative flex gap-x-3">
                    <div class="flex h-6 items-center">
                      <input id="comments" name="comments" type="checkbox" v-model="state.user.pcd"
                             class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    </div>
                    <div class="text-sm leading-6">
                      <label for="comments" class="font-medium text-gray-900">Pessoa com necessidades especiais?</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Informações pessoais</h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
              <div class="mt-2">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                       v-model="state.user.firstName"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Sobrenome</label>
              <div class="mt-2">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                       v-model="state.user.lastName"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Data de
                nascimento</label>
              <div class="mt-2">
                <input type="date" name="last-name" id="last-name" autocomplete="family-name"
                       v-model="state.user.birthDay"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Endereço de Email</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" v-model="state.user.email"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Telefone</label>
              <div class="mt-2">
                <input id="email" name="phone" type="text" v-model="state.user.phone" v-mask="'###-###-###'"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Endereço</label>
              <div class="mt-2">
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" disabled
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Cidade</label>
              <div class="mt-2">
                <input type="text" name="city" id="city" autocomplete="address-level2" disabled
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Estado</label>
              <div class="mt-2">
                <input type="text" name="region" id="region" autocomplete="address-level1" disabled
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">CEP</label>
              <div class="mt-2">
                <input type="text" name="cep" id="postal-code" autocomplete="postal-code" :value="state.user.cep"
                       v-mask="'#####-###'"
                       class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Notificações</h2>
          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900">Por Email</legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="comments" name="comments" type="checkbox"
                           class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-gray-900">Lembrete de entrevistas agendadas</label>
                    <p class="text-gray-500">Receba um email um dia antes para se lembrar da sua próxima entrevista
                      agendada.</p>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input id="candidates" name="candidates" type="checkbox"
                           class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                  </div>
                  <div class="text-sm leading-6">
                    <label for="candidates" class="font-medium text-gray-900">Avisos de novas entrevistas
                      solicitadas</label>
                    <p class="text-gray-500">Seja notificado assim que um gestor disponibilizar uma entrevista para
                      você.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Descartar alterações</button>
        <button type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Savar alterações
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import services from "@/services";
import {useToast} from "vue-toastification";
import {reactive} from 'vue'

const toast = useToast()
const state = reactive({
  user: null
})

async function loadUserData() {
  const {data, errors} = await services.users.getMe()
  if (errors) {
    toast.error('Ocorreu um erro ao carregar os seus dados.')
  }
  state.user = data
}

async function updateUserData(user) {
  toast.clear()
  state.isLoading = true
  const {data, errors} = await services.users.updateCandidate(
    {
      username: state.user.username,
      firstName: state.user.firstName,
      lastName: state.user.lastName,
      phone: state.user.phone.replaceAll('-', ''),
      email: state.user.email,
      birthDay: state.user.birthDay,
      socialNetworking: state.user.socialNetworking,
      pcd: !!state.user.pcd,
      cep: state.user.cep
    }
  )

  if (errors) {
    toast.error('Ocorreu um erro ao atualizar seus dados.')
  }

  if (data) {
    toast.success('Dados atualizados')
    state.isLoading = false
    return
  }
  state.isLoading = false
  state.user = data
}

loadUserData()
</script>

<style scoped>
input {
  padding-top: 0.375rem; /* 6px */
  padding-bottom: 0.375rem; /* 6px */
  padding-left: 0.5rem; /* 8px */
  padding-right: 0.5rem; /* 8px */
}
</style>

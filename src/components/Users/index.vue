<template>
  <div class="flex w-full p-5">
    <div class="p-8 rounded-md w-full">
      <h2 class="text-gray-600 font-semi-bold">Usuários</h2>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow px-2 py-1 rounded-lg overflow-hidden">
          <table v-if="state.users" class="min-w-full leading-normal">
            <thead>
            <tr>
              <ListHeader v-for="item in headerList" :key="item" :customStyle="item.style" :title="item.name"/>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in state.users" v-bind:key="user.id">
              <UserListItem :user="user"/>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import UserListItem from "@/components/Users/UserListItem.vue"
import services from '@/services'
import ListHeader from "@/components/Users/ListHeader.vue"

const headerList = [
  {name: "Nome", style: null},
  {name: "", style: null},
  {name: "Criado em", style: null},
  {name: "Atualizado em", style: null},
  {name: "Email", style: null},
  {name: "Telefone", style: null},
  {name: "CPF", style: null},
]

const state = reactive({
  users: {}
})

async function loadUsers() {
  const {data} = await services.users.getUsers()
  state.users = data
}

loadUsers()
</script>

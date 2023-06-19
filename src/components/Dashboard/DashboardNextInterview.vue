<template>
  <div class='flex-column'>
    <div class="flex grow-0">
      <font-awesome-icon icon="circle-exclamation" class="text-gray-600 text-xl mr-2 mt-1"/>
      <h5 v-if="state.nextInterview" class="text-gray-600 text-lg">Próxima entrevista</h5>
      <h5 v-else class="text-gray-600 text-lg">Fique atento!</h5>
    </div>
    <div v-if="state.nextInterview" class="flex">
      <div>
        <span class="text-9xl font-bold">{{state.nextInterview.startingAt.split("T")[0].slice(5).replaceAll("-", "/")}}</span>
      </div>
      <div class="flex-col align-self-center mt-3 ml-5">
        <div class="self-end ">
          <span class="text-sm">Horário:</span>
        </div>
        <div class="self-end">
          <span class="text-3xl"> {{ state.nextInterview.startingAt.split("T")[1].slice(0, 5) }} </span>
        </div>
      </div>
    </div>
    <div v-if="state.resumeLastInterview" class="mt-3 text-gray-600 flex">
      <span>Última atualização do cúrriculo em </span><span class="font-bold ml-1">{{new Date(state.resumeLastInterview).toLocaleDateString() }}</span>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import services from '@/services'
import {reactive} from "vue";

const state = reactive({
  nextInterview: null,
  lastUpdate: null
})

function handleEvents(events) {
  this.currentEvents = events
}

async function getCandidateNextInterview(){
  const {
    data,
    errors
  } = await services.interview.getCandidateNextInterview()

  state.nextInterview = data
}

async function getCandidateResumeLastUpdate(){
  const {
    data,
    errors
  } = await services.users.getCandidateResumeLastUpdate()

  state.resumeLastInterview = data
}

getCandidateResumeLastUpdate()
getCandidateNextInterview()

</script>
<style>

</style>

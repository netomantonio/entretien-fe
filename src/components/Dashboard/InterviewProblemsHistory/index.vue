<template>
  <div class="justify-center w-full mr-5 mt-5 pr-5">
    <div class="flex m-0 p-0">
      <font-awesome-icon icon="clock-rotate-left" class="text-gray-600 text-xl mr-2 mt-1"/>
      <h5 class="text-gray-600 text-lg">Histórico</h5>
      <div class="flex ml-3 pt-1 text-sm">
        <span class="mr-1 text-gray-600">Legenda:</span>
        <div class="mt-1 mx-2 box bg-tomato-600"></div>
        Não ocorreu
        <div class="mt-1 mx-2 box bg-goldenrod-400"></div>
        Recrutador ausente
        <div class="mt-1 mx-2 box bg-chocolate-500"></div>
        Candidato ausente
      </div>
    </div>
    <div class="rounded-md w-full">
      <div>
        <div class="sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
              <tr class="border-b-2 border-gray-200">
                <th
                  class="px-3 py-3  bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Empresa
                </th>
                <th
                  class="px-3 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Recrutador
                </th>
                <th
                  class="px-3 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Candidato
                </th>
                <th
                  class="px-3 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Data programada
                </th>
                <th
                  class="px-3 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                </th>
              </tr>
              </thead>
              <tbody>
                <InterviewProblemListItem v-for="interview in props.interviewHistory" v-bind:key="interview.id" :user="interview.candidate" :interview="interview"></InterviewProblemListItem>
              </tbody>
            </table>
            <div v-if="props.interviewHistory.length === 0" class="flex-1 text-gray-600 py-5 text-center">
              Não existem registros.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import InterviewProblemListItem from "@/components/Dashboard/InterviewProblemsHistory/InterviewProblemListItem.vue";

const props = defineProps({
  interviewHistory: {},
  user: String
})

</script>
<style>
.box {
  height: 15px;
  width: 15px;
  margin-bottom: 15px;
}
</style>

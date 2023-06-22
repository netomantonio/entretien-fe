<template>
  <div class="justify-center w-full mr-5 pr-5">
    <div class="flex m-0 p-0">
      <font-awesome-icon icon="clock-rotate-left" class="text-gray-600 text-xl mr-2 mt-1"/>
      <h5 class="text-gray-600 text-lg">Histórico</h5>
    </div>
    <div class="rounded-md w-full">
      <div>
        <div class="sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
              <tr class="border-b-2 border-gray-200">
                <th
                  class="px-5 py-3  bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Empresa
                </th>
                <th
                  class="border-b-2 border-gray-200 bg-gray-100">
                </th>
                <th
                  class="px-5 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  {{ props.user }}
                </th>
                <th
                  class="px-5 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Data de realização
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="interview in props.interviewHistory" v-bind:key="interview.id">
                <InterviewListItem :user="interview.candidate" :interview="interview"></InterviewListItem>
              </tr>
              </tbody>
            </table>
            <div v-if="props.interviewHistory.length === 0" class="flex-1 text-gray-600 py-5 text-center">
              {{ props.nothingToShowMessage }}
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
import InterviewListItem from "@/components/Dashboard/InterviewHistory/InterviewListItem.vue";

const props = defineProps({
  interviewHistory: {},
  user: String,
  nothingToShowMessage: String
})

</script>

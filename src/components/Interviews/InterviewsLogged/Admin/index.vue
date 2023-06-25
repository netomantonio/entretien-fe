<template>
  <div class="flex justify-center w-full p-5">
    <br/>
    <!--  List Container  -->
    <div class="p-8 rounded-md w-full">
      <!--   Header   -->
      <div class="flex items-center justify-between pb-6 w-full">
        <div class="flex-1">
          <div>
            <h2 class="text-gray-600 font-semibold">Entrevistas</h2>
          </div>
        </div>
      </div>
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
              <tr>
                <th v-for="title in headerTitles" v-bind:key="title"
                    class="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {{ title }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="interview in state.interviews" v-bind:key="interview.id">
                <InterviewListItem :interview="interview"/>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {reactive} from "vue";
import services from "@/services";
import InterviewListItem from "@/components/Interviews/InterviewsLogged/Admin/InterviewListItem.vue";

const state = reactive({
  interviews: null
})

const headerTitles = ["Id", "Data agendada", "Status", "Empresa", "Candidato", "Recrutador", "Pontuação"]

async function loadInterview() {
  const {data} = await services.interview.getInterviews()
  state.interviews = data
}

loadInterview()
</script>

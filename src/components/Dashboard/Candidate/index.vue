<template>
  <div class="z-10 top-0 h-16 bg-white py-3 2xl:container">
    <DashboardHeader title="Painel do Candidato"/>
    <div class="px-6 pt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <div class="md:col-span-2 lg:col-span-1">
        <DashboardNextInterview v-if="state.data.nextInterview" :nextInterview="state.data.nextInterview"
                                :lastUpdate="state.data.lastUpdate"
                                text="Última atualização do seu currículo em: "/>
      </div>
      <div class="hidden md:col-span-2 lg:col-span-1">
      </div>
    </div>
    <div class="md:mt-5 px-6 pt-6 grid lg:gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div class="md:col-span-2 lg:col-span-2 mr-5">
        <InterviewHistory v-if="state.data.interviewsHistory" :user="'Candidato'"
                          :interviewHistory="state.data.interviewsHistory"
                          nothing-to-show-message="Você ainda não concluiu nenhuma entrevista."/>
      </div>
      <div class="md:col-span-1 lg:col-span-1">
        <DashboardCandidateNumbersCard v-if="state.data.interviewsStats" :interviewsStats="state.data.interviewsStats"/>
      </div>
    </div>
  </div>
  <div class="mt-20">
  </div>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardNextInterview from "@/components/Dashboard/DashboardNextInterview.vue";
import DashboardCandidateNumbersCard from "@/components/Dashboard/Candidate/DashboardCandidateNumbersCard.vue";
import InterviewHistory from "@/components/Dashboard/InterviewHistory/index.vue";
import {reactive} from "vue";
import services from "@/services";

const state = reactive({
  data: {}
})
const date = new Date()
const from = (date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + "01")
const to = (date.getFullYear() + "-" + String(date.getMonth() + 2).padStart(2, '0') + "-" + "01")

async function getRecruiterDashboard() {
  const {
    data
  } = await services.users.getCandidateDashboard(from, to)
  state.data = data
}

function getThisMonthCandidateInterviews(info, successCallback, failureCallback) {
  services.users.getCandidateDashboard(
    from,
    to
  ).then(({data, errors}) => {
    if (errors) {
      failureCallback(errors)
    } else {
      successCallback(
        data.map(value => ({
          id: value.id,
          start: String(value.startingAt).split("T")[0],
          title: value.manager.companyName
        }))
      )
    }
  })
}

getRecruiterDashboard()
</script>

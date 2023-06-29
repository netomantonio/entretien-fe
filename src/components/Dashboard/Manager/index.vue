<template>
  <div class="z-10 top-0 h-16 bg-white py-3 2xl:container">
        <DashboardHeader title="Painel do Gerente"/>
    <div class="px-6 pt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div class="md:col-span-2 lg:col-span-2">
        <DashboardCalendar v-if="state.data.thisMonthScheduledInterviews"
                           :interviews="state.data.thisMonthScheduledInterviews"
                           :getEvents="getThisMonthCompanyInterviews"/>
      </div>
      <div class="md:col-span-1 lg:col-span-1 mt-5">
        <DashboardManagerNumbersCard v-if="state.data.interviewsStats" :interviewsStats="state.data.interviewsStats"/>
      </div>
    </div>
    <div class="md:mt-5 px-6 pt-6 grid lg:gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div class="md:col-span-3 lg:col-span-3 mr-5">
        <InterviewHistory v-if="state.data.interviewsHistory" :user="'Candidato'"
                          :interviewHistory="state.data.interviewsHistory"
                          nothing-to-show-message="Nenhuma entrevista realizada."/>
      </div>
      <div class="md:col-span-1 lg:col-span-1">
      </div>
    </div>
  </div>
</template>
<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import {reactive} from "vue";
import services from "@/services";
import DashboardManagerNumbersCard from "@/components/Dashboard/Manager/DashboardManagerNumbersCard.vue";
import DashboardCalendar from "@/components/Dashboard/DashboardCalendar/DashboardCalendar.vue";
import InterviewHistory from "@/components/Dashboard/InterviewHistory/index.vue";

const state = reactive({
  data: {}
})
const date = new Date()
const from = (date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + "01")
const to = (date.getFullYear() + "-" + String(date.getMonth() + 2).padStart(2, '0') + "-" + "01")

async function getManagerDashboard() {
  const {
    data
  } = await services.users.getManagerDashboard(from, to)
  state.data = data
}

function getThisMonthCompanyInterviews(info, successCallback, failureCallback) {
  services.interview.getInterviewsWithinPeriodByManager(
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

getManagerDashboard()
</script>


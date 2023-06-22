<template>
  <div class="z-10 top-0 h-16 bg-white py-3 2xl:container">
    <DashboardHeader title="Painel do Administrador"/>
    </div>
    <div class="md:mt-5 px-6 pt-6 grid lg:gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div class="md:col-span-2 lg:col-span-2 mr-5">
        <div class="md:col-span-2 lg:col-span-1">
          <DashboardCalendar v-if="state.data.thisMonthScheduledInterviews"
                             :interviews="state.data.thisMonthScheduledInterviews"
                             :getEvents="getThisMonthInterviews"/>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
        <InterviewProblemHistory v-if="state.data.interviewProblemHistory" :user="'Candidato'"
                          :interviewHistory="state.data.interviewProblemHistory"/>
        </div>
      </div>
      <div class="md:col-span-1 lg:col-span-1">
        <DashboardAdminNumbersCard v-if="state.data.interviewsStats" :interviewsStats="state.data.interviewsStats"/>
      </div>
    </div>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardAdminNumbersCard from "@/components/Dashboard/Admin/DashboardAdminNumbersCard.vue";
import InterviewProblemHistory from "@/components/Dashboard/InterviewProblemsHistory/index.vue";
import {reactive} from "vue";
import services from "@/services";
import DashboardCalendar from "@/components/Dashboard/DashboardCalendar/DashboardCalendar.vue";

const state = reactive({
  data: {}
})
const date = new Date()
const from = (date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + "01")
const to = (date.getFullYear() + "-" + String(date.getMonth() + 2).padStart(2, '0') + "-" + "01")

async function getAdminDashboard() {
  const {
    data,
    errors
  } = await services.users.getAdminDashboard(from, to)
  state.data = data
}

function getThisMonthInterviews(info, successCallback, failureCallback) {
  services.interview.getThisMonth(
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

getAdminDashboard()
</script>

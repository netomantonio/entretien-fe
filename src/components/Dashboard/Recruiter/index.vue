<template>
  <div class="justify-center items-center w-screen">
  <div class="p-5">
    <div class="p-11 mb-10 z-10 top-0 h-16 bg-white py-3 2xl:container">
      <DashboardHeader title="Painel do Recrutador"/>
      <div class="px-6 pt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div class="md:col-span-2 lg:col-span-1">
          <DashboardNextInterview v-if="state.data.nextInterview" :lastUpdate="state.data.lastUpdate"
                                  :nextInterview="state.data.nextInterview"
                                  :text="'Última atualização dos seus horários em: '"/>
        </div>
        <div class="md:col-span-2 lg:col-span-1">
          <DashboardCalendar v-if="state.data.thisMonthScheduledInterviews"
                             :getEvents="getThisMonthRecruiterInterviews"
                             :interviews="state.data.thisMonthScheduledInterviews"/>
        </div>
      </div>
      <div class="md:mt-5 px-6 pt-6 grid lg:gap-6 md:grid-cols-3 lg:grid-cols-3">
        <div class="md:col-span-2 lg:col-span-2 mr-5">
          <InterviewHistory v-if="state.data.interviewsHistory" :interviewHistory="state.data.interviewsHistory"
                            :user="'Candidato'"
                            nothing-to-show-message="Você ainda não concluiu nenhuma entrevista."/>
        </div>
        <div class="md:col-span-1 lg:col-span-1">
          <DashboardRecruiterNumbersCard v-if="state.data.interviewsStats"
                                         :interviewsStats="state.data.interviewsStats"/>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="mb-20">
  </div>
</template>
<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardNextInterview from "@/components/Dashboard/DashboardNextInterview.vue";
import {reactive} from "vue";
import services from "@/services";
import DashboardRecruiterNumbersCard from "@/components/Dashboard/Recruiter/DashboardRecruiterNumbersCard.vue";
import DashboardCalendar from "@/components/Dashboard/DashboardCalendar/DashboardCalendar.vue";
import InterviewHistory from "@/components/Dashboard/InterviewHistory/index.vue";

const state = reactive({
  data: {}
})
const date = new Date()
const from = (date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + "01")
const to = (date.getFullYear() + "-" + String(date.getMonth() + 2).padStart(2, '0') + "-" + "01")

async function getRecruiterDashboard() {
  const {
    data
  } = await services.users.getRecruiterDashboard(from, to)
  state.data = data
}

function getThisMonthRecruiterInterviews(info, successCallback, failureCallback) {
  services.interview.getInterviewsWithinPeriodByRecruiter(
    from,
    to
  ).then(({data, errors}) => {
    if (errors) {
      failureCallback(errors)
    } else {
      // state.interviewsData.interviews = data
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


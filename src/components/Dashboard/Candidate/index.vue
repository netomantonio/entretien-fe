<template>
  <div class="z-10 top-0 h-16 bg-white py-3 2xl:container">
    <DashboardHeader/>
    <div class="px-6 pt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <div class="md:col-span-2 lg:col-span-1">
        <DashboardNextInterview :data="state.nextInterviewData"/>
      </div>
      <div class="hidden md:col-span-2 lg:col-span-1">
        <DashboardCalendar v-if="state.interviews" :data="state.interviews"/>
      </div>
    </div>
    <div class="md:mt-5 px-6 pt-6 grid lg:gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div class="md:col-span-2 lg:col-span-2 mr-5">
        <InterviewHistory v-if="state.interviewHistory" :data="state.interviewHistory"/>
      </div>
      <div class="md:col-span-1 lg:col-span-1">
        <DashboardCandidateNumbersCard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardNextInterview from "@/components/Dashboard/DashboardNextInterview.vue";
import DashboardCandidateNumbersCard from "@/components/Dashboard/DashboardStats/DashboardCandidateNumbersCard.vue";
import DashboardCalendar from "@/components/Dashboard/DashboardCalendar/DashboardCalendar.vue";
import InterviewHistory from "@/components/Dashboard/InterviewHistory/index.vue";
import {reactive} from "vue";
import services from "@/services";

const state = reactive({
  nextInterviewData: {
    nextInterview: null,
    lastUpdate: null
  },
  interviews: {
    interviews: null,
    getThisMonthInterviews: getThisMonthCandidateInterviews
  },
  interviewHistory: {
    interviews: null
  }
})

async function getCandidateNextInterview(){
  const {
    data,
    errors
  } = await services.interview.getCandidateNextInterview()
  state.nextInterviewData.nextInterview = data
}

async function getCandidateResumeLastUpdate(){
  const {
    data,
    errors
  } = await services.users.getCandidateResumeLastUpdate()

  state.nextInterviewData.resumeLastInterview = data
}

function getThisMonthCandidateInterviews(info, successCallback, failureCallback) {
  const date = new Date()
  services.interview.getInterviewsWithinPeriodByCandidate(
    (date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + "01"),
    (date.getFullYear() + "-" + String(date.getMonth() + 2).padStart(2, '0') + "-" + "01")
  ).then(({data, errors}) => {
    if (errors) {
      failureCallback(errors)
    } else {
      state.interviews = data
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

async function loadInterviewHistory() {
  const {data} = await services.interview.getInterviewsByCandidate()
  state.interviewHistory = data.interviews.filter(interview => interview.status === "CONCLUDED")
}

getCandidateResumeLastUpdate()
getCandidateNextInterview()
loadInterviewHistory()



</script>

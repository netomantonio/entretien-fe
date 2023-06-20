<template>
  <div>
    <DashboardTwoValuesMiniCard v-if="state.numbers1" :data="state.numbers1"/>
    <DashboardOneValueMiniCard v-if="state.numbers2" :data="state.numbers2"/>
    <DashboardOneValueMiniCard v-if="state.numbers3" :data="state.numbers3"/>
  </div>
</template>
<script setup>
import DashboardTwoValuesMiniCard from "@/components/Dashboard/DashboardStats/DashboardTwoValuesMiniCard.vue";
import {reactive} from "vue";
import services from "@/services";
import DashboardOneValueMiniCard from "@/components/Dashboard/DashboardStats/DashboardOneValueMiniCard.vue";

const state = reactive({
  numbers1: {
    title: "Entrevistas",
    icon: "list-check",
    qtd: {
      toBeScheduleInterviewsQtd: 0,
      scheduleInterviewsQtd: 0
    },
    values: {
      firstValue: "Pendentes",
      secondValue: "Agendadas"
    }
  },
  numbers2: {
    title: "Entrevistas realizadas",
    icon: "user-check",
    qtd: 0,
    value: ""
  },
  numbers3: {
    title: "Total de entrevistas",
    icon: "clipboard-list",
    qtd: 0,
    value: ""
  },
})

async function getCandidateNumbers() {
  const {data, errors} = await services.interview.getCandidateInterviewStats()
  state.numbers1.qtd.toBeScheduleInterviewsQtd = data.toBeScheduleInterviewsQtd
  state.numbers1.qtd.scheduleInterviewsQtd = data.scheduleInterviewsQtd
  state.numbers2.qtd = data.totalConcludeInterviewsQtd
  state.numbers3.qtd = data.totalInterviewsQtd
}

getCandidateNumbers()
</script>

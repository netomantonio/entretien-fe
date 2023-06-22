<template>
  <div>
    <DashboardTwoValuesMiniCard
      title="Entrevistas agendadas"
      :icon="'list-check'"
      first-value-name="Pendentes"
      :first-value="props.interviewsStats.toBeScheduled"
      second-value-name="Agendadas"
      :second-value="props.interviewsStats.scheduled"
    />
    <DashboardOneValueMiniCard
      title="Entrevistas realizadas"
      :icon="'user-check'"
      :value="props.interviewsStats.completed"
      :value-name="''"
    />
    <DashboardOneValueMiniCard
      title="Total de entrevistas"
      :icon="'clipboard-list'"
      :value="props.interviewsStats.total"
      :value-name="''"
    />
  </div>
</template>
<script setup>
import DashboardOneValueMiniCard from "@/components/Dashboard/DashboardStats/DashboardOneValueMiniCard.vue";
import DashboardTwoValuesMiniCard from "@/components/Dashboard/DashboardStats/DashboardTwoValuesMiniCard.vue";

const props = defineProps({
  interviewsStats: {}
})
</script>

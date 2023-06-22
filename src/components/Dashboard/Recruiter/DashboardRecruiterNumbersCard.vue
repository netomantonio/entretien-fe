<template>
  <div>
    <DashboardOneValueMiniCard
      title="Entrevistas agendadas"
      :icon="'list-check'"
      :value="props.interviewsStats.scheduled"
      :value-name="''"
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

const props = defineProps({
  interviewsStats: {}
})
</script>

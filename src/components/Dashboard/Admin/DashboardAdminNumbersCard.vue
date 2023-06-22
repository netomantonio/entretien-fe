<template>
  <div class="">
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
    <DashboardOneValueInfoMiniCard
      title="Candidatos cadastrados"
      :icon="'users'"
      :value="props.interviewsStats.candidatesQtd"
      :value-name="''"
    />
    <DashboardOneValueInfoMiniCard
      title="Gerentes cadastrados"
      :icon="'user-tie'"
      :value="props.interviewsStats.managersQtd"
      :value-name="''"
    />
    <DashboardOneValueInfoMiniCard
      title="Recrutadores cadastrados"
      :icon="'user-gear'"
      :value="props.interviewsStats.recrutiersQtd"
      :value-name="''"
    />
    <DashboardOneValueInfoMiniCard
      title="Janelas de horário disponíveis"
      :icon="'clock'"
      :value="props.interviewsStats.schedulesQtd"
      :value-name="''"
    />
    <DashboardOneValueWarningMiniCard
      title="Aguardando cadastro"
      :icon="'id-card'"
      :value="props.interviewsStats.unregistredCpfQtd"
      :value-name="''"
    />
    <DashboardOneValueWarningMiniCard
      title="Ocorrências de Candidato ausente"
      :icon="'person-circle-question'"
      :value="props.interviewsStats.interviewsAbsentCandidateQtd"
      :value-name="''"
    />
    <DashboardOneValueWarningMiniCard
      title="Ocorrências de Recrutador ausente"
      :icon="'person-circle-question'"
      :value="props.interviewsStats.interviewsAbsentRecruiterQtd"
      :value-name="''"
    />
    <DashboardOneValueWarningMiniCard
      title="Entrevistas não ocorridas"
      :icon="'triangle-exclamation'"
      :value="props.interviewsStats.interviewsDidNotOccur"
      :value-name="''"
    />
  </div>
</template>
<script setup>
import DashboardTwoValuesMiniCard from "@/components/Dashboard/DashboardStats/DashboardTwoValuesMiniCard.vue";
import DashboardOneValueMiniCard from "@/components/Dashboard/DashboardStats/DashboardOneValueMiniCard.vue";
import DashboardOneValueWarningMiniCard
  from "@/components/Dashboard/DashboardStats/DashboardOneValueWarningMiniCard.vue";
import DashboardOneValueInfoMiniCard from "@/components/Dashboard/DashboardStats/DashboardOneValueInfoMiniCard.vue";

const props = defineProps({
  interviewsStats: {}
})
</script>

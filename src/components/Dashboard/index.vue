<template>
  <dashboard-admin v-if="role === 'ROLE_ADMIN'"/>
  <dashboard-candidate v-if="role === 'ROLE_CANDIDATE'"/>
  <dashboard-recruiter v-if="role === 'ROLE_RECRUITER'"/>
</template>
<script setup>
import DashboardAdmin from "@/components/Dashboard/Admin/index.vue";
import DashboardCandidate from "@/components/Dashboard/Candidate/index.vue";
import DashboardRecruiter from "@/components/Dashboard/Recruiter/index.vue";

const role = window.localStorage.getItem('roles')
</script>
<style scoped>
</style>

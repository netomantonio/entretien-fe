<template>
  <dashboard-candidate v-if="role === 'ROLE_CANDIDATE'"/>
</template>
<script setup>
import DashboardCandidate from "@/components/Dashboard/Candidate/index.vue";

const role = window.localStorage.getItem('roles')
</script>
<style scoped>
</style>

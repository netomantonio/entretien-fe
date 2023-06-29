<template>
  <div class="justify-center items-center w-screen">
    <dashboard-admin v-if="role === 'ROLE_ADMIN'"/>
    <dashboard-candidate v-if="role === 'ROLE_CANDIDATE'"/>
    <dashboard-recruiter v-if="role === 'ROLE_RECRUITER'"/>
    <dashboard-manager v-if="role === 'ROLE_MANAGER'"/>
  </div>
</template>
<script setup>
import DashboardAdmin from "@/components/Dashboard/Admin/index.vue";
import DashboardCandidate from "@/components/Dashboard/Candidate/index.vue";
import DashboardRecruiter from "@/components/Dashboard/Recruiter/index.vue";
import DashboardManager from "@/components/Dashboard/Manager/index.vue";

const role = window.localStorage.getItem('roles')
</script>
<style scoped>
</style>

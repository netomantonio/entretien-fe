<template>
  <!-- MAIN CONTAINER [START] -->
  <div class="z-10 top-0 h-16 bg-white py-3 2xl:container">
    <DashboardHeader/>
    <div class="px-6 pt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <div class="md:col-span-2 lg:col-span-1">
        <DashboardNextInterview/>
      </div>
      <div class="hidden md:col-span-2 lg:col-span-1">
        <DashboardCalendar/>
      </div>
    </div>
    <div class="md:mt-5 px-6 pt-6 grid lg:gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div class="md:col-span-2 lg:col-span-2 mr-5">
        <InterviewHistory/>
      </div>
      <div class="md:col-span-1 lg:col-span-1">
        <DashboardCandidateNumbersCard/>
      </div>
    </div>
  </div>
</template>
<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardCalendar from "@/components/Dashboard/DashboardCalendar/DashboardCalendar.vue";
import DashboardNextInterview from "@/components/Dashboard/DashboardNextInterview.vue";
import InterviewHistory from "@/components/Dashboard/InterviewHistory/index.vue";
import DashboardCandidateNumbersCard from "@/components/Dashboard/DashboardStats/DashboardCandidateNumbersCard.vue";

</script>
<style scoped>
</style>

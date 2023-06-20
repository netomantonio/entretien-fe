<template>
  <!-- MAIN CONTAINER [START] -->
  <div class="z-10 top-0 h-16 bg-white py-3 2xl:container">
    <DashboardHeader/>
    <div class="px-6 pt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      <div class="md:col-span-2 lg:col-span-1">
        <DashboardCalendar />
      </div>
      <div class="md:col-span-2 lg:col-span-1">
        <DashboardNextInterview />
      </div>
    </div>
  </div>
</template>
<script setup>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardCalendar from "@/components/Dashboard/DashboardCalendar.vue";
import DashboardNextInterview from "@/components/Dashboard/DashboardNextInterview.vue";
</script>
<style scoped>
</style>

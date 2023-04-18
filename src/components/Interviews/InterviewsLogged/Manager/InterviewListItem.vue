<template>
  <td class="td-container">
    <div class="flex items-center">
      <div class="flex-shrink-0 w-4 h-4">
        <font-awesome-icon icon="user" class="text-brand-main w-full h-full"/>
      </div>
      <div class="ml-3">
        <p class="text-gray-900 whitespace-no-wrap m-auto" v-if="!!interview.candidate">
          {{ interview.candidate.firstName + ' ' + interview.candidate.lastName }}
        </p>
        <p class="text-gray-900 whitespace-no-wrap m-auto" v-else>-</p>
      </div>
    </div>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ interview.managerObservation }}
    </p>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getDate }}
    </p>
  </td>
  <td class="td-container">
    <span class="relative inline-block px-3 py-1 font-semi-bold leading-tight">
      <span class="absolute inset-0 status-pill opacity-50 rounded-full"></span>
      <span class="relative m-auto">{{ getInterviewStatus }}</span>
    </span>
  </td>
  <td class="td-container ">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      <font-awesome-icon icon="pen-to-square" class="text-brand-main action-icon"/>
    </p>
  </td>
</template>


<script>
import {defineComponent} from "vue";
import InterviewStatus from "@/components/Interviews/InterviewStatus";

export default defineComponent({
  data: () => ({}),
  props: ['interview'],
  computed: {
    getDate(){
      let date = new Date(this.interview.createdAt)
      return ('0' + date.getDate()).slice(-2) + "/" + ('0' + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear()
    },
    getInterviewStatus() {
      return InterviewStatus[this.interview.interviewStatus]
    },
    getStatusColor(){
      switch (InterviewStatus[this.interview.interviewStatus]) {
        case InterviewStatus.WAITING_CANDIDATE :
          return '#f88676'
        case InterviewStatus.WAITING_CANDIDATE_REGISTRATION :
          return '#f85b47'
        case InterviewStatus.TO_BE_SCHEDULE :
          return '#f39d41'
        case InterviewStatus.ABSENT_CANDIDATE :
          return 'red'
        case InterviewStatus.ABSENT_RECRUITER :
          return 'red'
        case InterviewStatus.CONCLUDED :
          return 'green'
        case InterviewStatus.DID_NOT_OCCUR :
          return 'red'
        case InterviewStatus.SCHEDULE :
          return 'red'
        case InterviewStatus.IN_PROGRESS :
          return 'red'
        case InterviewStatus.OTHER :
          return 'red'
        default:
          return 'gray'
      }
    }
  }
})
</script>

<style scoped>
.td-container {
  padding: 1rem 3rem;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-bottom-width: 1px;
}

.action-icon {
  height: 1.5rem;
}

.status-pill {
  background-color: v-bind(getStatusColor);
}
</style>

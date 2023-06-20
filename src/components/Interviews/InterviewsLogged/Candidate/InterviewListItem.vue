<template>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getCompanyName }}
    </p>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
    </p>
  </td>
  <td class="td-container">
    <span class="relative inline-block px-3 py-1 font-semi-bold leading-tight">
      <span class="absolute inset-0 status-pill opacity-50 rounded-full"></span>
      <span class="relative m-auto">{{ getInterviewStatus }}</span>
    </span>
  </td>
  <td class="td-container">
    <p v-if="getAppointmentDate !== null" class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getAppointmentDate }}
    </p>
  </td>
</template>

<script>
import {defineComponent} from "vue";
import InterviewStatus from "@/components/Interviews/InterviewStatus";
export default defineComponent({
  setup() {

    return {

    }
  },
  data: () => ({}),
  props: {
    interview: {
      id: String,
      companyName: String,
      appointmentDate: String,
      status: String
    }
  },
  computed: {
    getAppointmentDate() {
      if (this.interview.appointmentDate) return this.interview.appointmentDate.toString()
      return null
    },
    getInterviewId() {
      return this.interview.id.toString()
    },
    getCompanyName() {
      return this.interview.companyName.toString()
    },
    getInterviewStatus() {
      return InterviewStatus[this.interview.status]
    },
    getStatusColor(){
      switch (InterviewStatus[this.interview.status]) {
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
  },
  methods: {
    canDelete(){
      switch (InterviewStatus[this.interview.status]) {
        case InterviewStatus.TO_BE_SCHEDULE:
        case InterviewStatus.WAITING_CANDIDATE_REGISTRATION:
          return true
        default:
          return false
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

.td-container-icon {
  padding: 1rem 1rem;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-bottom-width: 1px;
}

.status-pill {
  background-color: v-bind(getStatusColor);
}
</style>

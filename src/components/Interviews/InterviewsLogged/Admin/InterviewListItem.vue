<template>
  <td class="td-container">
    <div class="flex items-center">
      {{ props.interview.id }}
    </div>
  </td>
  <td class="td-container">
    <div class="flex items-center">
      {{ getAppointmentDate() }}
    </div>
  </td>
  <td :class="`td-container`">
    <div :class="`flex items-center text-${ getStatusColor() }`">
      {{ InterviewStatus[props.interview.interviewStatus] }}
    </div>
  </td>
  <td class="td-container">
    <div class="flex items-center">
      {{ props.interview.manager.companyName }}
    </div>
  </td>
  <td class="td-container">
    <div class="flex items-center">
      {{ `${props.interview.candidate.firstName} ${props.interview.candidate.lastName}` }}
    </div>
  </td>
  <td class="td-container">
    <div class="flex items-center">
      {{ getRecruiterName() }}
    </div>
  </td>
  <td class="td-container">
    <div class="flex items-center">
      {{ props.interview.score }}
    </div>
  </td>
</template>

<script setup>
import InterviewStatus from "@/components/commons/InterviewStatus";

const props = defineProps({
  interview: {}
})

function getAppointmentDate() {
  if (props.interview.startingAt) {
    const startingAt = new Date(props.interview.startingAt)
    const day = String(startingAt.getDate()).padStart(2, '0')
    const month = String(startingAt.getMonth() + 1).padStart(2, '0')
    const year = startingAt.getFullYear()
    const hours = String(startingAt.getHours()).padStart(2, '0')
    const minutes = String(startingAt.getMinutes()).padStart(2, '0')

    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`
    return formattedDateTime.toString()
  } else {
    return "  - "
  }
}


function getStatusColor() {
  switch (props.interview.interviewStatus) {
    case "ABSENT_CANDIDATE":
      return 'tomato-600'
    case "ABSENT_RECRUITER" :
      return 'goldenrod-400'
    case "DID_NOT_OCCUR":
      return 'tomato-600'
    case "TO_BE_SCHEDULE":
      return 'mediumorchid-500'
    case "SCHEDULE":
      return 'cornflowerblue-700'
    case "IN_PROGRESS":
      return 'slateblue-600'
    case "CONCLUDED":
      return 'lightseagreen-500'
    case "OTHER" :
      return 'gray-500'
    default:
      return 'gray-200'
  }
}

function getRecruiterName() {
  if (props.interview.recruiter) {
    return `${props.interview.recruiter.firstName} ${props.interview.recruiter.lastName}`
  } else return " - "
}
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
</style>

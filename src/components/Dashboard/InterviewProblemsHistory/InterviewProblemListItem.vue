<template>
  <tr :class="`m-0 p-0 border-l-8 border-r-8 border-${getStatusColor()}`">
    <td class="td-container">
      <p class="text-gray-900 whitespace-no-wrap m-auto">
        {{ props.interview.manager.companyName }}
      </p>
    </td>
    <td class="td-container">
      <p class="text-gray-900 whitespace-no-wrap m-auto">
        {{ props.interview.recruiter.firstName + " " + props.interview.recruiter.lastName }}
      </p>
    </td>
    <td class="td-container">
      <p v-if="getAppointmentDate !== null" class="text-gray-900 whitespace-no-wrap m-auto">
        {{ props.interview.candidate.firstName + " " + props.interview.candidate.lastName }}
      </p>
    </td>
    <td class="td-container">
      <p v-if="getAppointmentDate !== null" class="text-gray-900 whitespace-no-wrap m-auto">
        {{ new Date(props.interview.startingAt).toLocaleDateString() }}
      </p>
    </td>
    <td class="td-container">
      <p class="m-auto">
        <font-awesome-icon icon="circle-info" :class="`text-${getStatusColor()} text-2xl`"/>
      </p>
    </td>
  </tr>
</template>

<script setup>

const props = defineProps({
  interview: {},
  user: String
})

console.log("props.interview.interviewStatus", props.interview.interviewStatus)
console.log("getStatusColor()", getStatusColor())
function getStatusColor() {
  switch (props.interview.interviewStatus) {
    case "ABSENT_CANDIDATE":
      return 'tomato-600'
    case "ABSENT_RECRUITER" :
      return 'goldenrod-400'
    case "DID_NOT_OCCUR":
      return 'tomato-600'
    case "OTHER" :
      return 'gray-500'
    default:
      return 'gray-200'
  }
}
</script>

<style scoped>
.td-container {
  padding: 1rem 1rem;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-bottom-width: 1px;
}
</style>

<template>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ props.interview.company }}
    </p>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
    </p>
  </td>
  <td class="td-container">
    <p v-if="getAppointmentDate !== null" class="text-gray-900 whitespace-no-wrap m-auto">
      {{ props.user }}
    </p>
  </td>
  <td class="td-container">
    <p v-if="props.interview.startingAt !== null" class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getDate() }}
    </p>
  </td>
</template>

<script setup>

const props = defineProps({
  interview: {},
  user: String
})

function getDate(){
  if(props.interview.startingAt == null){
    return " - "
  } else {
    const date = new Date(props.interview.startingAt)
    return (date.toLocaleDateString() + " " + date.toLocaleTimeString())
  }
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

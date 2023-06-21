<template>
  <div class="flex-col items-center">
    <div class="flex-1 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
      {{ props.interview.company }}
    </div>
    <div class="ml-0 flex">
      <p class="mt-0.5 mr-2 text-sm font-medium text-gray-900 truncate dark:text-white">
        {{ props.interview.startingAt.split("T")[1].slice(0, 5) }}
      </p>
      <p class="text-sm text-gray-500 truncate dark:text-gray-400">
        {{ props.interview.startingAt.split("T")[0].replaceAll("-", "/") }}
      </p>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  interview: {},
});

</script>
<style>

</style>

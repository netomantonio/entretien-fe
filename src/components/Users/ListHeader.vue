<template>
  <th
    :class="`${customStyle || defaultStyle}`">
    {{ props.title || "" }}
  </th>
</template>

<script setup>

const props = defineProps({
  title: String,
  customStyle: String
})

const defaultStyle = "px-3 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
</script>

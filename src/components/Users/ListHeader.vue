<template>
  <th
    :class="`${customStyle || defaultStyle} px-2`">
    {{ props.title || "" }}
  </th>
</template>

<script setup>

const props = defineProps({
  title: String,
  customStyle: String
})

const defaultStyle = ""
</script>

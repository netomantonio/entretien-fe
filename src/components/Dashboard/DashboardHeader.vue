<template>
  <div class="px-6 flex items-center justify-between space-x-4">
    <h5 class="text-2xl text-gray-600 font-medium lg:block">{{ props.title}}</h5>
    <h5 class="text-sm text-gray-600 font-medium lg:block">{{ props.subtitle}}</h5>
    <div class="flex space-x-4">
      <button aria-label="chat"
              class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
        <font-awesome-icon icon="message" class="text-gray-600"/>
      </button>
      <button aria-label="notification"
              class="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
        <font-awesome-icon icon="bell" class="text-gray-600"/>
      </button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: String
})
</script>
<style scoped>
</style>

<template>
  <p class="text-sm text-right text-tomato-600 mt-1 mr-1 pb-0 mb-0">{{ props.title }}</p>
  <div
    class="mb-3 rounded-md flex items-center justify-between px-3 py-2.5 bg-tomato-600 border-b-4 border-tomato-700 font-medium group">
    <div>
      <div
        class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        <font-awesome-icon :icon="props.icon" class="text-tomato-600 text-3xl"/>
      </div>
    </div>
    <div class="text-white text-center">
      <span class="text-4xl mb-0">{{ props.value }}</span>
      <div>
        <span class="text-brand-gray">{{ props.valueName }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps({
  title: String,
  icon: String,
  value: Number,
  valueName: String
});

</script>

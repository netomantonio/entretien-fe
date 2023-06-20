<template>
  <div v-if="props.data">
    <p class="text-sm text-right text-brand-main mt-1 mr-1 pb-0 mb-0">{{ props.data.title }}</p>
    <div
      class="mb-3 bg-brand-main rounded-md flex items-center justify-between px-3 py-2.5 border-b-4 border-pink-700 font-medium group">
      <div>
        <div
          class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <font-awesome-icon :icon="props.data.icon" class="text-brand-main text-3xl"/>
        </div>
      </div>
      <div class="text-white text-center">
        <span class="text-4xl mb-0">{{ props.data.qtd }}</span>
        <div>
          <span class="text-brand-gray">{{ props.data.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: null
});

</script>

<template>
  <div>
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-1">
        <div class="sm:col-span-3">
          <label for="language" class="block text-sm font-medium leading-6 text-gray-900">Lingua estrangeira</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="language" autocomplete="language" v-model="value.language"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
      </div>
      <div class="sm:col-span-1">
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Nível</label>
        <div class="mt-2">
          <select id="country" name="language-level" autocomplete="language-level" v-model="value.level"
                  class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option v-for="level in LanguageProficiencyLevels" v-bind:key="level">{{ level }}</option>
          </select>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {LanguageProficiencyLevels} from "@/models/LanguageProficiencyLevels"
import {computed} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>
<style>
</style>

<template>
  <div class="mt-10">
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
      <div class="sm:col-span-3">
        <label for="language" class="block text-sm font-medium leading-6 text-gray-900">Curso</label>
        <div class="mt-2">
          <input type="text" name="first-name" id="language" autocomplete="language" v-model="value.courseName"
                 class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>

      <div class="sm:col-span-2 flex">
        <div>
          <label for="language" class="block text-sm font-medium leading-6 text-gray-900">Instituição</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="language" autocomplete="language" v-model="value.institution"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
          <button class="ml-5 px-3 py-2 flex items-center space-x-4 rounded-md text-white group bg-brand-danger"
                  @click="props.remove(props.index)">
            <font-awesome-icon icon="trash" class="text-white pt-0.5 text-2xl"/>
          </button>
      </div>

    </div>
    <div class="flex justify-start mt-2 ml-2">
      <div>
        Início <input type="date" v-model="value.startedAt"> <span v-if="!value.ongoing"> - Data de conclusão: </span>
        <input v-if="!value.ongoing" type="date" v-model="value.endedAt">
      </div>
      <fieldset>
        <div class="space-y-6 ml-5">
          <div class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
              <input id="comments" name="comments" type="checkbox" v-model="value.ongoing"
                     class="h-5 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
            </div>
            <div class="text-sm leading-6">
              <label for="comments" class="font-medium text-gray-900">em andamento</label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['modelValue', 'index', 'remove'])
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
<style scoped>
</style>

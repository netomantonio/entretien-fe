<template>
  <div class="mt-10 flex">

    <div class="flex-1">
      <!-- DATE -->
      <div class="flex justify-start">
        <input type="date" v-model="value.startedAt"> <span v-if="!value.currentPosition"> - </span>
        <input v-if="!value.currentPosition" type="date" v-model="value.endedAt">
      </div>

      <div class="grid grid-cols-6 gap-x-6 gap-y-8">

        <div class="col-span-2">
          <label for="language" class="block text-sm font-medium leading-6 text-gray-900">Posição</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="language" autocomplete="language" v-model="value.position"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-3">
          <label for="language" class="block text-sm font-medium leading-6 text-gray-900">Empresa</label>
          <div class="mt-2">
            <input type="text" name="first-name" id="language" autocomplete="language" v-model="value.company"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div class="col-span-1">
          <fieldset>
            <div class="mt-6 space-y-6">
              <div class="relative pt-4 flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input id="comments" name="comments" type="checkbox" v-model="value.currentPosition"
                         class="h-5 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Cargo atual</label>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="col-span-5">
          <label for="language" class="block text-sm font-medium leading-6 text-gray-900">Atividades executadas</label>
          <div class="mt-2 flex">
            <input type="text" name="first-name" id="language" autocomplete="language" v-model="value.jobDescription"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

      </div>
    </div>

    <div class="flex justify-center content-center">
      <div>
        <button class="ml-5 px-3 py-2 items-center space-x-4 rounded-md text-white group bg-brand-danger flex-none h-25"
                @click="props.handleRemove(props.index)">
          <font-awesome-icon icon="trash" class="text-white text-xl"/>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps(['modelValue', 'index', 'handleRemove'])
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

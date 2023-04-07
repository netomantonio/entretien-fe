<template>
  <form @submit.prevent="handleAgendaSubmit">
    <div class="border border-gray-300 rounded-lg shadow-md p-4 mt-5">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-medium mb-4">Configurações da Agenda</h2>
        <button
          class="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          @click="state.isCollapsed.agendaConfig = !state.isCollapsed.agendaConfig"
        >
          <svg
            :class="{'rotate-90': state.isCollapsed.agendaConfig}"
            class="h-6 w-6 transition-transform duration-150 transform"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
      <div v-if="!state.isCollapsed.agendaConfig">
        <div class="flex flex-col space-y-4">
          <div v-for="(day, index) in daysOfWeek" :key="index"
               class="flex flex-col md:flex-row items-center justify-between">
            <label :for="'startingAt-' + index">{{ day }}:</label>
            <div v-for="(time, timeIndex) in internalState.selectedTimes[index]" :key="timeIndex"
                 class="flex flex-col md:flex-row items-center justify-between">
              <input :id="'startingAt-' + index + '-' + timeIndex" v-model="time.startingAt" :name="'startingAt-' + index"
                     class="w-full md:w-1/4 mt-2 md:mt-0 md:ml-4 py-2 px-4 border border-gray-400 rounded-lg"
                     type="time"/>
              <input :id="'endingAt-' + index + '-' + timeIndex" v-model="time.endingAt" :name="'endingAt-' + index"
                     class="w-full md:w-1/4 mt-2 md:mt-0 md:ml-4 py-2 px-4 border border-gray-400 rounded-lg"
                     type="time"/>
              <button v-if="timeIndex === internalState.selectedTimes[index].length - 1"
                      class="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                      @click="addTime(index)">+
              </button>
              <button v-if="timeIndex !== internalState.selectedTimes[index].length - 1"
                      class="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                      @click="removeTime(index, timeIndex)">-
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        v-if="!state.isCollapsed.agendaConfig"
        :class="{
              'opacity-50': state.isLoading
            }"
        :disabled="state.isLoading"
        class="hidden sm:block px-4 py-1 mt-5 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition-all duration-150"
        type="submit"
      >
        <icon v-if="state.isLoading" class="animate-spin" name="loading"/>
        <span v-else>Salvar</span>
      </button>
    </div>
  </form>
</template>

<script>
import {reactive} from 'vue'
import Icon from "@/components/Icon/index.vue";

export default {
  name: 'AgendaConfig',
  components: {Icon},
  props: {
    handleAgendaSubmit: {},
    daysOfWeek: {
      type: Array,
      required: true
    },
    state: {}
  },
  setup(props) {
    const internalState = reactive({
      selectedTimes: props.daysOfWeek.map(() => [{startingAt: '', endingAt: ''}])
    })

    function addTime(index) {
      internalState.selectedTimes[index].push({startingAt: '', endingAt: ''})
    }

    function removeTime(dayIndex, timeIndex) {
      internalState.selectedTimes[dayIndex].splice(timeIndex, 1)
    }

    function addDay(index) {
      internalState.selectedTimes.splice(index + 1, 0, [{startingAt: '', endingAt: ''}])
    }

    return {
      internalState,
      addTime,
      removeTime,
      addDay
    }
  }
}
</script>

<style scoped>
/* Adicione aqui o seu estilo com o Tailwind CSS */
</style>

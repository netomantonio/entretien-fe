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
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700" for="dia">Dia da semana</label>
            <select id="dia"
                    v-model="internalState.dia.value"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="dia">
              <option value="MONDAY">Segunda-feira</option>
              <option value="TUESDAY">Terça-feira</option>
              <option value="WEDNESDAY">Quarta-feira</option>
              <option value="THURSDAY">Quinta-feira</option>
              <option value="FRIDAY">Sexta-feira</option>
              <option value="SATURDAY">Sábado</option>
              <option value="SUNDAY">Domingo</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700" for="horaInicio">Hora de início</label>
            <input id="horaInicio" v-model="internalState.horaInicio.value"
                   class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   name="horaInicio"
                   type="time">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700" for="horaFim">Hora de término</label>
            <input id="horaFim"
                   v-model="internalState.horaFim.value"
                   class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   name="horaFim"
                   type="time">
          </div>
          <div class="flex items-end">
            <button
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
              @click="handleAddSchedule">
              Adicionar
            </button>
          </div>
        </div>
        <table class="min-w-full divide-y divide-gray-200 mt-5">
          <thead>
          <tr>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dia da
              semana
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Horários
            </th>
            <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in internalState.agendaTable" :key="item.id">
            <td class="px-6 py-4 whitespace-nowrap">{{ item.dayOfTheWeek }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.startingAt }} - {{ item.endingAt }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <button class="text-red-600 hover:text-red-800" @click="excluir(item.id)">Excluir</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </form>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
import {Schedule} from "@/models/agenda";
import {setGlobalLoading} from "@/store/global";
import services from '@/services'
import toast from "bootstrap/js/src/toast";
import {reactive} from "vue";
import {useField} from "vee-validate";

export default {
  name: 'AgendaConfig',
  components: {Icon},
  props: {
    handleAgendaSubmit: {},
    agenda: {
      type: Array,
      required: true
    },
    state: {}
  },
  setup(props) {

    const {
      value: diaValue,
      errorMessage: diaErrorMessage
    } = useField('dia')

    const {
      value: horaInicioValue,
      errorMessage: horaInicioErrorMessage
    } = useField('horaInicio')

    const {
      value: horaFimValue,
      errorMessage: horaFimErrorMessage
    } = useField('horaFim')

    const internalState = reactive({
      dia: {
        value: diaValue,
        errorMessage: diaErrorMessage
      },
      horaInicio: {
        value: horaInicioValue,
        errorMessage: horaInicioErrorMessage
      },
      horaFim: {
        value: horaFimValue,
        errorMessage: horaFimErrorMessage
      },
      agendaTable: []
    })

    function handleAddSchedule() {
      const dayOfWeek = internalState.dia.value;
      const startingAt = internalState.horaInicio.value;
      const endingAt = internalState.horaFim.value;
      addSchedule(dayOfWeek, startingAt, endingAt);
    }

    async function addSchedule(dayOfWeek, startingAt, endingAt) {
      const agenda = []
      agenda.push(new Schedule(dayOfWeek, startingAt, endingAt))
      const {
        errors
      } = await services.schedules.registerSchedule({
        agenda
      })
      if (errors) {
        toast.error('Ocorreu um erro ao registrar horário')
      }
      setGlobalLoading(false)
      props.state.hasErrors = false
      await buscarHorarios()
    }

    async function buscarHorarios() {
      const {
        errors,
        data
      } = await services.schedules.getSchedulesByRecruiter({id: window.localStorage.getItem('id')})
      if (errors) {
        toast.error('Ocorreu um erro ao buscar horários, tente mais tarde')
      }
      internalState.agendaTable = data
    }

    async function excluir(id) {
      const index = internalState.agendaTable.findIndex(item => item.id === id)
      if (index > -1) {
        const {errors} = await services.schedules.deleteSchedulesByRecruiter({id: index})
        internalState.agendaTable.splice(index, 1);
        if (errors) {
          toast.error('Ocorreu um erro ao deletar horário, tente mais tarde')
        }
      } else {
        toast.error('Ocorreu um erro ao deletar horário, tente mais tarde')
      }
      await buscarHorarios()
    }

    buscarHorarios()

    return {
      handleAddSchedule,
      excluir,
      internalState
    }
  }
}
</script>

<style scoped>
/* Adicione aqui o seu estilo com o Tailwind CSS */
</style>

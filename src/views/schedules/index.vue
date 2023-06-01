<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class='demo-app p-15 m-8 mb-20 text-center'>
    <div class='container full-calendar mt-50 mb-100'>
      <h2 class="text-gray-600 font-semi-bold mb-5">
        Selecione um horário disponível para agendar a entrevista:
      </h2>
      <FullCalendar
        :options='calendarOptions'
        class='fc-button'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
    <div class="container"></div>
  </div>
</template>

<script setup>
import FullCalendar from "@fullcalendar/vue3"
import HeaderLogged from "@/components/HeaderLogged/index.vue"
import services from "@/services"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import bootstrap5Plugin from "@fullcalendar/bootstrap5"
import ptBrLocale from "@fullcalendar/core/locales/pt-br"
import {useToast} from "vue-toastification"
import {useRoute} from "vue-router"
import {setGlobalLoading} from "@/store/global"
import {DayOfTheWeek} from "@/models/dayOfTheWeek"

const route = useRoute()
const toast = useToast()
const id = route.params.id

let calendarOptions = {
  plugins: [
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin, // needed for dateClick
    bootstrap5Plugin,
  ],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: ''
  },
  initialView: 'timeGridWeek',
  eventMinHeight: 60,
  editable: false,
  selectable: false,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  eventClick: handleInterviewSchedule,
  eventsSet: handleEvents,
  themeSystem: 'bootstrap5',
  locale: ptBrLocale,
  events: getSchedules,
  eventColor: "#f6709f",
  views: {
    dayGrid: {
      slotMinTime: '00:00',
      slotMaxTime: '23:59',
    },
    timeGrid: {
      slotMinTime: '00:00',
      slotMaxTime: '23:59',
    },
    timeGridWeek: {
      slotMinTime: '00:00',
      slotMaxTime: '23:59',
    },
  },
  allDaySlot: false,
  height: 'auto',
  contentHeight: 'auto'

}

function getSchedules(info, successCallback, failureCallback) {
  services.schedules.getAllAvailableSchedules(
    `${info.start.getUTCFullYear()}-${String(info.start.getUTCMonth() + 1).padStart(2, '0')}-${String(info.start.getUTCDate()).padStart(2, '0')}`,
    `${info.end.getUTCFullYear()}-${String(info.end.getUTCMonth() + 1).padStart(2, '0')}-${String(info.end.getUTCDate() - 1).padStart(2, '0')}`
  ).then(({data, erros}) => {
    if (erros)
      failureCallback(erros)
    else {
      successCallback(data.map(value => ({
        id: value.id,
        daysOfWeek: [DayOfTheWeek[value.dayOfTheWeek].toString()],
        startTime: value.startingAt,
        endTime: value.endingAt,
      })))
    }
  })
}

async function handleInterviewSchedule(clickInfo) {
  if (confirm(`Confirmar seleção de horário?`)) {
    const interviewId = id
    const scheduleId = clickInfo.event.id
    const date = clickInfo.event.startStr.split("T")[0]

    const {
      errors
    } = await commitInterview(interviewId, scheduleId, date)
    if (errors) {
      toast.error('Ocorreu um erro ao agendar a entrevista')
    }
    setGlobalLoading(false)
    if (!errors)
      toast.success('Entrevista agendada!')
    new Promise(resolve => setTimeout(resolve, 5000))
    getSchedules()
  }
}

function handleEvents(events) {
  this.currentEvents = events
}

async function commitInterview(interviewId, scheduleId, date) {
  return await services.interview.commitInterview({interviewId, scheduleId, date})
}

</script>
<style scoped>

.container {
  height: 100px; /* Defina a altura do contêiner pai */
}

.full-calendar {
  width: 80%;
}


:root .fc-button button {
  @apply bg-white text-brand-main rounded border-2 border-white;
}

:root .fc-button button:hover {
  @apply bg-brand-main border-2 border-brand-main text-white;
}


:root .fc-daygrid-day {
  border: 1px solid #EF4983 !important;
}

:root .fc-theme-bootstrap5-shaded {
  background-color: #EF4983;
}

:root {
  font-size: 16px;
}

:root .fc-timegrid-slot-label-cushion {
  font-size: 0.75rem;
}

:root .fc-col-header-cell-cushion {
  font-size: 0.75rem;
}


</style>

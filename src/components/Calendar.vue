<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class='container'>
    <div class='full-calendar mt-20 mb-20'>
      <FullCalendar
        :options='calendarOptions'
        class='fc-button'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import HeaderLogged from "@/components/HeaderLogged/index.vue";
import services from '@/services'
import {useToast} from "vue-toastification";

const toast = useToast()

function getSchedules() {
  services.interview.getInterviewsByCandidate().then(({data, erros}) => {
    if (erros)
      toast("erro ao carregar suas entrevistas agendadas")
    else {
      data.interviews.filter(interview => interview.status === 'SCHEDULE').map(value => ({
        id: value.id,
        start: new Date(value.appointmentDate),
        end: new Date(new Date(value.appointmentDate).getTime() + (60 * 60 * 1000)),
        title: value.companyName
      }))
    }
  })
}

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
  eventClick: null,
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

function handleEvents(events) {
  this.currentEvents = events
}


</script>
<style>

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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

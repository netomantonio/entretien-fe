<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class='demo-app p-15 m-8'>
    <div class='demo-app-main'>
      <FullCalendar
        :options='calendarOptions'
        class='demo-app-calendar'>
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {createEventId} from '@/event-utils'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import HeaderLogged from "@/components/HeaderLogged/index.vue";
import services from '@/services'
import {DayOfTheWeek} from "@/models/dayOfTheWeek";

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
  // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
  editable: false,
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  select: handleDateSelect,
  eventClick: handleEventClick,
  eventsSet: handleEvents,
  themeSystem: 'bootstrap5',
  locale: ptBrLocale,
  events: function (info, successCallback, failureCallback) {
    services.schedules.getAllAvailableSchedules(
      `${info.start.getUTCFullYear()}-${String(info.start.getUTCMonth() + 1).padStart(2, '0')}-${info.start.getUTCDate()}`,
      `${info.end.getUTCFullYear()}-${String(info.end.getUTCMonth() + 1).padStart(2, '0')}-${info.end.getUTCDate()}`
    ).then(({data, erros}) => {
      if(erros)
        failureCallback(erros)
      else {
        console.log("data", data)
        successCallback(data.map(value => ({
          daysOfWeek: [DayOfTheWeek[value.dayOfTheWeek].toString()],
          startTime: value.startingAt,
          endTime: value.endingAt,
        })))
      }
    })
  }
  // datesSet
  //  // you can update a remote database when these fire:
  // eventAdd: {},
  // eventChange: {},
  // eventRemove: {}
}

function handleDateSelect(selectInfo) {
  let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar
  calendarApi.unselect() // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    })
  }
}

function handleEventClick(clickInfo) {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}

function handleEvents(events) {
  this.currentEvents = events
}

async function loadAvailableSchedules(to, from) {
  console.log("loadAvailableSchedules")
  const {data} = await services.schedules.getAllSchedules(to, from)
  return data.map(value => ({
    daysOfWeek: [DayOfTheWeek[value.dayOfTheWeek].toString()],
    startTime: value.startingAt,
    endTime: value.endingAt,
  }))
}

function addNewEvent(event) {
  calendarOptions.events = [...calendarOptions.events, event]
  console.log('calendarOptions.events', calendarOptions.events)
}

function btnTest() {
  console.log('btnTest')
  const example = {title: 'event 3', start: '2023-05-17'}
  addNewEvent(example)
}


function createEvents(list) {

}

</script>

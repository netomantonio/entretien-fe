<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged />
  </div>
  <div class='demo-app p-15 m-8'>
    <div class='demo-app-main'>
      <FullCalendar
        :options='calendarOptions'
        class='demo-app-calendar'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
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
// import {Calendar} from "@fullcalendar/core"

export default defineComponent({
  components: {
    FullCalendar,
    HeaderLogged
  },
  data() {

    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,// needed for dateClick
          bootstrap5Plugin,
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        initialView: 'timeGridWeek',
        // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        themeSystem: 'bootstrap5',
        locale: ptBrLocale,
        // datesSet
        //  // you can update a remote database when these fire:
        // eventAdd: {},
        // eventChange: {},
        // eventRemove: {}
      },
      currentEvents: [],
    }
  },
  methods: {
    handleDateSelect(selectInfo) {
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
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    },
  }
})

</script>

<!--<style lang='css'>-->

<!--.demo-app {-->
<!--  display: flex;-->
<!--  min-height: 100%;-->
<!--  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;-->
<!--  font-size: 14px;-->
<!--}-->

<!--.demo-app-main {-->
<!--  flex-grow: 1;-->
<!--  padding: 3em;-->
<!--}-->


<!--/*.btn-primary {*/-->
<!--/*  &#45;&#45;bs-btn-bg: #030303;*/-->
<!--/*}*/-->

<!--:root { /* the calendar root */-->
<!--  max-width: 1100px;-->
<!--  margin: 0 auto;-->
<!--  &#45;&#45;fc-small-font-size: .85em;-->
<!--  &#45;&#45;fc-neutral-bg-color: rgba(234, 5, 5);-->

<!--  &#45;&#45;fc-border-color: #1aff00;-->

<!--  &#45;&#45;fc-button-text-color: #000d59;-->
<!--  &#45;&#45;fc-button-bg-color: #ff7300;-->
<!--  &#45;&#45;fc-button-border-color: #ff9346;-->
<!--  &#45;&#45;fc-button-hover-bg-color: #a1c9fa;-->
<!--  &#45;&#45;fc-button-hover-border-color: #118fff;-->
<!--  &#45;&#45;fc-button-active-bg-color: #cb76fd;-->
<!--  &#45;&#45;fc-button-active-border-color: #8b2df8;-->

<!--  &#45;&#45;fc-event-bg-color: rgba(55, 136, 216, 0.40);-->
<!--  &#45;&#45;fc-event-border-color: #d83744;-->
<!--  &#45;&#45;fc-event-text-color: #fff;-->
<!--}-->


<!--</style>-->

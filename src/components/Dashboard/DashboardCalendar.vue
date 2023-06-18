<template>
  <div class=''>
    <div class="flex">
      <font-awesome-icon icon="calendar-day" class="text-gray-600 text-xl mr-2 mt-1"/>
      <h5 class="text-gray-600 text-lg">Entrevistas do mês</h5>
    </div>
    <div class="flex">
      <FullCalendar id="calendar"
                    :options='calendarOptions'
                    class='fc-button'>
      </FullCalendar>
      <div class="flex-1 mt-5 px-3">
        <div>
          Entrevistas:
        </div>
        <div class="flow-root">
          <ul class="ml-0 pl-0 divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <DashboardCalendarInterviewListItem/>
            </li>
            <li class="py-3 sm:py-4">
              <DashboardCalendarInterviewListItem/>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import services from '@/services'
import DashboardCalendarInterviewListItem from "@/components/Dashboard/DashboardCalendarInterviewListItem.vue";

function getThisMonthCandidateInterviews() {
  services.interview.getInterviewsByCandidate().then(({data, erros}) => {
    if (erros) {
      // Sinalizar o erro no calendário
    } else {
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
    bootstrap5Plugin,
  ],
  headerToolbar: {
    left: '',
    center: 'title',
    right: ''
  },
  initialView: 'dayGridMonth',
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
  events: getThisMonthCandidateInterviews,
  eventColor: "#f6709f",
  views: {},
  allDaySlot: false,
  height: 'auto',
  contentHeight: 'auto'
}

function handleEvents(events) {
  this.currentEvents = events
}


</script>
<style>
#calendar {
  width: 400px;
  margin: 20px 0 0 0;
  font-size: 10px;

}

.fc-toolbar {
  font-size: .9em;
}

.fc-toolbar h2 {
  font-size: 12px;
  white-space: normal !important;
}

/* click +2 more for popup */
.fc-more-cell a {
  display: block;
  width: 85%;
  margin: 1px auto 0 auto;
  border-radius: 3px;
  background: grey;
  color: transparent;
  overflow: hidden;
  height: 4px;
}

.fc-more-popover {
  width: 100px;
}

.fc-view-month .fc-event, .fc-view-agendaWeek .fc-event, .fc-content {
  font-size: 0;
  overflow: hidden;
  height: 2px;
}

.fc-view-agendaWeek .fc-event-vert {
  font-size: 0;
  overflow: hidden;
  width: 2px !important;
}

.fc-agenda-axis {
  width: 20px !important;
  font-size: .7em;
}

.fc-button-content {
  padding: 0;
}
</style>

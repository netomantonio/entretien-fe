<template>
  <td class="td-container">
    <div class="flex items-center ml-5">
      <div class="ml-3">
        <p class="text-gray-900 whitespace-no-wrap m-auto">
          {{ getInterviewId }}
        </p>
      </div>
    </div>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getCompanyName }}
    </p>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
    </p>
  </td>
  <td class="td-container">
    <span class="relative inline-block px-3 py-1 font-semibold leading-tight">
      <span class="absolute inset-0 status-pill opacity-50 rounded-full"></span>
      <span class="relative m-auto">{{ getInterviewStatusText }}</span>
    </span>
  </td>
  <td class="td-container">
    <p v-if="this.interview.appointmentDate !== undefined" class="text-gray-900 whitespace-no-wrap m-auto">
      {{ this.interview.appointmentDate }}
    </p>
  </td>
  <td class="td-container-icon">
    <p class="text-gray-900 text-center whitespace-no-wrap m-auto">
      <button
        v-if="getInterviewStatusText === 'Aguardando agendamento'"
        class="hover:bg-brand-main text-brand-main text-xs font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
        @click="scheduler">
        Agendar
      </button>
      <a v-if="getInterviewStatusText === 'Agendada' && checkCallLiberation" :href="videoCall"
         class="hover:bg-brand-main text-xs text-brand-main font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
         @click="videoCall">
        Entrar na reunião
      </a>
      <font-awesome-icon
        class="ml-5 text-brand-main cursor-pointer action-icon" icon="eye"
        @click="viewInterview"
      />
    </p>
  </td>
</template>

<script>
import {defineComponent} from "vue"
import InterviewStatus from "@/components/commons/InterviewStatus"
import {useRouter} from 'vue-router'

const APPLICATION_VIDEO_CALL_URL = process.env.APPLICATION_VIDEO_CALL_URL
const APPLICATION_SERVER_OPENVIDU_URL = process.env.APPLICATION_SERVER_OPENVIDU_URL
const APPLICATION_FRONTEND_URL = process.env.APPLICATION_FRONTEND_URL
const RANGE_TIME_SHOW_CONNECTION_INTERVIEW = process.env.RANGE_TIME_SHOW_CONNECTION_INTERVIEW

export default defineComponent({
  setup(props) {
    const router = useRouter()

    function scheduler() {
      window.localStorage.setItem("schedulerInterviewId", props.interview.id.toString())
      router.push({name: 'Schedules'})
    }

    function viewInterview() {
      const interviewId = props.interview.id.toString();
      router.push({ name: "InterviewDetails", params: { id: interviewId } });
    }

    return {
      router,
      viewInterview,
      scheduler
    }
  },
  data: () => ({}),
  props: {
    interview: {
      id: String,
      companyName: String,
      appointmentDate: String,
      status: String,
      sessionId: String
    }
  },
  computed: {

    checkCallLiberation() {
      let [datePart, timePart] = this.interview.appointmentDate.toString().split(" ")
      let [day, month, year] = datePart.split("/")
      let [hours, minutes] = timePart.split(":")

      let monthIndex = parseInt(month, 10) - 1

      let appointmentDate = new Date(year, monthIndex, day, hours, minutes)
      let minTimeAcceptableConnection = new Date(appointmentDate.getTime() - RANGE_TIME_SHOW_CONNECTION_INTERVIEW * 60 * 1000)
      let maxTimeAcceptableConnection = new Date(appointmentDate.getTime() + RANGE_TIME_SHOW_CONNECTION_INTERVIEW * 60 * 1000)
      let dataAtual = new Date()
      return dataAtual >= minTimeAcceptableConnection && dataAtual <= maxTimeAcceptableConnection
    },

    videoCall() {
      let interviewId = this.interview.id.toString()
      let sessionID = this.interview.sessionId
      let token = window.localStorage.getItem('token')
      return APPLICATION_VIDEO_CALL_URL +
        'token=' + token +
        '&sessionId=' + sessionID +
        '&interviewId=' + interviewId +
        '&appServerUrl=' + APPLICATION_SERVER_OPENVIDU_URL +
        '&appFrontendUrl=' + APPLICATION_FRONTEND_URL +
        '&userRole=' + 'ROLE_CANDIDATE'
    },
    getInterviewId() {
      return this.interview.id.toString()
    },
    getCompanyName() {
      return this.interview.companyName.toString()
    },
    getInterviewStatusText() {
      return InterviewStatus[this.interview.status]
    },
    getStatusColor() {
      switch (InterviewStatus[this.interview.status]) {
        case InterviewStatus.WAITING_CANDIDATE :
          return '#f88676'
        case InterviewStatus.WAITING_CANDIDATE_REGISTRATION :
          return '#f85b47'
        case InterviewStatus.TO_BE_SCHEDULE :
          return '#f39d41'
        case InterviewStatus.ABSENT_CANDIDATE :
          return 'red'
        case InterviewStatus.ABSENT_RECRUITER :
          return 'red'
        case InterviewStatus.CONCLUDED :
          return 'green'
        case InterviewStatus.DID_NOT_OCCUR :
          return 'red'
        case InterviewStatus.SCHEDULE :
          return 'red'
        case InterviewStatus.IN_PROGRESS :
          return 'red'
        case InterviewStatus.OTHER :
          return 'red'
        default:
          return 'gray'
      }
    }
  },
  methods: {
    canDelete() {
      switch (InterviewStatus[this.interview.status]) {
        case InterviewStatus.TO_BE_SCHEDULE:
        case InterviewStatus.WAITING_CANDIDATE_REGISTRATION:
          return true
        default:
          return false
      }
    }
  }
})
</script>

<style scoped>
.td-container {
  padding: 1rem 3rem;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-bottom-width: 1px;
}

.td-container-icon {
  padding: 1rem 1rem;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-bottom-width: 1px;
}

.action-icon {
  height: 0.80rem;
}

.status-pill {
  background-color: v-bind(getStatusColor);
}
</style>

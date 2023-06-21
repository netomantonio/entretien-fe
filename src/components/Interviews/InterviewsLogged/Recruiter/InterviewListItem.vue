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
    <a :href="getSocialNetworking" class="text-gray-900 whitespace-no-wrap m-auto link-personalizado" target="_blank">
      {{ getCandidateName }}
    </a>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getCompanyName }}
    </p>
  </td>
  <td class="td-container">
    <p class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getObservation }}
    </p>
  </td>
  <td class="td-container">
    <span class="relative inline-block px-3 py-1 font-semi-bold leading-tight">
      <span :style="{backgroundColor: getStatusColor}"
            class="absolute inset-0 status-pill opacity-50 rounded-full"></span>
      <span class="relative m-auto">{{ getInterviewStatus }}</span>
    </span>
  </td>
  <td class="td-container">
    <p v-if="getAppointmentDate !== null" class="text-gray-900 whitespace-no-wrap m-auto">
      {{ getAppointmentDate }}
    </p>
  </td>
  <td class="td-container">
    <div class="flex items-center ml-5">
      <div class="ml-3">
        <p class="text-gray-900 whitespace-no-wrap m-auto">
          {{ getScore }}
        </p>
      </div>
    </div>
  </td>
  <td class="td-container-icon">
    <!-- Actions -->
    <p class="text-gray-900 text-center whitespace-no-wrap m-auto">
      <a v-if="getInterviewStatus === 'Agendada' && checkCallLiberation" :href="videoCall"
         class="hover:bg-brand-main text-xs text-brand-main font-semi-bold hover:text-white py-1 px-2 hover:border-transparent rounded"
         @click="$emit('videoCall')">
        Entrar na reunião
      </a>
    </p>
  </td>
</template>

<script>
import {defineComponent} from "vue";
import InterviewStatus from "@/components/Interviews/InterviewStatus";
import {useRouter} from 'vue-router'

const APPLICATION_VIDEO_CALL_URL = process.env.APPLICATION_VIDEO_CALL_URL
const APPLICATION_SERVER_OPENVIDU_URL = process.env.APPLICATION_SERVER_OPENVIDU_URL
const APPLICATION_FRONTEND_URL = process.env.APPLICATION_FRONTEND_URL
const RANGE_TIME_SHOW_CONNECTION_INTERVIEW = process.env.RANGE_TIME_SHOW_CONNECTION_INTERVIEW

export default defineComponent({
  setup() {
    const router = useRouter()

    return {
      router,
    }
  },
  data: () => ({}),
  props: {
    interview: {
      type: Object,
      required: true
    },
    loadInterview: {
      type: Function,
      required: true
    }
  },
  computed: {
    checkCallLiberation() {
      let [datePart, timePart] = this.interview.startingAt.toString().split("T")
      let [year, month, day,] = datePart.split("-")
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
        '&userRole=' + 'ROLE_RECRUITER'
    },
    getSocialNetworking() {
      return this.interview.candidate.socialNetworking
    },
    getScore() {
      return this.interview.score
    },
    getCandidateName() {
      return this.interview.candidate.firstName
    },
    getAppointmentDate() {
      if (this.interview.startingAt) {
        const startingAt = new Date(this.interview.startingAt)
        const day = String(startingAt.getDate()).padStart(2, '0')
        const month = String(startingAt.getMonth() + 1).padStart(2, '0')
        const year = startingAt.getFullYear()
        const hours = String(startingAt.getHours()).padStart(2, '0')
        const minutes = String(startingAt.getMinutes()).padStart(2, '0')

        const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`
        return formattedDateTime.toString()
      } else {
        return null
      }
    },
    getInterviewId() {
      return this.interview.id.toString()
    },
    getCompanyName() {
      return this.interview.manager.companyName.toString()
    },
    getInterviewStatus() {
      return InterviewStatus[this.interview.interviewStatus]
    },
    getStatusColor() {
      switch (InterviewStatus[this.interview.interviewStatus]) {
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
    },
    getObservation() {
      return this.interview.recruiterObservation.toString()
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

.status-pill {
  background-color: v-bind(getStatusColor);
}

.link-personalizado {
  color: #f6709f;
}
</style>

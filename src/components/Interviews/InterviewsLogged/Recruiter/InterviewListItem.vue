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
    <a :href="getSocialNetworking" target="_blank" class="text-gray-900 whitespace-no-wrap m-auto link-personalizado">
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
    </p>
  </td>
  <td class="td-container">
    <span class="relative inline-block px-3 py-1 font-semi-bold leading-tight">
      <span class="absolute inset-0 status-pill opacity-50 rounded-full"></span>
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
<!--    TODO("[ADICIONAR AQUI AS CONDIÇÕES PARA VALIDAR AS AÇÕES]")-->
    <p v-if="getInterviewStatus === 'SCHEDULE'" class="text-gray-900 whitespace-no-wrap m-auto">
      <button
        class="hover:bg-brand-main text-brand-main font-semi-bold hover:text-white py-2 px-4 hover:border-transparent rounded">
        EXEMPLO
      </button>
    </p>
  </td>
</template>

<script>
import {defineComponent} from "vue";
import InterviewStatus from "@/components/Interviews/InterviewStatus";
import {useRouter} from 'vue-router'

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
      id: String,
      companyName: String,
      appointmentDate: String,
      interviewStatus: String,
      score: String
    }
  },
  computed: {
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

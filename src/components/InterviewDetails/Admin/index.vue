<template>
  <div class="">
    <section class="relative block" style="height: 500px;">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style='background-image: url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80");'
      >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
      </div>
      <div
        class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style="height: 70px;"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <polygon
            class="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
    <section class="relative py-16 bg-gray-300">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div
                class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
              >
              </div>
              <div
                class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
              >
                <div class="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    v-if="state.interview.editable === false"
                    class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    style="transition: all 0.15s ease 0s;"
                    type="button"
                    @click="handleBackInterviews"
                  >
                    Voltar
                  </button>
                  <button
                    v-if="state.interview.editable === false"
                    class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    style="transition: all 0.15s ease 0s;"
                    type="button"
                    @click="handleEditInterview"
                  >
                    Editar
                  </button>
                  <button
                    v-if="state.interview.editable === true"
                    class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    style="transition: all 0.15s ease 0s;"
                    type="button"
                    @click="handleEditInterview"
                  >
                    Cancelar
                  </button>
                  <button
                    v-if="state.interview.editable === true"
                    class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    style="transition: all 0.15s ease 0s;"
                    type="button"
                    @click="handleUpdateInterview"
                  >
                    Salvar
                  </button>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1">

              </div>
            </div>
            <div class="text-center mt-12">
              <h3
                class="text-4xl font-semibold leading-normal text-gray-800 mb-2"
              >
                {{ state.interview.candidateName }}
              </h3>
              <div
                class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase"
              >
                <i
                  class="fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                ></i>
                Entrevistado para <i class=" flex-wrap text-black">{{ state.interview.companyName }}</i>
              </div>
              <div class="mb-5 text-gray-700 mt-10 text-left">
                <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                <span class="font-semibold">Código da entrevista:</span> {{ state.interview.id }}
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-7 gap-3">
                <div>
                  <label class="font-semibold" for="coluna1">Criado em:</label>
                  <p id="coluna1" class="text-brand-main">{{ state.interview.createdAt }}</p>
                </div>
                <div>
                  <label class="font-semibold" for="coluna2">Atualizado em:</label>
                  <p id="coluna2" class="text-brand-main">{{ state.interview.updatedAt }}</p>
                </div>
                <div>
                  <label class="font-semibold" for="coluna3">Recrutador:</label>
                  <p
                    v-if="state.interview.recruiter"
                    id="coluna3" class="text-brand-main">{{ state.interview.recruiter }}
                  </p>
                  <p
                    v-else
                    id="coluna7" class="text-brand-info">
                    Aguardando
                  </p>
                </div>
                <div>
                  <label class="font-semibold" for="coluna4">Gerente:</label>
                  <p
                    v-if="state.interview.managerName"
                    id="coluna4" class="text-brand-main">{{ state.interview.managerName }}
                  </p>
                  <p
                    v-else
                    id="coluna7" class="text-brand-info">
                    Aguardando
                  </p>
                </div>
                <div>
                  <label class="font-semibold" for="coluna5">Candidato presente:</label>
                  <p
                    v-if="state.interview.candidatePresent"
                    id="coluna5" class="text-brand-main">{{ state.interview.candidatePresent }}
                  </p>
                  <p
                    v-else
                    id="coluna7" class="text-brand-info">
                    Aguardando
                  </p>
                </div>
                <div>
                  <label class="font-semibold" for="coluna6">Recrutador presente:</label>
                  <p
                    v-if="state.interview.recruiterPresent"
                    id="coluna5" class="text-brand-main">{{ state.interview.recruiterPresent }}
                  </p>
                  <p
                    v-else
                    id="coluna7" class="text-brand-info">
                    Aguardando
                  </p>
                </div>
                <div>
                  <label class="font-semibold" for="coluna7">Agendada para:</label>
                  <p
                    v-if="state.interview.startingAt"
                    id="coluna7" class="text-brand-main">
                    {{ state.interview.startingAt }}
                  </p>
                  <p
                    v-else
                    id="coluna7" class="text-brand-info">
                    Aguardando
                  </p>
                </div>
              </div>
              <div v-if="state.interview.editable === false">
                <div class="border-t mt-1"></div>
                <div class="mt-5 border-gray-300 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-0 text-lg leading-relaxed text-gray-800">
                        <label for="interviewID"><strong>Observações para o recrutador</strong></label>
                        <br>
                      <p v-if="state.interview.recruiterObservation.value">
                        {{ state.interview.recruiterObservation.value }}
                      </p>
                      <p v-else class="text-brand-info py-5">Sem informações no momento</p>
                    </div>
                  </div>
                  <div class="border-t"></div>
                </div>
                <div class="mb-2 mt-5 text-gray-700">
                  <p class="mb-4 text-lg leading-relaxed text-gray-800">
                    <label for="interviewID"><strong>Observações para a empresa</strong></label>
                    <br>
                  <p v-if="state.interview.managerObservation.value">
                    {{ state.interview.managerObservation.value }}
                  </p>
                  <p v-else class="text-brand-info py-5">Sem informações no momento</p>
                  <div class="border-t"></div>
                </div>
                <div class="mb-2 mt-5 text-gray-700">
                  <p class="mb-4 text-lg leading-relaxed text-gray-800">
                  <p class="mb-4 text-lg leading-relaxed text-gray-800">
                    <label for="interviewID"><strong>Observações para o candidato</strong></label>
                    <br>
                  <p v-if="state.interview.managerObservation.value">
                    {{ state.interview.candidateObservation.value }}
                  </p>
                  <p v-else class="text-brand-info py-5">Sem informações no momento</p>
                </div>
              </div>
              <div class="border-t">
                <label class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white" for="interviewStatus">
                  Status da entrevista
                </label>
                <label
                  v-if="state.interview.editable === false"
                  id="interviewStatus"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {{ state.interview.status.value }}
                </label>
                <select
                  v-if="state.interview.editable === true"
                  id="interviewStatus"
                  v-model="state.interview.statusSelected.value"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="status in state.statusList" :value="status" v-bind:key="status">{{ status }}</option>
                </select>
              </div>
              <div
                v-if="state.interview.editable === false"
                class="mb-2 mt-5 border-t text-gray-700">
                <i class="fas mt-3 fa-university mr-2 text-lg text-gray-500"></i
                >Pontuação:
                <label class="ml-5" type="number">{{ state.interview.score.value }}</label>
              </div>
            </div>
            <div class="py-5 border-t"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {useRoute, useRouter} from "vue-router";
import {useToast} from "vue-toastification";
import {useField} from "vee-validate";
import {validateEmptyScore, validateInterviewObservations} from "@/utils/validators";
import {reactive} from "vue";
import services from "@/services";
import InterviewStatus from "@/components/commons/InterviewStatus";
import moment from 'moment'
import router from "@/router";
import {dateFormatting, formattingBoolean, getName} from "@/components/commons/utils";

export default {
  methods: {
    router() {
      return router
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const toast = useToast()

    const {
      value: managerObservationValue,
      errorMessage: managerObservationErrorMessage
    } = useField('managerObservation', validateInterviewObservations)

    const {
      value: recruiterObservationValue,
      errorMessage: recruiterObservationErrorMessage
    } = useField('recruiterObservation', validateInterviewObservations)

    const {
      value: candidateObservationValue,
      errorMessage: candidateObservationErrorMessage
    } = useField('candidateObservation', validateInterviewObservations)

    const {
      value: scoreValue,
      errorMessage: scoreErrorMessage
    } = useField('score', validateEmptyScore)

    const {
      value: statusValue,
      errorMessage: statusErrorMessage
    } = useField('status')

    const {
      value: statusSelectedValue,
      errorMessage: statusSelectedErrorMessage
    } = useField('statusSelected')

    const state = reactive({
      statusList: InterviewStatus,
      mostrarFormulario: false,
      hasErrors: false,
      interview: {
        editable: false,
        createdAt: String,
        updatedAt: String,
        recruiter: String,
        id: Number,
        candidateName: String,
        managerName: String,
        companyName: String,
        startingAt: String,
        candidatePresent: String,
        recruiterPresent: String,
        score: {
          value: scoreValue,
          errorMessage: scoreErrorMessage
        },
        managerObservation: {
          value: managerObservationValue,
          errorMessage: managerObservationErrorMessage
        },
        recruiterObservation: {
          value: recruiterObservationValue,
          errorMessage: recruiterObservationErrorMessage
        },
        candidateObservation: {
          value: candidateObservationValue,
          errorMessage: candidateObservationErrorMessage
        },
        status: {
          value: statusValue,
          errorMessage: statusErrorMessage
        },
        statusSelected: {
          value: statusSelectedValue,
          errorMessage: statusSelectedErrorMessage
        }
      }
    });

    async function handleGetInterview() {
      toast.clear()
      const id = route.params.id
      const {
        errors,
        data
      } = await services.interview.getInterviewById({
        id
      })
      if (errors) {
        toast.error('Ocorreu um erro ao carregar a entrevista')
      }
      state.hasErrors = false
      if (!errors) {
        state.interview.id = data.id
        state.interview.candidateName = getName(data.candidate)
        state.interview.managerName = getName(data.manager)
        state.interview.companyName = data.manager.companyName
        state.interview.startingAt = dateFormatting(data.startingAt)
        state.interview.score.value = data.score
        state.interview.recruiterObservation.value = data.recruiterObservation
        state.interview.managerObservation.value = data.managerObservation
        state.interview.candidateObservation.value = data.candidateObservation
        state.interview.status.value = getInterviewStatusText(data.interviewStatus)
        state.interview.createdAt = dateFormatting(data.createdAt)
        state.interview.updatedAt = dateFormatting(data.updatedAt)
        state.interview.recruiter = getName(data.recruiter)
        state.interview.candidatePresent = formattingBoolean(data.candidatePresent)
        state.interview.recruiterPresent = formattingBoolean(data.recruiterPresent)
      }
    }

    function validateFormInterviewEdit() {
      if (
        !state.interview.status.value
      ) {
        toast.info("Você deve escolher um status para atualizar a entrevista")
        return false
      }
      return true
    }

    async function handleUpdateInterview() {
      if (!validateFormInterviewEdit()) return
      handleEditInterview()
      const {erros} = await services.interview.adminUpdateInterviewStatus({
          id: state.interview.id,
          interviewStatus: getInterviewStatusKey(state.interview.statusSelected.value)
        }
      )
      if (erros) {
        toast.error("Erro ao salvar avaliação da entrevista, por favor tente novamente mais tarde")
      } else {
        await handleGetInterview()
        toast.success("Informações foram salvas com sucesso")
      }

    }

    function handleEditInterview() {
      return state.interview.editable = !state.interview.editable
    }

    function getInterviewStatusText(interviewStatus) {
      for (let key in InterviewStatus) {
        if (key === interviewStatus) {
          return InterviewStatus[key]
        }
      }
      return null
    }

    function getInterviewStatusKey(interviewStatusText) {
      for (let key in InterviewStatus) {
        if (InterviewStatus[key] === interviewStatusText) {
          return key
        }
      }
      return null
    }

    async function handleBackInterviews() {
      await router.push({name: 'Interviews'})
    }

    handleGetInterview()
    return {
      handleUpdateInterview,
      handleEditInterview,
      handleBackInterviews,
      state
    }
  }
}
</script>

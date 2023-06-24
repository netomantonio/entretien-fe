<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
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
              <div class="mb-2 text-gray-700 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                >Código da entrevista : {{ state.interview.id }}
              </div>
              <div class="mt-10 py-10 border-t border-gray-300 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-gray-800">
                      <label for="interviewID"><strong>Observações para você</strong></label>
                      <br>
                      {{ state.interview.recruiterObservation.value }}
                    </p>
                    <div class="border-t"></div>
                  </div>
                </div>
              </div>
              <div class="mb-2 text-gray-700">
                <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                >Observações para a empresa:
                <textarea v-model="state.interview.managerObservation.value"
                          class="resize w-full h-40 border rounded border-brand-main focus:border-deeppink-300"></textarea>
                <span
                  v-if="!!state.interview.managerObservation.errorMessage"
                  class="block font-medium text-brand-danger"
                >
                      {{ state.interview.managerObservation.errorMessage }}
                </span>
              </div>
              <div class="mb-2 text-gray-700">
                <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                >Observações para o candidato:
                <textarea v-model="state.interview.candidateObservation.value"
                          class="resize w-full h-40 border rounded border-brand-main focus:border-deeppink-300"></textarea>
                <span
                  v-if="!!state.interview.candidateObservation.errorMessage"
                  class="block font-medium text-brand-danger"
                >
                      {{ state.interview.candidateObservation.errorMessage }}
                </span>
              </div>
              <div class="border-t">
                <label class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white" for="interviewStatus">Escolha o status da entrevista
                </label>
                <select id="interviewStatus"
                        v-model="state.interview.statusSelected.value"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="status in state.statusList" :value="status">{{ status }}</option>
                </select>
              </div>
              <div class="mb-2 mt-5 border-t text-gray-700">
                <i class="fas mt-3 fa-university mr-2 text-lg text-gray-500"></i
                >Pontuação:
                <input v-model="state.interview.score.value" class="ml-5" type="number">
                <span
                  v-if="!!state.interview.score.errorMessage"
                  class="block font-medium text-brand-danger"
                >
                      {{ state.interview.score.errorMessage }}
                </span>
              </div>
              <button
                class="bg-pink-500 mt-5 mb-5 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2"
                style="transition: all 0.15s ease 0s;"
                type="button"
                @click="handleUpdateInterview"
              >
                Salvar
              </button>
            </div>
            <div class="py-5 border-t"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderLogged from "@/components/HeaderLogged/index.vue"
import services from "@/services";
import {useToast} from "vue-toastification";
import {reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useField} from "vee-validate";
import {validateEmptyScore, validateInterviewObservations} from "@/utils/validators";
import InterviewStatusListByRecruiterEdit from "@/views/interviewDetails/InterviewStatusListByRecruiterEdit";

export default {
  components: {
    HeaderLogged,
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
      value: statusSelectedValue,
      errorMessage: statusSelectedErrorMessage
    } = useField('statusSelected')

    const state = reactive({
      statusList: InterviewStatusListByRecruiterEdit,
      mostrarFormulario: false,
      hasErrors: false,
      interview: {
        id: Number,
        candidateName: String,
        managerName: String,
        companyName: String,
        startingAt: String,
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
        state.interview.candidateName = data.candidate.firstName + ' ' + data.candidate.lastName
        state.interview.managerName = data.manager.firstName
        state.interview.companyName = data.manager.companyName
        state.interview.startingAt = data.startingAt
        state.interview.score.value = data.score
        state.interview.recruiterObservation.value = data.recruiterObservation
        state.interview.managerObservation.value = data.managerObservation
        state.interview.candidateObservation.value = data.candidateObservation
      }
      new Promise(resolve => setTimeout(resolve, 5000))
    }

    function validateFormInterviewEdit() {
      if (
        !state.interview.candidateObservation.value ||
        !state.interview.managerObservation.value ||
        !state.interview.recruiterObservation.value ||
        !state.interview.score.value ||
        !state.interview.statusSelected.value
      ) {
        toast.info("Todos os campos devem estar preenchidos corretamente")
        return false
      }
      return true
    }

    function getInterviewStatus() {
      for (let key in InterviewStatusListByRecruiterEdit) {
        if (InterviewStatusListByRecruiterEdit[key] === state.interview.statusSelected.value) {
          return key
        }
      }
      return null
    }

    async function handleUpdateInterview() {
      if (!validateFormInterviewEdit()) return
      const {erros} = await services.interview.updateInterview({
          id: state.interview.id,
          candidateObservation: state.interview.candidateObservation.value,
          managerObservation: state.interview.managerObservation.value,
          score: state.interview.score.value,
          interviewStatus: getInterviewStatus()
        }
      )
      if (erros) {
        toast.error("Erro ao salvar avaliação da entrevista, por favor tente novamente mais tarde")
      } else {
        toast.success("Informações foram salvas com sucesso")
        await router.push({name: 'Interviews'})
      }

    }

    handleGetInterview()
    return {
      handleUpdateInterview,
      state
    }
  }
}

</script>
<style scoped>

</style>

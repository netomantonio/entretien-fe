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
          version="1.1"
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
                    @click="handleUpdateInterview"
                    class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    style="transition: all 0.15s ease 0s;"
                    type="button"
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
                class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
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
                >Entrevista - {{ state.interview.id }}
              </div>
              <div class="mb-2 text-gray-700">
                <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                >Observações para a empresa:
                <textarea v-model="state.interview.managerObservation" class="resize w-full h-40 border rounded border-brand-main focus:border-deeppink-300"></textarea>
              </div>
              <div class="mb-2 text-gray-700">
                <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                >Observações para o candidato:
                <textarea v-model="state.interview.candidateObservation" class="resize w-full h-40 border rounded border-brand-main focus:border-deeppink-300"></textarea>
              </div>
              <div class="mb-2 text-gray-700">
                <i class="fas fa-university mr-2 text-lg text-gray-500"></i
                >Pontuação:
                <input type="number" class="ml-5" v-model="state.interview.score">
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-gray-300 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-gray-800">
                    <label for="interviewID"><strong>Observações para você</strong></label><br>
                    {{ state.interview.recruiterObservation }}
                  </p>
                </div>
              </div>
            </div>
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
import {useRoute} from "vue-router";
import {InterviewEditByRecruiter} from "./InterviewEditByRecruiter"

export default {
  components: {
    HeaderLogged,
  },
  setup() {
    const route = useRoute()
    const toast = useToast()

    const state = reactive({
      mostrarFormulario: false,
      hasErrors: false,
      interview: InterviewEditByRecruiter
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
      if (!errors)
        state.interview = new InterviewEditByRecruiter(
          data.id,
          data.candidate.firstName +' '+ data.candidate.lastName,
          data.manager.firstName,
          data.manager.companyName,
          data.startingAt,
          data.score,
          data.recruiterObservation,
          data.managerObservation,
          data.candidateObservation
        )
      new Promise(resolve => setTimeout(resolve, 5000))
    }

    async function handleUpdateInterview() {

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

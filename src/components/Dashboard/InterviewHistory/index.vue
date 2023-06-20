<template>
  <div v-if="state.interviews" class="justify-center w-full mr-5 pr-5">
    <div class="flex m-0 p-0">
      <font-awesome-icon icon="clock-rotate-left" class="text-gray-600 text-xl mr-2 mt-1"/>
      <h5 class="text-gray-600 text-lg">Histórico</h5>
    </div>
    <div class="rounded-md w-full">
      <div>
        <div class="sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
              <tr class="border-b-2 border-gray-200">
                <th
                  class="px-5 py-3  bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Empresa
                </th>
                <th
                  class="border-b-2 border-gray-200 bg-gray-100">
                </th>
                <th
                  class="px-5 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Recruiter
                </th>
                <th
                  class="px-5 py-3 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Data de realização
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="interview in state.interviews" v-bind:key="interview.id">
                <InterviewListItem :interview="interview"></InterviewListItem>
              </tr>
              </tbody>
            </table>
            <div v-if="state.interviews.length === 0" class="flex-1 text-gray-600 py-5 text-center">Você ainda não
              concluiu nenhuma entrevista.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import InterviewListItem from "@/components/Interviews/InterviewsLogged/Candidate/InterviewListItem.vue";
import services from '@/services'
import {getGlobalLoading} from "@/store/global";

export default defineComponent({
    components: {
      InterviewListItem
    },
    setup() {
      const state = reactive({
        hasErrors: false,
        interviews: null,
        isLoading: getGlobalLoading(),
      });

      async function loadInterview() {
        const {data} = await services.interview.getInterviewsByCandidate()
        state.interviews = data.interviews.filter(interview => interview.status == "CONCLUDED")
      }

      loadInterview()
      return {
        state: {
          interviews: []
        }
      }
    }
  }
)

</script>

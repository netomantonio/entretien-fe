<template>
  <div class="flex justify-center w-full">
    <br/>
    <!--  List Container  -->
    <div class="p-8 rounded-md w-full">
      <!--   Header   -->

      <div class="flex items-center justify-between pb-6 w-full">
        <div class="flex-1">
          <div>
            <h2 class="text-gray-600 font-semibold">Entrevistas</h2>
          </div>
        </div>
      </div>
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
              <tr>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Identificador
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Candidato
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Empresa
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Observação
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Data agendada
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Pontuação
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ações
                </th>
                <th
                  class="border-b-2 border-gray-200 bg-gray-100">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="interview in state.interviews" v-bind:key="interview.id">
                <InterviewListItem :interview="interview" @videoCall="handleVideoCall"  load-interview=""></InterviewListItem>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {reactive} from "vue";
import HeaderLogged from "@/components/HeaderLogged/index.vue";
import Icon from "@/components/Icon/index.vue";
import {getGlobalLoading} from "@/store/global";
import services from "@/services";
import InterviewListItem from "@/components/Interviews/InterviewsLogged/Recruiter/InterviewListItem.vue";

export default {
  components: {
    HeaderLogged,
    InterviewListItem,
    Icon
  },
  setup() {
    const state = reactive({
      mostrarFormulario: false,
      hasErrors: false,
      interviews: null,
      isLoading: getGlobalLoading(),
    });

    async function loadInterview() {
      const {data} = await services.interview.getInterviewsByRecruiter()
      state.interviews = data
    }

    loadInterview()

    //
    return {
      state,
      loadInterview
    }
  }
}
</script>

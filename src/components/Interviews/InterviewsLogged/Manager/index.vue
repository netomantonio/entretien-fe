<template>
  <div class="flex justify-center w-full p-5">
    <br/>
    <!--  List Container  -->
    <div class="p-8 rounded-md w-full">
      <!--   Header   -->
      <div class="flex items-center justify-between pb-6">
        <div>
          <h2 class="text-gray-600 font-semi-bold">Entrevistas</h2>
        </div>
        <div class="flex items-center justify-between">
          <div class="lg:ml-40 ml-10 space-x-8">
            <button class="bg-brand-main px-4 py-2 rounded-md text-white font-semi-bold tracking-wide cursor-pointer" @click="() => handleInterviewCreate()">
              Nova entrevista
            </button>
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
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Candidato
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  OBS.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Data de criação
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semi-bold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th
                  class="border-b-2 border-gray-200 bg-gray-100">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="interview in interviews" v-bind:key="interview.id">
                <InterviewListItem :interview="interview"></InterviewListItem>
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
import {defineComponent} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HeaderLogged from "@/components/HeaderLogged/index.vue";
import InterviewListItem from "@/components/Interviews/InterviewsLogged/Manager/InterviewListItem.vue";
import services from '@/services'
import ModalInterviewCreate from "@/components/ModalInterviewCreate/index.vue";
import useModal from "@/hooks/useModal";

export default defineComponent({
  components: {
    HeaderLogged,
    InterviewListItem,
    ModalInterviewCreate
  },
  setup() {

    const modal = useModal()

    function handleInterviewCreate() {
      modal.open({
        component: 'ModalInterviewCreate'
      })
    }

    //
    return {
      handleInterviewCreate
    }
  },
  data: () => ({
    interviews: null
  }),
  methods: {
    handleEvents(events) {
      this.currentEvents = events
    },
    async loadInterview() {
      let data = await services.interview.getInterviewsByManager()
      return data.data
    }
  },
  mounted() {
    this.loadInterview()
      .then(value => {
        this.interviews = value
      })
  }
})

</script>

<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <header-logged/>
  </div>
  <div class="flex justify-center w-full p-5">
    <br/>
    <!--  List Container  -->
    <div class="p-8 rounded-md w-full">
      <!--   Header   -->
      <div class="flex items-center justify-between pb-6">
        <div>
          <h2 class="text-gray-600 font-semibold">Entrevistas</h2>
          <!--          <span class="text-xs">All products item</span>-->
        </div>
        <div class="flex items-center justify-between">
          <!--          <div class="flex bg-gray-50 items-center p-2 rounded-md">-->
          <!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"-->
          <!--                 fill="currentColor">-->
          <!--              <path fill-rule="evenodd"-->
          <!--                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"-->
          <!--                    clip-rule="evenodd"/>-->
          <!--            </svg>-->
          <!--            <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search...">-->
          <!--          </div>-->
          <div class="lg:ml-40 ml-10 space-x-8">
            <!--            <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New-->
            <!--              Report-->
            <!--            </button>-->
            <button class="bg-brand-main px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer" @click="() => handleInterviewCreate()">
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
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Candidato
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  OBS.
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Data de criação
                </th>
                <th
                  class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
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
            <!--            <div-->
            <!--              class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">-->
            <!--              <span class="text-xs xs:text-sm text-gray-900">-->
            <!--                Showing 1 to 4 of 50 Entries-->
            <!--              </span>-->
            <!--              <div class="inline-flex mt-2 xs:mt-0">-->
            <!--                <button-->
            <!--                  class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">-->
            <!--                  Prev-->
            <!--                </button>-->
            <!--                &nbsp; &nbsp;-->
            <!--                <button-->
            <!--                  class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">-->
            <!--                  Next-->
            <!--                </button>-->
            <!--              </div>-->
            <!--            </div>-->
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
import InterviewListItem from "@/components/Interviews/InterviewListItem.vue";
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

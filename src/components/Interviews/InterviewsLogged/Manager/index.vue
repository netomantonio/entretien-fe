<template>
  <div class="flex justify-center w-full p-5">
    <br/>
    <!--  List Container  -->
    <div class="p-8 rounded-md w-full">
      <!--   Header   -->

      <div class="flex items-center justify-between pb-6 w-full">
        <div class="flex-1">
          <div>
            <h2 class="text-gray-600 font-semi-bold">Entrevistas</h2>
          </div>
        </div>
        <div v-if="!state.mostrarFormulario">
          <button class="bg-brand-main px-4 py-2 rounded-md text-white font-semi-bold tracking-wide cursor-pointer"
                  @click="state.mostrarFormulario = true">
            Nova entrevista
          </button>
        </div>
        <create-new-interview :handle-interview-create="handleInterviewCreate" :state="state" :valide-cpf="valideCpf"/>
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
                <th
                  class="border-b-2 border-gray-200 bg-gray-100">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="interview in state.interviews" v-bind:key="interview.id">
                <InterviewListItem :interview="interview" @delete="handleDelete"></InterviewListItem>
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
import {defineComponent, reactive} from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import HeaderLogged from "@/components/HeaderLogged/index.vue";
import InterviewListItem from "@/components/Interviews/InterviewsLogged/Manager/InterviewListItem.vue";
import services from '@/services'
import Icon from "@/components/Icon/index.vue";
import {getGlobalLoading, setGlobalLoading} from "@/store/global";
import {useToast} from "vue-toastification";
import {useField} from "vee-validate";
import CreateNewInterview from "@/components/Interviews/InterviewsLogged/Manager/CreateNewInterview.vue";

export default defineComponent({
    components: {
      CreateNewInterview,
      HeaderLogged,
      InterviewListItem,
      Icon
    },
    setup() {

      const toast = useToast()

      function valideCpf() {
        if (!state.cpf.value) {
          state.hasErrors = true
          return
        }
        return true
      }

      const {
        value: cpfValue,
        errorMessage: cpfErrorMessage
      } = useField('cpf')
      // } = useField('cpf', validateCpf)

      const {
        value: observationValue,
        errorMessage: observationErrorMessage
      } = useField('observation')
      // } = useField('observation', validateInterviewObservation)

      const state = reactive({
        mostrarFormulario: false,
        hasErrors: false,
        interviews: null,
        isLoading: getGlobalLoading(),
        cpf: {
          value: cpfValue,
          errorMessage: cpfErrorMessage
        },
        observation: {
          value: observationValue,
          errorMessage: observationErrorMessage
        }
      });
      async function handleInterviewCreate() {
        toast.clear()
        // setGlobalLoading(true)
        if (state.hasErrors) {
          toast.error('Todos os campos devem estar preenchidos')
          setGlobalLoading(false)
        }

        const {
          errors
        } = await services.interview.createInterview({
          cpf: state.cpf.value,
          observation: state.observation.value
        })
        if (errors) {
          toast.error('Ocorreu um erro ao criar a entrevista')
        }
        setGlobalLoading(false)
        state.hasErrors = false
        if (!errors)
          toast.success('Entrevista criada!')
        new Promise(resolve => setTimeout(resolve, 5000))
        state.mostrarFormulario = false
        state.cpf.value = ""
        state.observation.value = ""
        await loadInterview()
      }

      async function loadInterview() {
        const {data} = await services.interview.getInterviewsByManager()
        state.interviews = data
      }


      async function handleDelete(id){
        toast.clear()
        const {
          errors
        } = await services.interview.deleteInterview({
          id
        })
        if (errors) {
          toast.error('Ocorreu um erro ao deletar a entrevista')
        }
        setGlobalLoading(false)
        state.hasErrors = false
        if (!errors)
          toast.success('Entrevista excluída!')
        new Promise(resolve => setTimeout(resolve, 5000))
        await loadInterview()
      }

      loadInterview()

      //
      return {
        handleInterviewCreate,
        handleDelete,
        state,
        valideCpf
      }
    }
  }
)

</script>

<template>
  <div class='flex-column'>
    <div class="flex grow-0">
      <font-awesome-icon icon="circle-exclamation" class="text-gray-600 text-xl mr-2 mt-1"/>
      <h5 v-if="props.data.nextInterview" class="text-gray-600 text-lg">Próxima entrevista</h5>
      <h5 v-else class="text-gray-600 text-lg">Fique atento!</h5>
    </div>
    <div v-if="props.data.nextInterview" class="flex">
      <div>
        <span class="text-9xl font-bold">{{props.data.nextInterview.startingAt.split("T")[0].slice(5).replaceAll("-", "/")}}</span>
      </div>
      <div class="flex-col align-self-center mt-3 ml-5">
        <div class="self-end ">
          <span class="text-sm">Horário:</span>
        </div>
        <div class="self-end">
          <span class="text-3xl"> {{ props.data.nextInterview.startingAt.split("T")[1].slice(0, 5) }} </span>
        </div>
      </div>
    </div>
    <div v-if="props.data.resumeLastInterview" class="mt-3 text-gray-600 flex">
      <span>Última atualização do cúrriculo em </span><span class="font-bold ml-1">{{new Date(props.data.resumeLastInterview).toLocaleDateString() }}</span>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const props = defineProps({
  data: {},
})

</script>
<style>

</style>

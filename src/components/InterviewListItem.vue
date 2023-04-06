<template>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <!--                <td class="px-5 py-5 border-b border-gray-200 bg-black text-sm">-->
      <div class="flex items-center">
        <div class="flex-shrink-0 w-10 h-10">
          <img class="w-full h-full rounded-full"
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
               alt=""/>
        </div>
        <div class="ml-3">
          <p class="text-gray-900 whitespace-no-wrap">
            {{interview.candidate.firstName + ' ' + interview.candidate.lastName}}
          </p>
        </div>
      </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
            {{interview.managerObservation}}
      </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
            {{interview.createdAt}}
      </p>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                              class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>

									<span class="relative">{{interview.interviewStatus}}</span>
									</span>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
        <button class="bg-gray-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
          Editar
        </button>
      </p>
    </td>
</template>


<script>
import {defineComponent} from "vue";

export default defineComponent({
  data: () => ({}),
    props: ['interview']
  })
</script>

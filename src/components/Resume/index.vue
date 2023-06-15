<template>
  <div class="w-full">
    <div v-if="state.resume">
      <div class="p-5 mx-5 flex-1 w-full">
        <div class="w-full mt-5">
          <h2 class="">Currículo</h2>
        </div>
        <div>

        </div>
        <!-- Professional experience -->
        <div v-if="state.resume" class="w-full my-3 pt-5 border-t-2">
          <div class="flex">
            <font-awesome-icon icon="graduation-cap" class="text-gray-600 pt-0.5 mr-3 text-2xl"/>
            <h5 class="text-gray-600">Experiência Acadêmica</h5>
          </div>
          <div v-if="state.resume.academicEducation">
            <div v-for="(academicEducation, index) in state.resume.academicEducation" :key="index">
              <ResumeAcademicEducationListItem
                v-model="state.resume.academicEducation[index]"
                :index="index"
                :handleRemove="removeAcademicEducation"/>
            </div>
          </div>
          <button class="px-3 py-2 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
                  @click="addAcademicEducation">
            <font-awesome-icon icon="plus" class="text-white pt-0.5 text-2xl"/>
            <span class="group-hover:text-gray-700">Incluir</span>
          </button>
        </div>
        <!-- Professional experience -->
        <div class="w-full my-5 mt-5 pt-5 border-t-2">
          <div class="flex">
            <font-awesome-icon icon="briefcase" class="text-gray-600 pt-0.5 mr-3 text-2xl"/>
            <h4>Experiência profissional</h4>
          </div>
          <div v-if="state.resume">
            <div v-for="(professionalExperience, index) in state.resume.professionalExperience" :key="index">
              <ResumeProfessionalExperienceListItem
                v-model="state.resume.professionalExperience[index]"
                :index="index"
                :handleRemove="removeProfessionalExperience"/>
            </div>
          </div>
          <button class="px-3 py-2 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
                  @click="addProfessionalExperience">
            <font-awesome-icon icon="plus" class="text-white pt-0.5 text-2xl"/>
            <span class="group-hover:text-gray-700">Incluir</span>
          </button>
        </div>
        <!-- Languages -->
        <div class="w-full my-5 pt-5 border-t-2">
          <div class="flex">
            <font-awesome-icon icon="earth-america" class="text-gray-600 pt-0.5 mr-3 text-2xl"/>
            <h4>Lingua estrangeira</h4>
          </div>
          <div v-if="state.resume">
            <div v-for="(languages, index) in state.resume.languages" :key="index">
              <ResumeLanguageListItem
                v-model="state.resume.languages[index]"
                :index="index"
                :handleRemove="removeLanguages"/>
            </div>
          </div>
          <button class="px-3 py-2 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
                  @click="addLanguage">
            <font-awesome-icon icon="plus" class="text-white pt-0.5 text-2xl"/>
            <span class="group-hover:text-gray-700">Incluir</span>
          </button>
        </div>
        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Descartar alterações</button>
          <button type="submit"
                  @click="saveResumeChanges"
                  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Savar alterações
          </button>
        </div>
      </div>
    </div>
    <div v-else class="flex justify-center items-center py-80">
      <img class="h-10" src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"></div>
  </div>
</template>

<script setup>
import ResumeLanguageListItem from '@/components/Resume/ResumeLanguageListItem.vue'
import ResumeProfessionalExperienceListItem from '@/components/Resume/ResumeProfessionalExperienceListItem.vue'
import ResumeAcademicEducationListItem from '@/components/Resume/ResumeAcademicEducationListItem.vue'
import {LanguageProficiencyLevels} from "@/models/LanguageProficiencyLevels";
import {reactive, toRaw} from "vue";
import services from "@/services";
import {useToast} from 'vue-toastification'

const toast = useToast()
const state = reactive({resume: null})

async function getResume() {
  toast.clear()
  const {data, errors} = await services.resume.getMyResume()
  if(errors){
    toast.error("Não foi possível carregar seu currículo.")
    state.resume = {}
  } else {
    state.resume = data
    if (state.resume.languages) {
      state.resume.languages.forEach((language) => {
        language.languageProficiencyLevel = LanguageProficiencyLevels[language.languageProficiencyLevel]
      })
    }
  }
}

async function saveResumeChanges() {
  toast.clear()
  let resume = toRaw(state.resume)
  if (resume.languages) {
    resume.languages.forEach((language) => {
      language.languageProficiencyLevel = getLanguageLevel(language.languageProficiencyLevel)
    })
  }
  const {data, errors} = await services.resume.saveMyResume(resume)
  if (errors) {
    toast.error('Ocorreu um erro ao atualizar os dados de ')
  } else if (!errors) {
    toast.success('Entrevista agendada!')
    state.resume = data
    if (state.resume.languages) {
      state.resume.languages.forEach((language) => {
        language.languageProficiencyLevel = LanguageProficiencyLevels[language.languageProficiencyLevel]
      })
    }
  }
}

function addAcademicEducation() {
  toast.clear()
  if (state.resume.academicEducation) {
    state.resume.academicEducation.push({institution: '', courseName: '', ongoing: false, startedAt: '', endedAt: ''})
  } else {
    state.resume.academicEducation = []
    state.resume.academicEducation.push({institution: '', courseName: '', ongoing: false, startedAt: '', endedAt: ''})
  }
}

function removeAcademicEducation(index) {
  state.resume.academicEducation.splice(index, 1)
}

function addProfessionalExperience() {
  toast.clear()
  state.resume.professionalExperience.push({
    position: '',
    company: '',
    jobDescription: '',
    currentPosition: false,
    startedAt: '',
    endedAt: ''
  })
}

function removeProfessionalExperience(index) {
  state.resume.professionalExperience.splice(index, 1)
}

function addLanguage() {
  toast.clear()
  state.resume.languages.push({language: '', level: LanguageProficiencyLevels.ELEMENTARY})
}

function removeLanguages(index) {
  state.resume.languages.splice(index, 1)
}

function getLanguageLevel(language){
  switch (language){
    case "Primário":
      return "ELEMENTARY"
    case "Intermediário":
      return "INTERMEDIATE"
    case "Avançado":
      return "ADVANCED"
    case "Fluente":
      return "FLUENT"
    default:
      return "ELEMENTARY"
  }
}

getResume()

</script>

<style scoped>

</style>

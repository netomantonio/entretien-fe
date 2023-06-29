<template>
  <div class="justify-center items-center w-screen">
    <div class="p-11 mb-10" v-if="state.resume">
      <div class="pt-3 px-5 mx-4 flex-1 w-full">
        <div class="w-full mt-5">
          <h2 class="text-gray-600 font-semibold">Currículo</h2>
        </div>
        <div class="my-10 grid grid-cols-12 gap-x-6 gap-y-8">
          <div v-if="state.resume" class="col-span-4">
            <label class="mt-2 text-sm font-medium text-gray-900" for="language">Cargo Pretendido</label>
            <input v-model="state.resume.desiredJobTitle"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   type="text">
          </div>
          <div v-if="state.resume" class="col-span-10">
            <label class="mt-2 text-sm font-medium text-gray-900" for="language">Apresentação</label>
            <input v-model="state.resume.presentation"
                   class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   type="text">
          </div>
          <div v-if="state.resume.educationLevel" class="col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900" for="country">Escolaridade</label>
            <div class="mt-2">
              <select
                v-model="state.resume.educationLevel"
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option v-for="level in EducationLevels" v-bind:key="level">{{ level }}</option>
              </select>
            </div>
          </div>
        </div>
        <!-- Professional experience -->
        <div v-if="state.resume" class="w-full my-3 pt-5 border-t-2">
          <div class="flex">
            <font-awesome-icon class="action-icon-label text-gray-600 pt-0.5 mr-3 text-2xl" icon="graduation-cap"/>
            <h5 class="text-gray-600">Experiência Acadêmica</h5>
          </div>
          <div v-if="state.resume.academicEducation">
            <div v-for="(academicEducation, index) in state.resume.academicEducation" :key="index">
              <ResumeAcademicEducationListItem
                v-model="state.resume.academicEducation[index]"
                :handleRemove="removeAcademicEducation"
                :index="index"/>
            </div>
          </div>
          <button class="px-3 py-1 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
                  @click="addAcademicEducation">
            <font-awesome-icon class="action-icon-button text-white pt-0.5 text-2xl" icon="plus"/>
            <span class="group-hover:text-gray-700">Incluir</span>
          </button>
        </div>
        <!-- Professional experience -->
        <div class="w-full my-5 mt-5 pt-5 border-t-2">
          <div class="flex">
            <font-awesome-icon class="action-icon-label text-gray-600 pt-0.5 mr-3 text-2xl" icon="briefcase"/>
            <h4>Experiência profissional</h4>
          </div>
          <div v-if="state.resume">
            <div v-for="(professionalExperience, index) in state.resume.professionalExperience" :key="index">
              <ResumeProfessionalExperienceListItem
                v-model="state.resume.professionalExperience[index]"
                :handleRemove="removeProfessionalExperience"
                :index="index"/>
            </div>
          </div>
          <button class="px-3 py-1 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
                  @click="addProfessionalExperience">
            <font-awesome-icon class="action-icon-button text-white pt-0.5 text-2xl" icon="plus"/>
            <span class="group-hover:text-gray-700">Incluir</span>
          </button>
        </div>
        <!-- Languages -->
        <div class="w-full my-5 pt-5 border-t-2">
          <div class="flex">
            <font-awesome-icon class="action-icon-label text-gray-600 pt-0.5 mr-3 text-2xl" icon="earth-america"/>
            <h4>Lingua estrangeira</h4>
          </div>
          <div v-if="state.resume">
            <div v-for="(languages, index) in state.resume.languages" :key="index">
              <ResumeLanguageListItem
                v-model="state.resume.languages[index]"
                :handleRemove="removeLanguages"
                :index="index"/>
            </div>
          </div>
          <button class="px-3 py-1 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
                  @click="addLanguage">
            <font-awesome-icon class="action-icon-button text-white pt-0.5 text-2xl" icon="plus"/>
            <span class="group-hover:text-gray-700">Incluir</span>
          </button>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button class="text-sm font-semibold leading-6 text-gray-900" type="button">Descartar alterações</button>
        <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
                @click="saveResumeChanges">
          Savar alterações
        </button>
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
import {LanguageProficiencyLevels} from "@/models/LanguageProficiencyLevels"
import {EducationLevels} from "@/models/EducationLevels"
import {reactive, toRaw} from "vue"
import services from "@/services"
import {useToast} from 'vue-toastification'

const toast = useToast()
const state = reactive({resume: null})

async function getResume() {
  toast.clear()
  const {data, errors} = await services.resume.getMyResume()
  if (errors) {
    toast.error("Não foi possível carregar seu currículo.")
    state.resume = null
  } else {
    state.resume = data
    if (state.resume.languages) {
      state.resume.languages.forEach((language) => {
        language.languageProficiencyLevel = LanguageProficiencyLevels[language.languageProficiencyLevel]
      })
    }
    if (state.resume.educationLevel) {
      state.resume.educationLevel = EducationLevels[state.resume.educationLevel]
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
  resume.educationLevel = getEducationLevel(resume.educationLevel)
  const {data, errors} = await services.resume.saveMyResume(resume)
  if (errors) {
    toast.error('Ocorreu um erro ao atualizar os dados do currículo.')
  } else if (!errors) {
    toast.success('Currículo Atualizado!')
    state.resume = data
    if (state.resume.languages) {
      state.resume.languages.forEach((language) => {
        language.languageProficiencyLevel = LanguageProficiencyLevels[language.languageProficiencyLevel]
      })
    }
    if (state.resume.educationLevel) {
      state.resume.educationLevel = EducationLevels[state.resume.educationLevel]
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

function getLanguageLevel(language) {
  switch (language) {
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

function getEducationLevel(education) {
  switch (education) {
    case "Ensino Fundamental":
      return "ENSINO_FUNDAMENTAL"
    case "Ensino Médio":
      return "ENSINO_MEDIO"
    case "Graduação":
      return "GRADUACAO"
    case "Pós Graduação":
      return "POS_GRADUACAO"
    case "Mestrado":
      return "MESTRADO"
    case "Doutorado":
      return "DOUTORADO"
    default:
      return "Ensino Fundamental"
  }
}

getResume()

</script>

<style scoped>
.action-icon-button {
  height: 0.95rem;
}

.action-icon-label {
  height: 1.4rem;
}
</style>

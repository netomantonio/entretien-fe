<template>
  <div class="p-5 mx-5 flex-1 w-full">
    <div class="w-full mt-5">
      <h2 class="">Currículo</h2>
    </div>
    <!-- Professional experience -->
    <div class="w-full my-3 pt-5 border-t-2">
      <div class="flex">
        <font-awesome-icon icon="graduation-cap" class="text-gray-600 pt-0.5 mr-3 text-2xl"/>
        <h5 class="text-gray-600">Experiência Acadêmica</h5>
      </div>
      <div v-for="(academicEducation, index) in mockAcademicEducation" :key="index">
        <ResumeAcademicEducationListItem
          v-model="mockAcademicEducation[index]"
          :index="index"
          :handleRemove="removeAcademicEducation"/>
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
      <div v-for="(professionalExperience, index) in mockProfessionalExperience" :key="index">
        <ResumeProfessionalExperienceListItem
          v-model="mockProfessionalExperience[index]"
          :index="index"
          :handleRemove="removeProfessionalExperience"/>
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
      <div v-for="(languages, index) in mockLanguages" :key="index">
        <ResumeLanguageListItem
          v-model="mockLanguages[index]"
          :index="index"
          :handleRemove="removeLanguages"/>
      </div>
      <button class="px-3 py-2 mt-5 flex items-center space-x-4 rounded-md text-white group bg-brand-main"
              @click="addLanguage">
        <font-awesome-icon icon="plus" class="text-white pt-0.5 text-2xl"/>
        <span class="group-hover:text-gray-700">Incluir</span>
      </button>
    </div>
  </div>
</template>
<script setup>

import ResumeLanguageListItem from '@/components/Resume/ResumeLanguageListItem.vue'
import ResumeProfessionalExperienceListItem from '@/components/Resume/ResumeProfessionalExperienceListItem.vue'
import ResumeAcademicEducationListItem from '@/components/Resume/ResumeAcademicEducationListItem.vue'
import {LanguageProficiencyLevels} from "@/models/LanguageProficiencyLevels";
import {reactive} from "vue";

const mockLanguages = reactive([
  {language: 'Inglês', level: LanguageProficiencyLevels.INTERMEDIATE},
  {language: 'Francês', level: LanguageProficiencyLevels.ELEMENTARY}
])

const mockProfessionalExperience = reactive([
  {
    position: 'Estagiário',
    company: 'Google',
    jobDescription: '',
    currentPosition: true,
    startedAt: '2023-01-01',
    endedAt: null
  },
  {
    position: 'Estagiário',
    company: 'Facebook',
    jobDescription: '',
    currentPosition: false,
    startedAt: '2022-06-01',
    endedAt: '2022-12-10'
  }
])

const mockAcademicEducation = reactive([
  {
    institution: 'UFPR',
    courseName: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    ongoing: true,
    startedAt: '2021-02-26',
    endedAt: null
  },
  {
    institution: 'Unibrasil',
    courseName: 'Administração',
    ongoing: false,
    startedAt: '2018-05-07',
    endedAt: '2020-06-15'
  }
])

function addAcademicEducation() {
  mockAcademicEducation.push({institution: '', courseName: '', ongoing: false, startedAt: '', endedAt: ''})
}

function removeAcademicEducation(index) {
  mockAcademicEducation.splice(index, 1)
}

function addProfessionalExperience() {
  mockProfessionalExperience.push({
    position: '',
    company: '',
    jobDescription: '',
    currentPosition: false,
    startedAt: '',
    endedAt: ''
  })
}

function removeProfessionalExperience(index) {
  mockProfessionalExperience.splice(index, 1)
}

function addLanguage() {
  mockLanguages.push({language: '', level: LanguageProficiencyLevels.ELEMENTARY})
}

function removeLanguages(index) {
  mockLanguages.splice(index, 1)
}

</script>

<style scoped>

</style>

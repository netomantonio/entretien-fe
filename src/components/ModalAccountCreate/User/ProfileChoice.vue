<template>
  <div class="w-1/3 p-4">
    <label class="block mt-2">
      <span class="font-medium text-gray-800">Perfil</span>
      <select v-model="state.role"
              class="block w-full px-1 py-1 mt-1 bg-gray-100 border-1 border-transparent rounded">
        <option value="candidate">Candidato</option>
        <option value="recruiter">Recrutador</option>
        <option value="manager">Gestor</option>
      </select>
    </label>
  </div>
</template>
<script>
export default {
  name: 'ProfileChoice',
  props: {
    state: {}
  }
}
</script>
<style>

@media (min-width: 800px) {
}

</style>
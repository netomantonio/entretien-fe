<template>
  <td class="td-container">
    {{ props.user.firstName + " " + props.user.lastName }}
  </td>
  <td :class="`td-container text-${getUserTypeColor()}`">
    <font-awesome-icon icon="circle-user"/>
    {{getUserTypeName()}}
  </td>
  <td class="td-container">
    {{new Date(props.user.createdAt).toLocaleDateString()}}
  </td>
  <td class="td-container">
    {{new Date(props.user.updatedAt).toLocaleDateString()}}
  </td>
  <td class="td-container">
    {{props.user.email}}
  </td>
  <td class="td-container">
    {{getPhone()}}
  </td>
  <td class="td-container">
    {{getCpf()}}
  </td>
</template>

<script setup>
const props = defineProps({
  user: {}
})

function getUserTypeColor() {
  switch (props.user.roles[0].name) {
    case "ROLE_CANDIDATE":
      return "lightseagreen-500"
    case "ROLE_RECRUITER":
      return "cornflowerblue-500"
    case "ROLE_MANAGER":
      return "darkgoldenrod-500"
    case "ROLE_ADMIN":
      return "deeppink-600"
    default:
      return "gray-500"
  }
}

function getUserTypeName(){
  const roleName = props.user.roles[0].name.split("_")[1].toLowerCase()
  return roleName.charAt(0).toUpperCase() + roleName.slice(1)
}

function getPhone(){
  const phone = props.user.phone.replace(/\D/g,'')
  if(phone.match(/^ *$/) !== null)
    return "Indisponível"
  const toShow = phone.match(/(\d{2})(\d{5})(\d{4})/);
  return '(' + toShow[1] + ') ' + toShow[2] + '-' + toShow[3]
}

function getCpf(){
  const cpf = props.user.cpf.replace(/\D/g,'')
  if(cpf.match(/^ *$/) !== null)
    return " - "

  const toShow = cpf.match(/(\d{3})(\d{3})(\d{3})(\d{2})/);
  return toShow[1] + '. ' + toShow[2] + '.' + toShow[3] + '-' + toShow[4]
}

</script>

<style scoped>
.td-container {
  padding: 1rem 1rem;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
  border-bottom-width: 1px;
}
</style>

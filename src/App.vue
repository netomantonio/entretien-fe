<template>
  <router-view/>
  <ModalFactory/>
</template>

<script>
import ModalFactory from '@/components/ModalFactory'

export default {
  components: { ModalFactory }
}

</script>

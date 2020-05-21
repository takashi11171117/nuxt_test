<template>
  <div>
    <Mover />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Mover from '~/components/P5/Mover.vue'

export default defineComponent({
  components: {
    Mover
  },
  setup() {
    return {}
  }
})
</script>

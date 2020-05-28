<template>
  <div>
    <PolarGrids />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PolarGrids from '~/components/P5/PolarGrids.vue'

export default defineComponent({
  components: {
    PolarGrids
  },
  setup() {
    return {}
  }
})
</script>

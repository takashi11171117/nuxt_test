<template>
  <div />
</template>

<script lang="ts">
import P5 from 'p5'
import { defineComponent, onMounted } from '@vue/composition-api'
import Mover from '~/components/P5/ts/Mover.ts'

export default defineComponent({
  setup() {
    onMounted(() => {
      // eslint-disable-next-line no-new
      new P5(Mover)
    })
    return {}
  }
})
</script>

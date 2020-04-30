<template>
  <div>
    <div>
      <p>count:{{ count }}</p>
      <button @click="increment">Count Up</button>
      <button @click="decrement">Count Down</button>
      <p>double count:{{ double }}</p>
      <p>samples:{{ samples }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, watch } from '@vue/composition-api'
import { counterStore } from '@/domain/composition/index'

export default {
  setup() {
    const counter = counterStore()
    const count = computed(() => counter.count)
    const double = computed(() => counter.double)
    const samples = computed(() => counter.samples)

    watch(counter.threeCount)

    onMounted(() => {
      counter.loadSamples()
    })

    return {
      count,
      double,
      samples,
      increment: counter.increment,
      decrement: counter.decrement
    }
  }
}
</script>

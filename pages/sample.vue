<template>
  <div>
    <div>
      <p>count:{{ count }}</p>
      <button @click="increment">Count Up</button>
      <button @click="decrement">Count Down</button>
      <button @click="saveSample">save sample</button>
      <button @click="loadSamples">load sample</button>
      <p>double count:{{ double }}</p>
      <p>sample:{{ sample }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, watchEffect } from '@vue/composition-api'
import { counterStore } from '@/domain/composition/index'

export default {
  setup() {
    const counter = counterStore()
    const count = computed(() => counter.count)
    const double = computed(() => counter.double)
    const sample = computed(() => counter.sample)
    const samples = computed(() => counter.samples)

    watchEffect(counter.threeCount)

    watchEffect(() => {
      console.log(counter.samples)
    })

    onMounted(() => {
      counter.loadSample()
    })

    return {
      count,
      double,
      sample,
      samples,
      increment: counter.increment,
      decrement: counter.decrement,
      saveSample: counter.saveSample,
      loadSamples: counter.loadSamples
    }
  }
}
</script>

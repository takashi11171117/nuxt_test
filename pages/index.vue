<template>
  <div>
    <div>
      <h2>{{ formattedMoney }}</h2>
      <input v-model="delta" type="number">
      <button @click="add">
        Add
      </button>
    </div>
    <div>
      <n-link to="/composition_vuex">
        composition_vuex
      </n-link>
      <n-link to="/repository">
        repository
      </n-link>
      <n-link to="/mee">
        mee
      </n-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from '@vue/composition-api'

export default {
  setup () {
    // State
    const money = ref(10)
    const delta = ref(1)

    // Computed props
    const formattedMoney = computed(() => money.value.toFixed(2))

    // Hooks
    onMounted(() => console.log('Clock Object mounted'))

    // Methods
    const add = () => (money.value += Number(delta.value))

    // Watchers
    const moneyWatch = watch(money, (newVal, oldVal) =>
      console.log('Money changed', newVal, oldVal)
    )

    return {
      delta,
      money,
      formattedMoney,
      add,
      moneyWatch
    }
  }
}
</script>

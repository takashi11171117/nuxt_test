<template>
  <div>
    <div>
      <h2>{{ formattedMoney }}</h2>
      <input v-model="delta" type="number" />
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
      <n-link to="/login">
        login
      </n-link>
      <n-link to="/sample">
        sample
      </n-link>
    </div>
    <template>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <v-card>
              <v-card-title><h1>Hello, Vuetify!</h1></v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <p class="reserve__main">ああああああ</p>
  </div>
</template>

<script lang="ts">
import { ref, computed, watch, onMounted } from '@vue/composition-api'

export default {
  setup() {
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

<style lang="sass">
h1
  font-size: map-get($h1, size)
</style>

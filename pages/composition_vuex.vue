<template>
  <div id="status">
    <button id="get-status" type="is-primary" @click="fetchStatus(store)">
      Get Status NOW
    </button>
    <p>
      ServerStatus: <b>{{ store.getters['status/getStatus'] }}</b>
    </p>
    <p>
      ServerVersion: <b>{{ store.getters['status/getVersion'] }}</b>
    </p>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

const fetchStatus = async (store) => {
  await store.dispatch('status/fetchServerInfo')
}

export default defineComponent({
  props: {
    propHello: {
      type: String
    }
  },
  setup(props, { root }) {
    const store = root.$store

    fetch(async () => {
      console.log('aaaa')
      await fetchStatus(store)
    })

    return {
      fetchStatus,
      store
    }
  }
})
</script>

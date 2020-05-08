<template>
  <div id="status">
    <button
      id="get-status"
      type="is-primary"
      @click="setServerInfo({ status: 'one', version: 'two' })"
    >
      Get Status NOW
    </button>
    <p>
      ServerStatus: <b>{{ status }}</b>
    </p>
    <p>
      ServerVersion: <b>{{ version }}</b>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { statusStore } from '@/store'

export default defineComponent({
  props: {
    propHello: {
      type: String
    }
  },
  setup() {
    const status = computed(() => statusStore.status)
    const version = computed(() => statusStore.version)

    return {
      status,
      version,
      setServerInfo: statusStore.setServerInfo
    }
  }
})
</script>

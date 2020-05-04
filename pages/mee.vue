<template>
  <div id="status">
    <ul>
      <li v-for="user in users.data" :key="user.id">
        {{ user.id }}
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import usersRepository from '~/repositories/mee_api/usersRepository.js'

export default defineComponent({
  setup(props, { root }) {
    console.log(props, root)
    const users = ref({})

    onMounted(async () => {
      users.value = (await usersRepository.get()).data
    })

    return {
      users
    }
  }
})
</script>

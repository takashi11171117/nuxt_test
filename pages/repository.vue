<template>
  <div id="status">
    <p>posts</p>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  createComponent
} from '@vue/composition-api'
import postsRepository from '~/repositories/sample_api/postsRepository.js'

export default createComponent({
  setup (props, { root }) {
    const posts = ref({})

    onMounted(async () => {
      console.log('aiaiai')
      posts.value = (await postsRepository.get()).data
      console.log(posts)
    })

    return {
      posts
    }
  }
})
</script>

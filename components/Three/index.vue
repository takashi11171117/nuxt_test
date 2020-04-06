<template>
  <section class="artwork">
    <canvas ref="canvas" class="artwork__canvas" />
  </section>
</template>

<script>
import ArtworkGL from '~/components/Three/js/ArtworkGL.js'

export default {
  name: 'Three',
  components: {},
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {
    if (!this.artworkGL) {
      this.artworkGL = new ArtworkGL({
        $canvas: this.$refs.canvas
      })
    }
  },
  methods: {}
}
</script>

<style>
.artwork {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eaf2f5;
}
</style>

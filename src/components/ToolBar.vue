<template>
  <div class="tool-bar">
    <ViewOptions :expand="true" />
    <HotSpots />
    <Thumbnails />
  </div>
</template>

<script>
  import ViewOptions from './tools/ViewOptions.vue'
  import HotSpots from './tools/HotSpots.vue'
  import Thumbnails from './tools/Thumbnails.vue'

  export default {
    components: {
      ViewOptions, HotSpots, Thumbnails
    },
  }
</script>

<style lang="less">
  .tool-bar {
    position: relative;
    display: flex;
    width: 280px;
    flex-direction: column;
  }
</style>

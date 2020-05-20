<template>
  <div class="view-bar">
    <component v-bind:is="tabs.active"></component>
  </div>
</template>

<script>
  import ImportTour from './view/ImportTour.vue'
  import PanoContent from './view/PanoContent.vue'
  import SceneEditor from './view/SceneEditor.vue'
  import XmlEditor from './view/XmlEditor.vue'

  export default {
    components: {
      ImportTour, PanoContent, SceneEditor, XmlEditor
    },

    computed: {
      tabs() {
        return this.$store.state.tabs
      }
    },
  }
</script>

<style lang="less">
  .view-bar {
    position: relative;
    flex: 1;
    margin-right: 5px;
    border: 1px solid #333;
  }
</style>

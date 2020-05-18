<template>
  <div class="work-space">
    <ViewBar />
    <ToolBar />
  </div>
</template>

<script>
  import ViewBar from './ViewBar.vue'
  import ToolBar from './ToolBar.vue'

  export default {
    components: {
      ViewBar, ToolBar
    }
  }
</script>

<style lang="less">
  .work-space {
    position: relative;
    display: flex;
    flex: 1;
  }
</style>

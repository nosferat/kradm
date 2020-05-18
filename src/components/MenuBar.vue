<template>
  <div class="menu-bar">
    <Tabs />
  </div>
</template>

<script>
  import Tabs from './menu/Tabs.vue'

  export default {
    components: {
      Tabs
    }
  }
</script>

<style lang="less">
  .menu-bar {
    position: relative;
    display: flex;
    height: 50px;
    padding: 5px 0 5px 10px;
    margin-bottom: 4px;
    border-top: 1px solid #222;
    border-bottom: 1px solid #111;
  }
</style>

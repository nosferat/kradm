<template>
  <div id="app">
    <UserBar />
    <MenuBar />
    <WorkSpace />
    <StatusBar />
  </div>
</template>

<script>
  import UserBar from './components/UserBar.vue'
  import MenuBar from './components/MenuBar.vue'
  import WorkSpace from './components/WorkSpace.vue'
  import StatusBar from './components/StatusBar.vue'
  import store from './store/index.js'

  export default {
    store,
    components: {
      UserBar, MenuBar, WorkSpace, StatusBar
    },
  }
</script>

<style lang="less">
  @import 'less/common.less';

  #app {
    position: relative;
    display: flex;
    height: 100%;
    padding: 0 5px;
    flex-direction: column;
  }
</style>

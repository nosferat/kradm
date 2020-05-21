<template>
  <div class="tabs">
    <router-link v-for="tab of tabs" 
      :key="tab.path" :to="tab.path" class="button" tag="div"> {{ tab.label }}
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          {path: '/import', label: 'Import'},
          {path: '/pano', label: 'Pano Content'},
          {path: '/scene', label: 'Scenes'},
          {path: '/xml', label: 'XML'},
        ],
      }
    },
  }
</script>

<style scoped lang="less">
  .tabs {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;

    div:not(:last-child) {
      margin-right: 5px;
    }
  }
</style>

<template>
  <div :class="style()">
    <div class="accordion-header" @click="toggle()">
      <div>Hot-spots</div>
      <Toggle v-model="expanded" />
    </div>
    <div class="accordion-content">
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
      <div>...</div>
    </div>
  </div>
</template>

<script>
  import accordion from '../../mixins/accordion.js'

  export default {
    mixins: [accordion],
  }
</script>

<style lang="less">
</style>

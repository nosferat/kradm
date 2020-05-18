<template>
  <div class="tabs">
    <div v-for="(tab, i) of tabs.list"
      :class="style(i)" :key="i" @click="showTab(i)"> {{ tab }}
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showTab(i) {
        this.$store.commit('showTab', i)
      },

      style(i) {
        return {
          'button': true,
          'button--active': this.tabs.active === i,
        }
      },
    },

    computed: {
      tabs() {
        return this.$store.state.tabs
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

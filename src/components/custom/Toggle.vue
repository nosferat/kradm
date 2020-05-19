<template>
  <label class="toggle" @click.stop>
    <input type="checkbox" :checked="checked" @change="update">
    <div class="checkmark"></div>
  </label>
</template>

<script>
  export default {
    model: {
      prop: 'checked',
      event: 'change'
    },

    props: {
      checked: Boolean
    },

    methods: {
      update(event) {
        this.$emit('change', event.target.checked)
      }
    }
  }
</script>

<style lang="less">
  .toggle {
    position: relative;
    z-index: 1;
    cursor: pointer;

    input {
      display: none;

      &:checked ~ .checkmark {
        background-image: url(../../img/toggle-on.svg);
      }
    }

    .checkmark {
      position: relative;
      width: 26px;
      height: 15px;
      background-size: 100%;
      background-image: url(../../img/toggle-off.svg);
    }
  }
</style>

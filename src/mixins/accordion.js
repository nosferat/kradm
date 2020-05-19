export default {
  props: {
    active: Boolean
  },

  data: function () {
    return {
      isActive: this.active
    }
  },

  methods: {
    style() {
      return {
        'accordion': true,
        'accordion--active': this.isActive,
      }
    },

    toggle() {
      this.isActive = !this.isActive
    },
  }
}

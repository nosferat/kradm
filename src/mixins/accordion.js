import Toggle from '../components/custom/Toggle.vue'

export default {
  components: { Toggle },

  props: {
    expand: Boolean
  },

  data: function () {
    return {
      expanded: this.expand
    }
  },

  methods: {
    style() {
      return {
        'accordion': true,
        'accordion--expanded': this.expanded,
      }
    },

    toggle() {
      this.expanded = !this.expanded
    },
  }
}

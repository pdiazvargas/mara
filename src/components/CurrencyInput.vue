<template>
  <div>
    <input type="text" v-model="displayValue" />
  </div>
</template>

<script>
import formatter from '../mixins/formatter'

export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  mixins: [formatter],
  computed: {
    displayValue: {
      get: function () {
        console.log(this.value)
        return this.asCurrency(this.value, 0)
      },
      set: function (modifiedValue) {
        // Recalculate value after ignoring "$" and "," in user input
        let newValue = parseFloat(modifiedValue.replace(/[^\d.]/g, ''))
        // Ensure that it is not NaN
        if (isNaN(newValue)) {
          newValue = 0
        }
        this.$emit('input', newValue)
      },
    },
  },
}
</script>

<style></style>

<template>
  <v-text-field
    :label="meta.label"
    :min="meta.min"
    :max="meta.max"
    type="number"
    :hint="meta.hint"
    append-icon="mdi-percent-outline"
    required
  >
  </v-text-field>
</template>
<script>
export default {
  props: {
    meta: {
      type: Object,
      required: true,
    },
    field: {
      type: Number,
      required: true,
    },
  },
}
</script>

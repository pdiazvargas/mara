<template>
  <div>
    <tax-breakdown :value="calc.breakdown"></tax-breakdown>
  </div>
</template>
<script>
import TaxBreakdown from '@/components/TaxBreakdown.vue'
import { mapState } from 'vuex'
import formatter from '../mixins/formatter'

export default {
  components: {
    TaxBreakdown,
  },
  mixins: [formatter],
  computed: {
    ...mapState(['calc']),
  },
}
</script>

<style></style>

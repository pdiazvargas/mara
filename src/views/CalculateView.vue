<template>
  <div>
    <v-card class="mx-auto" max-width="400" flat>
      <v-container fluid>
        <div class="currency mt-5 mb-15">{{ asCurrency(amount, 0) }}</div>
        <NumericKeypad
          class="mb-10"
          :onInput="onInput"
          :onDelete="onDelete"
          :onReset="onReset"
        />
        <v-card-actions class="justify-space-around">
          <v-btn color="deep-purple accent-4" text @click="calculateTax">
            Facturar
          </v-btn>
          <v-btn color="deep-purple accent-4" text @click="calculateAmount">
            Recibir
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import NumericKeypad from '@/components/NumericKeypad.vue'
import { mapState } from 'vuex'
import store from '../store'
import formatter from '../mixins/formatter'

export default {
  components: {
    NumericKeypad,
  },
  data: () => ({
    amount: 1000000,
    number: '1000000',
    maxLength: 8,
  }),
  mixins: [formatter],
  computed: {
    ...mapState(['calc']),
    ...mapState(['settings']),
  },
  methods: {
    calculateTax: function () {
      store.dispatch('calc/calculate', {
        amount: this.amount,
        type: 'tax',
        tax_variables: this.settings.variables,
        meta: this.settings.meta,
      })
      this.$router.push({ name: 'Result' })
    },
    calculateAmount: function () {
      store.dispatch('calc/calculate', {
        amount: this.amount,
        type: 'desired',
        tax_variables: this.settings.variables,
        meta: this.settings.meta,
      })
      this.$router.push({ name: 'Result' })
    },
    onInput(key) {
      this.number = (this.number + key).slice(0, this.maxLength)
      this.amount = parseFloat(this.number)
    },
    onDelete() {
      if (this.number.length <= 1) {
        this.number = ''
        this.amount = 0
        return
      }
      this.number = this.number.slice(0, this.number.length - 1)
      this.amount = parseFloat(this.number)
    },
    onReset() {
      this.number = ''
      this.amount = 0
    },
  },
}
</script>

<style>
.currency {
  text-align: center;
  font-weight: bold;
  font-size: 40px;
}
</style>

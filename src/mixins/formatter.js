export default {
  methods: {
    asCurrency: function (value, digits) {
      return Number(value).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: digits,
      })
    },
    asPercentage: function (value) {
      return Number(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
      })
    },
  },
}

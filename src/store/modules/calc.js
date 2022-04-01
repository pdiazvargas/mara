function getTaxBreakdown(amount, variables, meta) {
  const fortyPc = amount * 0.4
  const values = Object.entries(variables).map(([key, value]) => {
    const amount = value * fortyPc
    return { label: meta[key].label, amount }
  })
  const taxTotal = values
    .map((value) => value.amount)
    .reduce((result, item) => (result += item), 0)

  values.push({ label: 'Total Impuestos', amount: taxTotal })
  values.push({ label: 'Cantidad a recibir', amount: amount - taxTotal })
  values.push({ label: 'Cantidad a cobrar', amount: parseFloat(amount) })

  return {
    amount: { label: 'Monto', amount: parseFloat(amount) },
    taxTotal: { label: 'Total Impuestos', amount: taxTotal },
    received: { label: 'Cantidad a recibir', amount: amount - taxTotal },
    items: values,
  }
}

const state = {
  breakdown: {},
}

const getters = {}

function getDesiredBreakdown(amount, variables, meta) {
  const percentages = Object.values(variables).reduce(
    (result, item) => (result += item),
    0
  )

  const newAmount = amount / (1 - 0.4 * percentages)
  return getTaxBreakdown(newAmount, variables, meta)
}

const actions = {
  calculate({ commit }, params) {
    const breakdown =
      params.type === 'tax'
        ? getTaxBreakdown(params.amount, params.tax_variables, params.meta)
        : getDesiredBreakdown(params.amount, params.tax_variables, params.meta)
    commit('SET_TAX_BREAKDOWN', breakdown)
  },
  clear({ commit }) {
    commit('SET_TAX_BREAKDOWN', {})
  },
}

const mutations = {
  SET_TAX_BREAKDOWN(state, breakdown) {
    state.breakdown = breakdown
  },
}

const namespaced = true

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
}

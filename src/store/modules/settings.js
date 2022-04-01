const defaultTaxVariables = {
  eps: 0.125,
  pension: 0.16,
  retefuente: 0.04,
  reteica: 0.01104,
}

const meta = {
  eps: {
    label: 'EPS',
    min: 0,
    max: 100,
    hint: 'EPS - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  pension: {
    label: 'Pension',
    min: 0,
    max: 100,
    hint: 'Pension - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  retefuente: {
    label: 'Retefuente',
    min: 0,
    max: 100,
    hint: 'Retefuente - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  reteica: {
    label: 'Reteica',
    min: 0,
    max: 100,
    hint: 'Reteica - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}

const state = {
  default: defaultTaxVariables,
  variables: defaultTaxVariables,
  meta: meta,
}

const getters = {}

const actions = {
  update({ commit }, event) {
    commit('UPDATE_TAX_PARAMS', event)
  },
  fetch({ commit }) {
    console.log('PAD')
    commit('UPDATE_TAX_PARAMS', defaultTaxVariables)
  },
}

const mutations = {
  UPDATE_TAX_PARAMS(state, event) {
    state.variables = event
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

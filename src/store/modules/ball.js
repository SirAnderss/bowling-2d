// initial state
const state = () => {
  return {
    position: {
      x: 24,
      y: 5
    },
    shooting: false
  }
}

// actions
const actions = {
  setBallPosition({ commit }, position) {
    commit('SET_POSITION', position)
  },

  clearBallPosition({ commit }) {
    commit('SET_POSITION', { x: 24, y: 5 })
  },

  setBallShooting({ commit }, shooting) {
    commit('SET_SHOOTING', shooting)
  }
}

// mutations
const mutations = {
  SET_POSITION(state, position) {
    state.position = position
  },

  SET_SHOOTING(state, shooting) {
    state.shooting = shooting
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

// initial state
const state = () => {
  return {
    players: [],
    scores: []
  }
}

const actions = {
  registerUsers({ commit }, players) {
    commit('SET_PLAYERS', players)
  }
}

// mutations
const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players
  },

  SET_SCORES(state, scores) {
    state.scores = scores
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

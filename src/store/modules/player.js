// initial state
const state = () => {
  return {
    players: [],
    scores: [],
    player: {}
  }
}

const actions = {
  registerUsers({ commit }, players) {
    commit('SET_PLAYERS', players)
  },

  setCurrentPlayer({ commit }, player) {
    commit('SET_CURRENT_PLAYER', player)
  },

  clearAllStates({ commit }) {
    commit('CLEAR_ALL_STATES')
  }
}

// mutations
const mutations = {
  SET_PLAYERS(state, players) {
    state.players = players
  },

  SET_SCORES(state, scores) {
    state.scores = scores
  },

  SET_CURRENT_PLAYER(state, player) {
    state.player = player
  },

  CLEAR_ALL_STATES(state) {
    state.players = []
    state.scores = []
    state.player = {}
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

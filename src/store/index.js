import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      players: [],
      scores: []
    }
  },
  mutations: {
    SET_PLAYERS(state, players) {
      state.players = players
    },
    SET_SCORES(state, scores) {
      state.scores = scores
    }
  },
  actions: {
    registerUsers({ commit }, players) {
      commit('SET_PLAYERS', players)
    }
  }
})

export default store

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

/**
 * Capturar el turno
 * Si es chuza hay que puntuar dos casillas mas
 * Si es par hay que puntuar una casilla mas
 * Se cuentan los bolos tumbados
 */

import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    players: [],
    scores: []
  },
  mutations: {
    SET_PLAYERS(state, players) {
      state.players = players
    },
    SET_SCORES(state, scores) {
      state.scores = scores
    }
  },
  actions: {}
})

export default store

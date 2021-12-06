import dropBowlsFromArray from '../../resources/dropBowlsFromArray'
import GameScore from '../../resources/GameScore'
import probability from '../../resources/probability'

const SHUFFLE_BOWLS = {
  1: [9],
  2: [7, 8, 9],
  3: [...Array(10).keys()].filter(i => i > 3),
  4: [6, 7, 8],
  5: [6]
}

const between = (val, min, max) => val <= max && val >= min

// initial state
const state = () => {
  return {
    strike: false,
    bowls: [...Array(10).keys()],
    scoreBoard: [
      {
        player: 1,
        games: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [8, 0]]
      },
      {
        player: 2,
        games: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10]]
      }
    ],
    acumulatedScore: [
      { player: 1, score: [30, 60, 90, 120, 150, 180, 210, 240, 270, 292] },
      { player: 2, score: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300] }
    ],
    tempGameScores: [],
    turn: 1,
    standBy: false,
    game: 1,
    gameOver: true
  }
}

// actions
const actions = {
  setStrike({ commit }, value) {
    commit('SET_STRIKE', value)

    if (value) {
      commit('SET_BOWLS', [])
    }
  },

  setTurn({ commit }, value) {
    commit('SET_TURN', value)
  },

  resetBowls({ commit }) {
    commit('SET_BOWLS', [...Array(10).keys()])
  },

  nextGame({ commit, state }) {
    commit('SET_GAME', state.game + 1)
  },

  setStandBy({ commit }, value) {
    commit('SET_STAND_BY', value)
  },

  setBowls({ commit, state }, position) {
    let tempBowls = []

    commit('SET_STRIKE', false)

    // Clean temp scores when player changes
    if (state.turn === 1) {
      commit('SET_TEMP_SCORES', [])
    }

    // handle bowls according to the position of the ball
    if (between(position, -5, 15)) {
      tempBowls = state.bowls.filter(el => el !== 9)
    } else if (between(position, 20, 35)) {
      tempBowls = dropBowlsFromArray(SHUFFLE_BOWLS[1], state.bowls, 5)
    } else if (between(position, 40, 65)) {
      tempBowls = dropBowlsFromArray(SHUFFLE_BOWLS[2], state.bowls, 2)
    } else if (between(position, 60, 145)) {
      if (state.turn === 1) {
        // This spaces is mor probabli to get a strike, I'm calculate a probability before to shuffle bowls, if probability it's true, the player gets a strike as long as the turn is the first
        const checkStrike = probability(0.15)

        if (checkStrike) {
          tempBowls = []
          commit('SET_TURN', state.turn + 1)
          commit('SET_STRIKE', true)
        } else {
          tempBowls = dropBowlsFromArray(SHUFFLE_BOWLS[3], state.bowls, 0)
        }
      } else {
        tempBowls = dropBowlsFromArray(SHUFFLE_BOWLS[3], state.bowls, 0)
      }
    } else if (between(position, 150, 175)) {
      tempBowls = dropBowlsFromArray(SHUFFLE_BOWLS[4], state.bowls, 1)
    } else if (between(position, 180, 195)) {
      tempBowls = dropBowlsFromArray(SHUFFLE_BOWLS[5], state.bowls, 4)
    } else if (between(position, 200, 220)) {
      tempBowls = state.bowls.filter(el => el !== 6)
    } else {
      tempBowls = state.bowls
    }

    // In case of a tempBowls length is 0, the player gets a strike
    if (!tempBowls.length) {
      if (state.turn === 1) {
        commit('SET_TURN', state.turn + 1)
        commit('SET_STRIKE', true)
      }
    }

    // Calculate shot score
    const gameScore = state.bowls.length - tempBowls.length

    commit('PUSH_TEMP_SCORES', gameScore)

    commit('SET_BOWLS', tempBowls)
    commit('SET_TURN', state.turn + 1)
  },

  setScore({ commit, state }, player) {
    const playerScore = state.scoreBoard.find(el => el.player === player)

    if (playerScore) {
      const oGame = new GameScore(playerScore.games.flat())

      oGame.calcScore()

      const scoreByFrames = oGame.scoreByFrames

      commit('UPDATE_SCORE_BOARD', {
        player,
        games: state.tempGameScores
      })

      commit('UPDATE_ACC_SCORE', {
        player,
        score: scoreByFrames
      })
    } else {
      const oGame = new GameScore(state.tempGameScores)

      oGame.calcScore()

      const scoreByFrames = oGame.scoreByFrames

      commit('SET_NEW_SCORE_BOARD', {
        player,
        games: state.tempGameScores
      })

      commit('SET_NEW_ACC_SCORE', {
        player,
        score: scoreByFrames
      })
    }
  },

  setGameOver({ commit }, value) {
    commit('SET_GAME_OVER', value)
  },

  clearAllStates({ commit }) {
    commit('CLEAR_ALL_STATES')
  }
}

// mutations
const mutations = {
  SET_STRIKE(state, value) {
    state.strike = value
  },

  SET_GAME(state, value) {
    state.game = value
  },

  SET_BOWLS(state, value) {
    state.bowls = value
  },

  SET_TURN(state, value) {
    state.turn = value
  },

  PUSH_TEMP_SCORES(state, value) {
    state.tempGameScores.push(value)
  },

  SET_TEMP_SCORES(state, value) {
    state.tempGameScores = value
  },

  SET_NEW_SCORE_BOARD(state, value) {
    const { player, games } = value

    const newScoreData = {
      player,
      games: [games]
    }

    state.scoreBoard.push(newScoreData)
  },

  UPDATE_SCORE_BOARD(state, value) {
    const { player, games } = value

    const playerScore = state.scoreBoard.find(el => el.player === player)
    playerScore.games.push(games)
  },

  SET_NEW_ACC_SCORE(state, value) {
    const { player, score } = value

    const playerScore = {
      player,
      score: score
    }

    state.acumulatedScore.push(playerScore)
  },

  UPDATE_ACC_SCORE(state, value) {
    const { player, score } = value

    const playerScore = state.acumulatedScore.find(el => el.player === player)
    playerScore.score = score
  },

  SET_STAND_BY(state, value) {
    state.standBy = value
  },

  SET_GAME_OVER(state, value) {
    state.gameOver = value
  },

  CLEAR_ALL_STATES(state) {
    state.strike = false
    state.bowls = [...Array(10).keys()]
    state.scoreBoard = []
    state.acumulatedScore = []
    state.turn = 1
    state.standBy = false
    state.game = 1
    state.gameOver = false
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import { createLogger, createStore } from 'vuex'
import ball from './modules/ball'
import game from './modules/game'
import player from './modules/player'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    ball,
    player,
    game
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

/**
 * Capturar el turno
 * Si es chuza hay que puntuar dos casillas mas
 * Si es par hay que puntuar una casilla mas
 * Se cuentan los bolos tumbados
 */

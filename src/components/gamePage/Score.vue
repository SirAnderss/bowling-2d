<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import ScoreItem from './ScoreItem.vue'

export default {
  name: 'ScoreComponent',
  components: {
    ScoreItem
  },
  props: {
    player: {
      type: Object,
      required: true
    },
    currentGame: {
      type: Number,
      required: true
    },
    turn: {
      type: Number,
      required: true
    },
    winner: {
      type: Object,
    }
  },

  setup(props) {
    const { state } = useStore()

    const currentTurn = computed(() => props.turn)

    const color = computed(() => props.player.color)

    const winningPlayer = computed(() => props.winner)

    const scoreBoard = computed(() => {
      if (state.game.scoreBoard.length) {
        return state.game.scoreBoard.find(score => score.player === props.player.player)
      }

      return null
    })

    const acumulated = computed(() => {
      if (state.game.acumulatedScore.length) {
        return state.game.acumulatedScore.find(acc => acc.player === props.player.player)
      }

      return null
    })


    return {
      color,
      currentTurn,
      scoreBoard,
      acumulated,
      winningPlayer
    }
  }
}
</script>

<template>
  <div
    class="score"
    :class="winningPlayer ? winningPlayer.player === acumulated.player && 'champion' : player.player !== currentTurn && 'disabled'"
  >
    <h2>SCORE</h2>
    <div
      class="player"
      :class="winningPlayer ? winningPlayer.player === acumulated.player ? 'winner' : '' : ''"
    >
      <span>{{ player.name }}</span>
    </div>
    <ScoreItem
      :game="currentGame"
      :index="idx"
      :score="scoreBoard ? scoreBoard.games[idx] : []"
      :total="acumulated ? acumulated.score[idx] : 0"
      :scoreBoard="scoreBoard ? scoreBoard.games : []"
      :win="winningPlayer.player === acumulated.player"
      v-for="(item, idx) in [...Array(10)]"
      :key="idx"
    />
  </div>
</template>

<style lang="stylus" scoped>
prop-color= v-bind(color)

.score
  width: 100%
  height: 5rem
  margin: 40px 0
  display: flex
  align-items: center
  position: relative

  h2
    position: absolute
    top: -2.2rem
    left: 12rem
    font-weight: 400
    font-size: 1rem

  .player
    width 10rem
    height: 100%
    margin-right: 1rem
    padding: 0 0.5rem
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    background: prop-color
    font-size: 1.2rem
    text-transform: capitalize

    span
      filter: saturate(0) grayscale(1) brightness(.7) contrast(1000%) invert(1)

.disabled
  opacity: 0.5

  .player
    background: #eaeaea !important

    span
      filter: invert(0)

.winner
  background: transparent !important
  color: #252525 !important

  // span
  //   filter: invert(100%) !important
.champion
  background: #386C65 !important
  padding: 1rem 0
  color: #fff !important
  display: flex
  justify-content: center
</style>

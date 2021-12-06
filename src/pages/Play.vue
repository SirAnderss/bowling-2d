<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Button from '../components/Button.vue'
import Container from '../components/Container.vue'
import CloseButton from '../components/gamePage/CloseButton.vue'
import PlayBoard from '../components/gamePage/PlayBoard.vue'
import Score from '../components/gamePage/Score.vue'
import Loader from '../components/Loader.vue'

export default {
  name: 'PlayPage',
  components: {
    Container,
    Score,
    CloseButton,
    PlayBoard,
    Button,
    Loader
  },

  setup() {
    const { dispatch, state } = useStore()
    const { replace } = useRouter()

    const players = computed(() => state.player.players)
    const turn = computed(() => state.game.turn)
    const game = computed(() => state.game.game)
    const strike = computed(() => state.game.strike)
    const acumulated = computed(() => {
      if (state.game.acumulatedScore.length) {
        return state.game.acumulatedScore
      }

      return null
    })
    const gameOver = computed(() => state.game.gameOver)
    const standBy = computed(() => state.game.standBy)
    const loading = ref(true)
    const winner = ref(null)

    const currentPlayer = computed(() => state.player.player)
    const nextPlayer = computed(() => players.value.filter(
      player => player.player !== currentPlayer.value.player
    )[0] || null)

    const half = computed(() => Math.floor(players.value.length / 2))

    const scoreBoard = computed(() =>
      players.value.filter(
        player => player.player !== currentPlayer.value.player
      )
    )

    const changePlayer = turn => {
      const length = players.value.length

      dispatch('game/setTurn', 1)

      if (turn === length) {
        dispatch('player/setCurrentPlayer', players.value[0])
        dispatch('game/nextGame')
      } else {
        dispatch('player/setCurrentPlayer', players.value[turn])
      }
    }

    const dispatchActions = () => {
      dispatch('game/setStandBy', true)
      dispatch('game/setScore', currentPlayer.value.player)

      // Change player animation

      setTimeout(() => {
        dispatch('game/setStandBy', false)
        dispatch('game/setStrike', false)
        dispatch('game/resetBowls')
        changePlayer(currentPlayer.value.player)
      }, 2500);
    }

    const restartGame = () => {
      loading.value = true

      dispatch('game/clearAllStates')

      setTimeout(() => {
        loading.value = false
      }, 1000);
    }

    const exit = () => {
      replace({ path: '/register' })
    }

    onMounted(() => {
      if (!players.value.length) {
        replace({ path: '/register' })
        return
      }

      dispatch('player/setCurrentPlayer', players.value[0])

      setTimeout(() => {
        loading.value = false
      }, 1000);
    })

    watch([strike, turn], ([strike, turn]) => {
      const checkGameScores = acumulated.value ? acumulated.value.map(score => score.score.length) : []

      const lastTurn = checkGameScores.some(score => score === 9)
      const finish = checkGameScores.length ? checkGameScores.every(score => score === 10) : false

      if (finish) {
        dispatch('game/setGameOver', true)

        const results = acumulated.value ? acumulated.value.map(player => {
          const score = player.score.reduce((a, b) => (a > b ? a : b));

          const dataPlayer = players.value.find(p => p.player === player.player);
          dataPlayer.score = score;

          return { player: dataPlayer };
        }) : [];

        winner.value = results.sort((a, b) => b.player.score - a.player.score)[0]?.player

        return
      }

      if (lastTurn) {
        if (turn === 4) {
          dispatchActions()
          return
        }
      }

      if (strike) {
        dispatchActions()
        return
      }

      if (turn === 3) {
        dispatchActions()
        return
      }
    })

    return {
      currentPlayer,
      nextPlayer,
      players,
      half,
      scoreBoard,
      loading,
      standBy,
      acumulated,
      gameOver,
      winner,
      changePlayer,
      restartGame,
      exit
    }
  }
}
</script>

<template>
  <Container>
    <Loader v-if="loading" />
    <div class="game-page" v-else>
      <transition name="fade">
        <div class="next-turn" v-if="nextPlayer && standBy">
          <div class="next-trun-cover"></div>
          <div class="next-turn-text">
            <span>
              Next turn
              {{ nextPlayer.name }}
            </span>
          </div>
        </div>
      </transition>
      <h1>BOWLING 2D</h1>
      <CloseButton />
      <h2 v-if="winner" class="credits">Congratulations!! {{ winner.name }} you won this game</h2>
      <Score
        :currentGame="0"
        :player="currentPlayer"
        :turn="currentPlayer.player"
        :winner="winner"
      />
      <PlayBoard :player="currentPlayer" v-if="!gameOver" />
      <Score
        :currentGame="0"
        :player="player"
        :turn="currentPlayer.player"
        :winner="winner"
        v-for="(player, idx) in scoreBoard"
        :key="idx"
      />
      <div class="restart" v-if="winner">
        <Button
          label="Restart game"
          :action="restartGame"
          :disabled="false"
          :loading="false"
          bg="success"
        />
        <Button label="Exit" :action="exit" :disabled="false" :loading="false" bg="danger" />
      </div>
    </div>
  </Container>
</template>

<style lang="stylus" scoped>
.game-page
  width: 90vw
  height: 90vh
  box-sizing: border-box
  margin: auto
  overflow-y: auto

  .credits
    text-align: center
    text-transform: uppercase
    font-size: 2.2rem
    color: #386C65

  .close
    position: absolute
    top: 20px
    right: 20px
    width: 25px
    height: 4px
    transform: rotate(45deg)
    background: #000
    cursor: pointer

    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: #000
      transform: rotate(90deg)

  .restart
    width: 100%
    display: flex
    justify-content: center
    gap: 20px

  .next-turn
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 40%
    height: 40%
    display: grid
    place-items: center
    z-index: 1

    .next-trun-cover
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: #cacaca
      opacity: 0.7
      z-index: -1

    .next-turn-text
      color: #252525
      font-weight: bold
      letter-spacing: 0.1rem
      font-size: 2rem

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.5s ease;

.fade-enter-from,
.fade-leave-to
  opacity: 0;

</style>

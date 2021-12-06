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
import randomColor from '../resources/randomColor'

const mockPlayers = [
  {
    name: 'fulano',
    score: 0,
    player: 1,
    id: 'qwerqwerqwe',
    color: randomColor()
  },
  {
    name: 'nombre',
    score: 0,
    player: 2,
    id: 'asdfasdfg',
    color: randomColor()
  }
  // {
  //   name: 'fulanox',
  //   score: 0,
  //   player: 3,
  //   id: 'yuioyuioyui',
  //   color: randomColor()
  // },
  // {
  //   name: 'nombre',
  //   score: 0,
  //   player: 4,
  //   id: 'hjkljlhjklhjk',
  //   color: randomColor()
  // }
]

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
    const loading = ref(true)
    const winner = ref(null)

    const currentPlayer = computed(() => state.player.player)

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
      }, 2000);
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
      players,
      half,
      scoreBoard,
      loading,
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
</style>

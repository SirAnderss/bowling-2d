<script>
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import Container from '../components/Container.vue'
import CloseButton from '../components/gamePage/CloseButton.vue'
import PlayBoard from '../components/gamePage/PlayBoard.vue'
import Score from '../components/gamePage/Score.vue'
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
    name: 'sultano com mas nombre',
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
    PlayBoard
  },

  setup() {
    const { dispatch, state } = useStore()
    const { replace } = useRouter()

    const players = computed(() => mockPlayers)
    const turn = computed(() => state.game.turn)
    const game = computed(() => state.game.game)
    const strike = computed(() => state.game.strike)
    const loading = ref(true)

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

    watch([strike, turn, game], ([strike, turn, game], [prevStrike, prevTurn, prevGame]) => {
      if (strike) {
        dispatch('game/setScore', currentPlayer.value.player)
        dispatch('game/setStandBy', true)

        setTimeout(() => {
          changePlayer(currentPlayer.value.player)
          dispatch('game/setStrike', false)
          dispatch('game/resetBowls')
          dispatch('game/setStandBy', false)

        }, 2000);

        return
      }

      if (game < 10) {
        if (turn === 3) {
          dispatch('game/setStandBy', true)
          dispatch('game/setScore', currentPlayer.value.player)
          // animation of change player
          setTimeout(() => {
            dispatch('game/setStandBy', false)
            dispatch('game/resetBowls')
            changePlayer(currentPlayer.value.player)
          }, 2000);
          return
        }
      }

      if (game === 10) {
        if (turn === 4) {
          console.log('end player game')
          return
        }
      }
    })

    return {
      currentPlayer,
      players,
      half,
      scoreBoard,
      loading,
      changePlayer
    }
  }
}
</script>

<template>
  <Container>
    <div v-if="loading">Loadig...</div>
    <div class="game-page" v-else>
      <h1>BOWLING 2D</h1>
      <CloseButton />
      <Score :currentGame="0" :player="currentPlayer" :turn="currentPlayer.player" />
      <PlayBoard :player="currentPlayer" :changePlayer="changePlayer" />
      <Score
        :currentGame="0"
        :player="player"
        :turn="currentPlayer.player"
        v-for="(player, idx) in scoreBoard"
        :key="idx"
      />
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
</style>

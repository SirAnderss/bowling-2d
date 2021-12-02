<script>
import { computed, ref } from 'vue'
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
    player: 'Player 1',
    id: '1',
    color: randomColor()
  },
  {
    name: 'sultano com mas nombre',
    score: 0,
    player: 'Player 2',
    id: '2',
    color: randomColor()
  }
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
    const { state } = useStore()

    const players = computed(() => mockPlayers)

    const currentPlayer = ref(players.value[0])

    const half = computed(() => Math.floor(players.value.length / 2))

    const changePlayer = turn => {
      const length = players.value.length

      const playerPosition = parseInt(turn.split(' ')[1])

      if (playerPosition === length) {
        currentPlayer.value = players.value[0]
      } else {
        currentPlayer.value = players.value[playerPosition]
      }
    }

    return {
      currentPlayer,
      players,
      half,
      changePlayer
    }
  }
}
</script>

<template>
  <Container>
    <div class="game-page">
      <h1>BOWLING 2D</h1>
      <CloseButton />
      <Score
        :currentGame="0"
        :player="player"
        :turn="currentPlayer.player"
        v-for="(player, idx) in players.slice(0, half)"
        :key="idx"
      />
      <PlayBoard :player="currentPlayer" :changePlayer="changePlayer" />
      <Score
        :currentGame="0"
        :player="player"
        :turn="currentPlayer.player"
        v-for="(player, idx) in players.slice(half)"
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

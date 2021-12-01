<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import Container from '../components/Container.vue'
import CloseButton from '../components/gamePage/CloseButton.vue'
import Score from '../components/gamePage/Score.vue'

export default {
  name: 'PlayPage',
  components: {
    Container,
    Score,
    CloseButton
  },

  setup() {
    const { state } = useStore()

    const currentPlayer = ref(0)

    const players = computed(() => [{
      name: 'fulano',
      score: 0,
      player: 'Player 1',
      id: '1'
    }, {
      name: 'sultano com mas nombre',
      score: 0,
      player: 'Player 2',
      id: '2'
    }])

    const half = computed(() => Math.floor(players.value.length / 2))

    return {
      currentPlayer,
      players,
      half
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
        v-for="(player, idx) in players.slice(0, half)"
        :key="idx"
      />Board
      <Score
        :currentGame="0"
        :player="player"
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

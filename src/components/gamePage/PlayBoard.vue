<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import useElementSize from '../../hooks/useElementSize'
import Ball from './Ball.vue'
import Bowl from './Bowl.vue'
import VerticalArrow from './Vertical.vue'

export default {
  name: 'PlayBoard',
  components: { Bowl, VerticalArrow, Ball },
  props: {
    player: {
      type: Object,
      required: true
    },
    changePlayer: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const { state, dispatch } = useStore()

    const currentPlayer = computed(() => props.player)
    const color = computed(() => props.player.color)
    const position = computed(() => state.ball.position)

    const boardRef = ref(null)
    const disabled = ref(true)

    const { widthRef, heightRef } = useElementSize(boardRef)

    const setStartPoint = (value) => {
      disabled.value = value

      if (value) {
        dispatch('ball/clearBallPosition')
      }
    }

    const shootBall = player => {
      dispatch('ball/setBallShooting', true)

      // props.changePlayer(player)
    }

    return {
      currentPlayer,
      color,
      boardRef,
      widthRef,
      heightRef,
      disabled,
      setStartPoint,
      shootBall
    }
  }
}
</script>

<template>
  <div class="game-container">
    <span v-if="disabled">Click on board to set ball direction</span>
    <span v-else>Click on Play button to shoot</span>
    <div class="game-board">
      <div
        class="board"
        :class="disabled && 'pointer'"
        ref="boardRef"
        @click="setStartPoint(false)"
      >
        <VerticalArrow :disabled="disabled" />
        <Bowl v-for="(bowl, idx) in [...Array(10)]" :key="idx" :index="idx" />
        <Ball :disabled="disabled" :color="color" :setStartPoint="setStartPoint" />
      </div>
      <button @click="shootBall(currentPlayer.player)" :disabled="disabled">Play</button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
play-color = v-bind(color)

.game-container
  width: 100%
  height: 15rem
  display: grid
  grid-template-columns: 150px 1fr
  justify-items: end
  align-items: center
  gap: 10px

  span
    font-size: 1.1rem
    letter-spacing: 0.1rem
    font-weight: 600
    color: #353535

  .game-board
    width: 1040px
    height: 100%
    display grid
    grid-template-columns: 1fr 192px
    gap: 3rem

    .board
      position: relative
      background: tomato

    button
      background-color: play-color
      color: white
      font-size: 2rem
      font-weight: bold
      border: none
      outline: none
      cursor: pointer

      &:disabled
        cursor: not-allowed
        opacity: 0.5

.pointer
  cursor: pointer

.hidden
  display: none
</style>

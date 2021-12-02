<script>
import { computed, ref } from 'vue'
import useElementSize from '../../hooks/useElementSize'
import Bowl from './Bowl.vue'
import VerticalArrow from './Vertical.vue'

export default {
  name: 'PlayBoard',
  components: { Bowl, VerticalArrow },
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
    const currentPlayer = computed(() => props.player)
    const color = computed(() => props.player.color)

    const boardRef = ref(null)
    const disabled = ref(true)
    const ballPosition = ref('5px')

    const vPosition = ref(0)

    const { widthRef, heightRef } = useElementSize(boardRef)

    const setStartPoint = () => {
      disabled.value = false
    }

    const setVerticalPosition = position => {
      vPosition.value = position
      ballPosition.value = position
      console.log(position)
    }

    return {
      currentPlayer,
      color,
      boardRef,
      widthRef,
      heightRef,
      disabled,
      ballPosition,
      setVerticalPosition,
      setStartPoint
    }
  }
}
</script>

<template>
  <div class="game-container">
    <span v-if="disabled">Click on board to set ball direction</span>
    <span v-else>Click on Play button to shoot</span>
    <div class="game-board">
      <div class="board" :class="disabled && 'pointer'" ref="boardRef" @click="setStartPoint">
        <VerticalArrow :disabled="disabled" :setVerticalPosition="setVerticalPosition" />
        <Bowl v-for="(bowl, idx) in [...Array(10)]" :key="idx" :index="idx" />
        <div class="ball" v-if="!disabled" />
      </div>
      <button @click="changePlayer(currentPlayer.player)" :disabled="disabled">Play</button>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
play-color = v-bind(color)
position-ball = v-bind(ballPosition)

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
      background-color: tomato

      .ball
        position: absolute
        width: 3rem
        height: 3rem
        border-radius: 50%
        background-color: play-color
        top: position-ball
        right: 1.5rem
        transform: translateY(-20%)

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

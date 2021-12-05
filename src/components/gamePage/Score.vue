<script>
import { computed } from 'vue'
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
    }
  },

  setup(props) {
    const currentTurn = computed(() => props.turn)
    const color = computed(() => props.player.color)

    return {
      color,
      currentTurn
    }
  }
}
</script>

<template>
  <div class="score" :class="player.player !== currentTurn && 'disabled'">
    <h2>SCORE</h2>
    <div class="player">
      <span>{{ player.name }}</span>
    </div>
    <ScoreItem
      :game="currentGame"
      :index="idx"
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
</style>
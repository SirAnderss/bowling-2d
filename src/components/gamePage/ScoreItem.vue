<script>
import { computed } from 'vue';

export default {
  name: 'ScoreItem',
  props: {
    game: {
      type: Number,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
    },
    score: {
      type: [Array, Number],
    },
    scoreBoard: {
      type: Array,
      required: true
    },
    win: {
      type: Boolean,
      required: true
    },
  },

  setup(props) {
    const number = computed(() => {
      const score = props.score ? props.score : [];

      if (score.length === 1) {
        return ''
      }

      return score
    })

    const scuare = computed(() => {
      const score = props.score ? props.score : []

      if (score.length === 1) {
        return 'X'
      }

      if (score[0] + score[1] === 10) {
        return '/'
      }

      return score
    })


    return { number, scuare }
  }
}
</script>

<template>
  <table class="score-item" :class="`${index === 9 ? 'last-item' : ''} ${win ? 'winner' : ''}`">
    <tr>
      <td colspan="3" v-text="index + 1"></td>
    </tr>
    <tr>
      <td>{{ number ? number[0] : '' }}</td>
      <td class="scuare">{{ scuare ? scuare[0] : '-' }}</td>
      <td class="scuare" v-if="index === 9">{{ scuare[1] }}</td>
    </tr>
    <tr>
      <td colspan="3">{{ total ? total : '' }}</td>
    </tr>
  </table>
</template>

<style lang="stylus" scoped>
border= 0.5px solid #252525;
border-win = 0.5px solid #eaeaea;

.score-item
  width: 5rem
  height: 5rem
  border-collapse: collapse;
  text-align: center;
  border-top: border
  border-bottom: border
  border-left: border

  tr:first-of-type
    border-bottom: border

  tr
    td
      width 1.25rem
      height 1.25rem

    .scuare
      border-left: border
      border-bottom: border

.last-item
  border-right: border

.winner
  border: border-win

  tr:first-of-type
    border-bottom: border-win

  tr
    td
      color: #eaeaea !important

    .scuare
      border-left: border-win
      border-bottom: border-win
</style>

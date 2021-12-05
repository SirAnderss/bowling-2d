<script>
import { computed } from 'vue'

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
    score: {
      type: [Array, Number],
      required: true
    },
    scoreBoard: {
      type: Array,
      required: true
    },
  },

  setup(props) {
    const scoreBoard = computed(() => {
      if (props.scoreBoard) {

        return props.scoreBoard.slice(0, props.index + 1)
      }

      return null
    })

    const number = computed(() => {
      const score = props.score

      if (score.length === 1) {
        return ''
      }

      return score[0]
    })

    const scuare = computed(() => {
      const score = props.score

      if (score.length === 1) {
        return 'X'
      }

      if (score[0] + score[1] === 10) {
        return '/'
      }

      return score[1]
    })

    const total = computed(() => {
      if (scoreBoard.value) {
        let total = 0;

        for (let i = 0; i < scoreBoard.value.length; i++) {
          if (scoreBoard.value[i].length === 1) {

            if (scoreBoard.value[i + 1]) {
              total += scoreBoard.value[i][0] + scoreBoard.value[i + 1][0] + scoreBoard.value[i + 1][1];
            } else {
              total += scoreBoard.value[i][0]
            }

            continue;
          }

          const sum = scoreBoard.value[i][0] + scoreBoard.value[i][1];

          if (sum === 10) {
            if (scoreBoard.value[i + 1]) {
              total += sum + scoreBoard.value[i + 1][0];
            } else {
              total += sum;
            }

            continue;
          }

          total += sum;
        }

        return total
      }

      return null
    })

    return { number, scuare, total }
  }
}
</script>

<template>
  <table class="score-item" :class="index === 9 && 'last-item'">
    <tr>
      <td colspan="3" v-text="index + 1"></td>
    </tr>
    <tr>
      <td>{{ number }}</td>
      <td class="scuare">{{ scuare }}</td>
      <td class="scuare" v-if="index === 9"></td>
    </tr>
    <tr>
      <td colspan="3" v-if="!scuare"></td>
      <td colspan="3" v-else>{{ total || '' }}</td>
    </tr>
  </table>
</template>

<style lang="stylus" scoped>
border= 0.5px solid #252525;

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
</style>

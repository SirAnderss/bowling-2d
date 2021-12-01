<script>
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
  }
}
</script>

<template>
  <table class="score-item" :class="index === 9 && 'last-item'">
    <tr>
      <td colspan="3" v-text="index + 1"></td>
    </tr>
    <tr>
      <td></td>
      <td class="scuare"></td>
      <td class="scuare" v-if="index === 9"></td>
    </tr>
    <tr>
      <td colspan="3"></td>
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
<script>
import { computed, ref, watch } from 'vue'
import bowlPosition from '../../resources/bowlPosition'

export default {
  name: 'BowlComponent',
  props: {
    index: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    const top = computed(() => `${bowlPosition[props.index].top}px`)
    const left = computed(() => `${bowlPosition[props.index].left}px`)

    const bowlRef = ref(null)

    watch(bowlRef, bowlRef => {
      if (props.index === 0) console.log(bowlRef.offsetLeft)
      // console.log(props.index, bowlRef.offsetTop, bowlRef.offsetLeft)
    })

    return {
      top,
      left,
      bowlRef
    }
  }
}
</script>

<template>
  <div class="bowl" ref="bowlRef">{{ index }}</div>
</template>

<style lang="stylus" scoped>
topPosition = v-bind(top)
leftPosition = v-bind(left)

.bowl
  width: 30px
  height: 30px
  top: topPosition
  left: leftPosition
  background-color: #fff
  border-radius: 50%
  border: 1px solid #ccc
  position: absolute

  &:before
    content: ''
    width: 15px
    height: 15px
    border-radius: 50%
    border: 1px solid #ccc
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>

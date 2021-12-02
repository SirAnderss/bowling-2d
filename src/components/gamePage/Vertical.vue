<template>
  <div class="v-arrow" />
</template>

<script>
import { computed, watchEffect } from 'vue'
import useArrowPosition from '../../hooks/useArrowPosition'

export default {
  name: 'VerticalArrow',
  props: {
    disabled: {
      type: Boolean,
      required: true
    },
    setVerticalPosition: {
      type: Function,
      required: true
    },
  },

  setup(props) {
    const arrowHookPosition = Object.assign({}, useArrowPosition(13))

    const { arrowPosition, interval } = arrowHookPosition

    const verticalPosition = computed(() => arrowPosition.value)
    const verticalIntValue = computed(() => {
      const splited = arrowPosition.value.split('')
      splited.splice(-2, 2);

      const joined = splited.join('')

      return parseInt(joined)
    })

    watchEffect(() => {
      if (!props.disabled) {
        clearInterval(interval)

        props.setVerticalPosition(verticalPosition.value)
      }
    })

    return {
      verticalPosition
    }
  }
}
</script>

<style lang="stylus" scoped>
v-position = v-bind(verticalPosition)

.v-arrow
  width: 0px
  height: 0px
  position: absolute
  border-top: 15px solid transparent
  border-bottom: 15px solid transparent
  border-right: 15px solid #fff
  top: v-position
  right: 2px
</style>
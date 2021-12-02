<template>
  <div class="h-arrow" />
</template>

<script>
import { computed, watchEffect } from 'vue'
import useArrowPosition from '../../hooks/useArrowPosition'

export default {
  name: 'HorizontalArrow',
  props: {
    disabled: {
      type: Boolean,
      required: true
    },
    setHorizontalPosition: {
      type: Function,
      required: true
    },
  },

  setup(props) {
    const arrowHookPosition = Object.assign({}, useArrowPosition(13))

    const { arrowPosition, interval } = arrowHookPosition

    const horizontalPosition = computed(() => arrowPosition.value)
    const horizontalIntValue = computed(() => {
      const splited = arrowPosition.value.split('')
      splited.splice(-2, 2);

      const joined = splited.join('')

      return parseInt(joined)
    })


    watchEffect(() => {
      if (!props.disabled) {
        clearInterval(interval)

        props.setHorizontalPosition(horizontalIntValue.value)
      }
    })

    return {
      horizontalPosition,
      horizontalIntValue
    }
  }
}
</script>

<style lang="stylus" scoped>
h-position = v-bind(horizontalPosition)

.h-arrow
  width: 0px
  height: 0px
  position: absolute
  border-left: 15px solid transparent
  border-right: 15px solid transparent
  border-bottom: 15px solid #fff
  right: h-position
  bottom: 2px
</style>
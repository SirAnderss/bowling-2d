<template>
  <div class="ball" ref="refBall" v-if="!disabled">{{ hPosition }}</div>
</template>

<script>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'BallComponent',
  props: {
    disabled: {
      type: Boolean,
      default: true,
      required: true
    },
    color: {
      type: String,
      default: '#fff',
      required: true
    },
    setStartPoint: {
      type: Function,
      required: true
    },
  },

  setup(props) {
    const { state, dispatch } = useStore()
    let position = state.ball.position.x
    let addInterval

    const refBall = ref(null)

    const offsetY = computed(() => `${state.ball.position.y}px`)
    const shootBall = computed(() => state.ball.shooting)

    const hPosition = ref('24px')

    const increment = () => {
      position = position * 1.09

      hPosition.value = `${position}px`

      if (refBall.value.offsetLeft <= 185 && refBall.value.offsetLeft >= 180) {
        console.log(refBall.value.offsetLeft)
      }

      if (position > 730) {
        dispatch('ball/setBallShooting', false)
      }
    }

    onBeforeUnmount(() => {
      clearInterval(addInterval)
    })

    watch(shootBall, shootBall => {
      if (shootBall) {
        addInterval = setInterval(increment, 15)
      } else {
        clearInterval(addInterval)
        props.setStartPoint(true)
        hPosition.value = '24px'
        position = state.ball.position.x
      }
    })

    return { offsetY, refBall, hPosition }
  }
}
</script>

<style lang="stylus" scoped>
play-color = v-bind(color)
y-position = v-bind(offsetY)
h-position = v-bind(hPosition)

.ball
  position: absolute
  width: 48px
  height: 48px
  border-radius: 50%
  background-color: play-color
  top: y-position
  right: h-position
  transform: translateY(-20%)
</style>

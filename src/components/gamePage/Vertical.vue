<template>
  <div class="v-arrow" />
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'VerticalArrow',
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  },

  setup(props) {
    let position = 5
    let adding = true
    let interval

    const { dispatch } = useStore()

    const verticalPosition = ref('5px')
    const refPosition = ref(position)
    const checkDisabled = computed(() => props.disabled)

    const movement = () => {
      if (adding) {
        position = position + 5
      } else {
        position = position - 5
      }

      verticalPosition.value = `${position}px`
      refPosition.value = position
    }

    const intervalAction = () => {
      movement()
      if (position === 205) {
        adding = false
      } else if (position === 5) {
        adding = true
      }
    }

    onMounted(() => interval = setInterval(() =>
      intervalAction()
      , 100))

    onBeforeUnmount(() => {
      clearInterval(interval)
    })

    watch(checkDisabled, disabled => {
      if (disabled) {
        interval = setInterval(() =>
          intervalAction()
          , 100)
      } else {
        clearInterval(interval)
        position = 5
        adding = true

        dispatch('ball/setBallPosition', {
          x: 24,
          y: refPosition.value
        })
      }
    })

    return {
      verticalPosition, checkDisabled
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

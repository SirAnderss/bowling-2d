import { onBeforeUnmount, onMounted, ref } from 'vue'

export default function useArrowPosition(refreshTime) {
  let position = 5
  let adding = true

  const arrowPosition = ref('5px')

  const movement = () => {
    if (adding) {
      position = position + 5
    } else {
      position = position - 5
    }
    arrowPosition.value = `${position}px`
  }

  const interval = setInterval(() => {
    movement()
    if (position === 205) {
      adding = false
    } else if (position === 5) {
      adding = true
    }
  }, refreshTime)

  onMounted(() => interval)

  onBeforeUnmount(() => {
    clearInterval(interval)
  })

  return { arrowPosition, interval }
}

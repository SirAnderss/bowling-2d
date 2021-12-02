import { onBeforeUnmount, onMounted, ref } from 'vue'

export default function useArrowPosition(
  initialPosition,
  modifier,
  refreshTime,
  limit
) {
  let position = initialPosition
  let adding = true
  let interval

  const refPosition = ref(initialPosition)

  const movement = () => {
    if (adding) {
      position = position + modifier
    } else {
      position = position - modifier
    }

    refPosition.value = position
  }

  const intervalAction = ref(() => {
    movement()
    if (position === limit.max) {
      adding = false
    } else if (position === limit.min) {
      adding = true
    }
  })

  onMounted(
    () => (interval = setInterval(() => intervalAction.value(), refreshTime))
  )

  onBeforeUnmount(() => {
    clearInterval(interval)
  })

  return { refPosition, intervalAction }
}

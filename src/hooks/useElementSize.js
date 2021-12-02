import { onMounted, ref } from 'vue'

export default function useElementSize(boardRef) {
  const widthRef = ref(0)
  const heightRef = ref(0)

  onMounted(() => {
    widthRef.value = boardRef.value.clientWidth
    heightRef.value = boardRef.value.clientHeight
  })

  return { widthRef, heightRef }
}

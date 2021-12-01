<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'BackButton',

  setup() {
    const { replace } = useRouter()
    const confirmation = ref(false)

    const setConfirmation = value => {
      confirmation.value = value
    }

    const setRedirect = value => {
      if (value) {
        replace({ path: '/' })
      }
    }

    return {
      confirmation,
      setConfirmation,
      setRedirect
    };
  }
}
</script>

<template>
  <span class="close" @click="setConfirmation(!confirmation)"></span>
  <div v-if="confirmation" class="confirmation-dialog">
    <p>Are you sure you want to leave?</p>
    <button @click="setRedirect(true)">Yes</button>
    <button @click="setConfirmation(false)">No</button>
  </div>
</template>

<style lang="stylus" scoped>
  .close
    position: fixed
    top: 30px
    right: 30px
    width: 25px
    height: 4px
    transform: rotate(45deg)
    background: #000
    cursor: pointer

    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: #000
      transform: rotate(90deg)

  .confirmation-dialog
    display flex
    gap: 5px
    position: fixed
    top: 7px
    right: 4rem
    font-weight: 600
    color: #252525

    button:first-of-type
      color: #386C65

    button:last-of-type
      color: #CB2128

    button
      all: unset
      cursor: pointer
</style>

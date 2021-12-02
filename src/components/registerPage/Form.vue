<script>
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { registerNewPlayers } from '../../firebase/firestore'
import randomColor from '../../resources/randomColor'
import Button from '../Button.vue'
import Input from '../Input.vue'

const LOADING_STATUS = {
  WAIT: 0,
  LOADING: 1,
  ERROR: 2,
  SUCCESS: 3
}

export default {
  name: 'RegisterForm',
  components: { Input, Button },

  setup() {
    const { dispatch } = useStore()
    const { push } = useRouter()

    const numPlayers = ref(2)

    const manyPlayers = ref(false)

    const players = ref([])

    const loading = ref(0)

    const onChange = e => {
      const { name, value } = e.target

      if (name === 'numPlayers') {
        numPlayers.value = 0

        if (value === '' || 0) {
          numPlayers.value = 2
        } else {
          const num = parseInt(value)

          numPlayers.value = num > 4 ? 4 : num
        }

        // limpiar input cuando tiene mucha logitud
        return
      }

      const player = name.split('').reverse()[0]

      players.value[player - 1] = {
        player: parseInt(player),
        name: value,
        score: 0,
        color: randomColor()
      }
    }

    const registerUsers = async () => {
      loading.value = LOADING_STATUS.LOADING

      if (players.value.length !== numPlayers.value) {
        alert('Please, fill all the players names')

        loading.value = LOADING_STATUS.ERROR
        return
      }

      const registeredPlayers = await registerNewPlayers(players.value)

      if (registeredPlayers.includes('unsaved')) {
        alert('Error registering players, try again')

        loading.value = LOADING_STATUS.ERROR
        return
      }

      players.value = registeredPlayers

      loading.value = LOADING_STATUS.SUCCESS
    }

    const onClickSetManyPlayers = () => {
      manyPlayers.value = true
    }

    watchEffect(() => {
      if (loading.value === LOADING_STATUS.SUCCESS) {
        dispatch('player/registerUsers', players.value)

        push({ path: '/game' })
      }
    })

    return {
      LOADING_STATUS,
      numPlayers,
      manyPlayers,
      players,
      loading,
      onChange,
      onClickSetManyPlayers,
      registerUsers
    }
  }
}
</script>

<template>
  <div class="form">
    <h1>BOWLING 2D</h1>
    <div class="num-players" v-if="!manyPlayers">
      <Input
        type="number"
        placeholder="Num players"
        inputName="numPlayers"
        :inputValue="numPlayers"
        :onChange="onChange"
      />
      <Button
        label="Number of players"
        :action="onClickSetManyPlayers"
        :disabled="false"
        :loading="false"
        bg="success"
      />
    </div>
    <div v-else>
      <Input
        v-for="(player, idx) in [...Array(numPlayers)]"
        :key="idx"
        type="text"
        :placeholder="`Player ${idx + 1} name`"
        :inputName="`playerName${idx + 1}`"
        :inputValue="players[player] || ''"
        :onChange="onChange"
      />
      <Button
        label="Start game"
        :action="registerUsers"
        :disabled="false"
        :loading="false"
        :bg="
          loading === LOADING_STATUS.WAIT
            ? 'success'
            : loading === LOADING_STATUS.LOADING ||
              loading === LOADING_STATUS.SUCCESS
            ? 'disabled'
            : 'danger'
        "
        v-if="players.length === numPlayers"
      />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.form
  text-align: center
  max-width: 320px

  h1
    color: #386C65

    .num-players
      width: 100%
      display: flex
      flex-direction: column
      align-items: center
</style>

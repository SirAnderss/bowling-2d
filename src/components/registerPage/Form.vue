<script setup>
import { registerNewPlayers } from '../../firebase/firestore'
import Button from '../Button.vue'
import Input from '../Input.vue'

const LOADING_STATUS = {
  WAIT: 0,
  LOADING: 1,
  ERROR: 2
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
            : loading === LOADING_STATUS.LOADING
            ? 'disabled'
            : 'danger'
        "
        v-if="players.length === numPlayers"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  components: { Input },
  data() {
    return {
      numPlayers: 2,
      manyPlayers: false,
      players: [],
      loading: this.LOADING_STATUS.WAIT
    }
  },
  methods: {
    onChange(e) {
      const { name, value } = e.target

      if (name === 'numPlayers') {
        this.numPlayers = 0

        if (value === '' || 0) {
          this.numPlayers = 2
        } else {
          const num = parseInt(value)

          this.numPlayers = num > 4 ? 4 : num
        }

        // limpiar input cuando tiene mucha logitud
        return
      }

      const player = name.split('').reverse()[0]

      this.players[player - 1] = {
        player: parseInt(player),
        name: value,
        score: 0
      }
    },
    onClickSetManyPlayers() {
      this.manyPlayers = true
    },
    async registerUsers() {
      this.loading = this.LOADING_STATUS.LOADING
      if (this.players.length !== this.numPlayers) {
        alert('Please, fill all the players names')

        this.loading = this.LOADING_STATUS.ERROR
        return
      }

      const registerPlayers = await registerNewPlayers(this.players)

      if (registerPlayers.includes('unsaved')) {
        alert('Error registering players, try again')

        this.loading = this.LOADING_STATUS.ERROR
        return
      }

      this.$router.push({ path: 'game' })
    }
  }
}
</script>

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

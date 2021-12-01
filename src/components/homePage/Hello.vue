<script>
import { useRouter } from 'vue-router'
import Button from '../Button.vue'
import Container from '../Container.vue'

export default {
  name: 'HelloComponent',
  components: { Container, Button },

  setup() {
    const { push } = useRouter()

    const onClick = () => {
      push({ path: 'register' })
    }

    return {
      onClick
    }
  }
}
</script>

<template>
  <Container>
    <div class="hello">
      <h1>BOWLING 2D</h1>
      <Button label="New Game" :action="onClick" :disabled="false" :loading="false" bg="success" />
    </div>
  </Container>
</template>

<style lang="stylus" scoped>
.hello
  text-align: center

  h1
    color: #386C65
</style>

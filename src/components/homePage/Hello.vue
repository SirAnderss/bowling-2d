<script setup>
import Button from '../Button.vue'
import Container from '../Container.vue'
</script>

<template>
  <Container>
    <div class="hello">
      <h1>BOWLING 2D</h1>
      <Button
        label="New Game"
        :action="onClick"
        :disabled="false"
        :loading="false"
        bg="success"
      />
    </div>
  </Container>
</template>

<script>
export default {
  name: 'HelloComponent',
  components: { Container },
  methods: {
    onClick() {
      this.$router.push({ path: 'register' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.hello
  text-align: center

  h1
    color: #386C65
</style>

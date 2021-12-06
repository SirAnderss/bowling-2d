<script setup>
import Container from '../components/Container.vue'
import Form from '../components/registerPage/Form.vue'
</script>

<script>
export default {
  name: 'RegisterPage',
  components: {
    Container,
    Form
  },
  mounted() {
    this.$store.dispatch('game/clearAllStates')
    this.$store.dispatch('player/clearAllStates')
  }
}
</script>

<template>
  <Container>
    <Form />
  </Container>
</template>

<style lang="stylus" scoped></style>

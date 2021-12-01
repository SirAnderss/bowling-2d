<script setup>
import Container from '../components/Container.vue';
import Form from '../components/registerPage/Form.vue';
</script>

<template>
  <Container>
    <Form />
  </Container>
</template>

<script>
export default {
  name: 'RegisterPage',
  components: {
    Container,
    Form
  }
}
</script>

<style lang="stylus" scoped></style>

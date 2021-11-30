<template>
  <Hello />
</template>

<script>
import Hello from '../components/Hello.vue'
export default {
  name: 'Home',
  components: {
    Hello
  },
  data() {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
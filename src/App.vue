<template>
  <router-view />
</template>

<script>
import { provide } from 'vue';
import probability from './resources/probability';

export default {
  name: 'App',
  setup() {
    provide('probability', probability);
  }
}
</script>
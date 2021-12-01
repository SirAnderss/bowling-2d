<script setup>
defineProps({
  label: String,
  action: Function,
  bg: String,
  disabled: Boolean,
  loading: Boolean
})
</script>

<script>
export default {
  name: 'ButtonComponent'
}
</script>

<template>
  <button @click="action" class="btn" :class="bg">{{ label }}</button>
</template>

<style lang="stylus" scoped>
.btn
  all: unset
  padding: 1rem 1.4rem
  text-align: center
  color: white
  letter-spacing: 0.1rem
  cursor: pointer

.success
  background: #386C65

.danger
  background: #FF6060

.disabled
  background: #ccc
  cursor: not-allowed !important
</style>

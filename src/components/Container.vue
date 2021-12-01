scr

<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ContainerComponent'
}
</script>

<style lang="stylus" scoped>
.container
  width: 100%
  height: 100vh
  display: grid
  place-content: center
</style>

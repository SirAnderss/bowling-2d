<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  inputValue: {
    type: [String, Number]
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputName: {
    type: String,
    default: ''
  },
  textArea: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 3
  },
  onChange: {
    type: Function
  }
})
</script>

<script>
export default {
  name: 'InputComponent'
}
</script>

<template>
  <div>
    <label :for="inputName" v-text="placeholder"></label>
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="inputName"
      :id="inputName"
      v-if="!textArea"
      :value="inputValue"
      @keyup="onChange"
    />
    <textarea
      :placeholder="placeholder"
      :disabled="disabled"
      :name="inputName"
      :id="inputName"
      :rows="rows"
      v-if="textArea"
      :value="inputValue"
      @keyup="onChange"
    />
  </div>
</template>

<style lang="stylus" scoped>
label
  font-size: 1.2rem
  font-weight: bold
  color: #666
  text-align: left
  display block

input, textarea {
  width: 100%
  padding: 1rem
  margin-top: 0.4rem
  margin-bottom: 1rem
  border: 1px solid #ccc
  border-radius: 4px
  box-sizing: border-box

  &:focus {
    outline: none
  }
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none
}

input[type=number] { -moz-appearance:textfield }
</style>

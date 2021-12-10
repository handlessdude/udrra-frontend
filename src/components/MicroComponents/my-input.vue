<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number] //string OR number
  },
  methods:{
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  box-sizing: border-box;
  width: 100%;
  min-height: 50px;
  border: 1px solid teal;
  border-radius: 25px;
  padding: 10px 15px;
  margin-top: 15px;
  font-family: inherit;
  font-size: 15px;
}

</style>
<template>
  <select :value="modelValue" @change="changeOption">
<!--    v-model="modelValue" shouldn't be in select higher?-->
    <option disabled value="">
      Ключ сортировки
    </option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    //items in this dropdown
    options: {
      type: Array,
      default: () => [] //for empty arrays we use arrow func
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value) //target is select
    }
  }
}
</script>

<style scoped>
select {
  border-radius: 12px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  margin-top: 15px;
}
select:hover{
  cursor: pointer;
}
</style>
<template>
  <select
    class="base-select"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: Array,
    name: String,
    value: String,
  },
  created() {
    //Set the first value of options array as default
    this.$emit("input", this.options[0].value);
  },
};
</script>

<style lang="scss" scoped>
.base-select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid $grey;
  color: $dark-grey;
}
</style>

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
    defaultOption: String,
  },
  created() {
    const defaultOption = this.options.find(
      (option) => option.code === this.defaultOption
    );

    //Set the default value provided by the API
    if (defaultOption) {
      this.$emit("input", defaultOption.value);
    }
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

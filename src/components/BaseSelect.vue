<template>
  <select name="dimensions" class="base-select">
    <option
      v-for="(option, index) in options"
      :value="option.value"
      :key="index"
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

<template>
  <button class="base-button" @click="$emit('click')">{{ name }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1.25rem;
  border: none;
  color: white;
  background-color: $secondary;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: $secondary-light;
  }
}
</style>

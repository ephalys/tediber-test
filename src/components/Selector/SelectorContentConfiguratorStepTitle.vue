<template>
  <h3>
    <span :class="{ 'has-info': hasInfo }">
      {{ title }}
    </span>
    <span class="title-modifier" v-html="modifierSpan"></span>
  </h3>
</template>

<script>
export default {
  name: "SelectorContentConfiguratorStepTitle",
  props: {
    title: String,
    titleModifier: String,
    hasInfo: Boolean,
  },
  computed: {
    modifierSpan() {
      return this.titleModifier ? ` - ${this.titleModifier}` : "";
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  .has-info {
    &:after {
      content: " *";
    }
  }
  .title-modifier {
    color: $grey;
  }
}
</style>

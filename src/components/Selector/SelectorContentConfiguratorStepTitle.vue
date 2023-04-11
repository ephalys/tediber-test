<template>
  <h3>{{ title }}<span class="title-modifier" v-html="modifierSpan"></span></h3>
</template>

<script>
export default {
  name: "SelectorContentConfiguratorStepTitle",
  props: {
    title: String,
    titleModifier: String,
  },
  computed: {
    modifierSpan() {
      return this.titleModifier ? ` - ${this.titleModifier}` : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.title-modifier {
  color: $grey;
}
</style>

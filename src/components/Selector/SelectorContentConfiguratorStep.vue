<template>
  <div class="selector-content-configurator-step">
    <SelectorContentConfiguratorStepTitle
      :title="step.name"
      :titleModifier="titleModifier"
      :hasInfo="!!info(step.code)"
    />
    <component
      :is="componentName(step.code)"
      :options="step.values"
      :variant="variant(step.code)"
      :info="info(step.code)"
      @updateModifierTitle="handleModifier"
    />
  </div>
</template>

<script>
import BaseSelect from "@/components/BaseSelect.vue";
import SelectorContentConfiguratorOptionPicker from "@/components/Selector/SelectorContentConfiguratorOptionPicker.vue";
import SelectorContentConfiguratorStepTitle from "@/components/Selector/SelectorContentConfiguratorStepTitle.vue";
import { componentNames, variants, infos } from "@/components/Selector/config";
import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState } from "pinia";

export default {
  components: {
    BaseSelect,
    SelectorContentConfiguratorOptionPicker,
    SelectorContentConfiguratorStepTitle,
  },
  name: "SelectorContentConfiguratorStep",
  props: {
    step: Object,
  },
  data() {
    return {
      titleModifier: null,
    };
  },
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["productData", "options"]),
  },
  methods: {
    handleModifier(value) {
      this.titleModifier = value;
    },
    componentName(code) {
      return componentNames[code] || null;
    },
    variant(code) {
      return variants[code] || null;
    },
    info(code) {
      return infos[code] || null;
    },
  },
};
</script>

<style lang="scss" scoped>
.selector-content-configurator-step {
  h3 {
    color: $primary;
    margin-bottom: 1rem;
  }
}
</style>

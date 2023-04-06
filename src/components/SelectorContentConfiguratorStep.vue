<template>
  <div class="selector-content-configurator-step">
    <SelectorContentConfiguratorStepTitle
      :title="stepName"
      :titleModifier="titleModifier"
    />
    <component
      :is="currentStepComponent"
      :options="stepOptions"
      :variant="variant"
      @updateModifierTitle="handleModifier"
    />
  </div>
</template>

<script>
import BaseSelect from "@/components/BaseSelect.vue";
import OptionSelector from "@/components/OptionSelector.vue";
import SelectorContentConfiguratorStepTitle from "@/components/SelectorContentConfiguratorStepTitle.vue";
import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState } from "pinia";

export default {
  components: {
    BaseSelect,
    OptionSelector,
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
    stepName() {
      return this.step.name;
    },
    stepCode() {
      return this.step.code;
    },
    stepOptions() {
      return this.step.values;
    },
    currentStepComponent() {
      switch (this.stepCode) {
        case "sofa-simple-size":
          return "BaseSelect";
        case "sofa-simple-color":
        case "sofa-simple-feet-color":
        case "sofa-simple-feet-form":
          return "OptionSelector";
        default:
          return null;
      }
    },
    variant() {
      return this.stepCode === "sofa-simple-feet-color" ||
        this.stepCode === "sofa-simple-color"
        ? "circle"
        : "square";
    },
  },
  methods: {
    handleModifier(value) {
      this.titleModifier = value;
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

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
      :defaultOption="step.defaultOptionValue"
      :variant="variant(step.code)"
      :info="info(step.code)"
      @updateModifierTitle="handleModifier"
      v-model="stepValue"
    />
  </div>
</template>

<script>
import BaseSelect from "@/components/BaseSelect.vue";
import SelectorContentConfiguratorOptionPicker from "@/components/Selector/SelectorContentConfiguratorOptionPicker.vue";
import SelectorContentConfiguratorStepTitle from "@/components/Selector/SelectorContentConfiguratorStepTitle.vue";
import { componentNames, variants, infos } from "@/components/Selector/config";
import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState, mapActions } from "pinia";

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
      stepValue: null,
    };
  },
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["productData", "options"]),
    ...mapActions(useProductStore, ["updateUserSelectedConfiguration"]),
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
    getCodeFromValue(value) {
      const match = this.step.values.find((option) => option.value === value);
      return match ? match.code : null;
    },
  },
  watch: {
    stepValue(newVal) {
      const stepCode = this.step.code;
      const itemCode = this.getCodeFromValue(newVal);
      this.productStore.updateUserSelectedConfiguration(stepCode, itemCode);
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

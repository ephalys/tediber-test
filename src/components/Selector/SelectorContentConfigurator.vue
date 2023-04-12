<template>
  <div class="selector-content-configurator">
    <h2>Configurez votre canapé</h2>
    <div class="selector-content-configurator-steps">
      <SelectorContentConfiguratorStep
        v-for="(step, index) in steps"
        :step="step"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import SelectorContentConfiguratorStep from "@/components/Selector/SelectorContentConfiguratorStep.vue";
import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState } from "pinia";

export default {
  name: "SelectorContentConfigurator",
  components: { SelectorContentConfiguratorStep },
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["steps"]),
    stepsLength() {
      return this.steps.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.selector-content-configurator {
  h2 {
    color: $primary;
    margin-bottom: 2.5rem;
  }

  &-steps {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
}
</style>

<template>
  <div v-if="productData" class="selector-content">
    <SelectorContentHeading :product-name="productData.name" />
    <SelectorContentSeparator />
    <SelectorContentConfigurator />
    <SelectorContentSeparator />
    <SelectorContentFooter />
  </div>
  <TheLoader v-else />
</template>

<script>
import SelectorContentHeading from "@/components/Selector/SelectorContentHeading.vue";
import SelectorContentSeparator from "@/components/Selector/SelectorContentSeparator.vue";
import SelectorContentConfigurator from "@/components/Selector/SelectorContentConfigurator.vue";
import SelectorContentFooter from "@/components/Selector/SelectorContentFooter.vue";
import TheLoader from "@/components/TheLoader.vue";

import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState } from "pinia";

export default {
  name: "SelectorContent",
  components: {
    SelectorContentHeading,
    SelectorContentSeparator,
    SelectorContentConfigurator,
    SelectorContentFooter,
    TheLoader,
  },
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["productData"]),
  },
  mounted() {
    this.productStore.getProductData();
  },
};
</script>

<style lang="scss" scoped>
.selector-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>

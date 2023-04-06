<template>
  <div v-if="productData" class="selector-content">
    <SelectorContentHeading :product-name="productData.name" />
    <SelectorContentSeparator />
    <SelectorContentConfigurator />
  </div>
  <TheLoader v-else />
</template>

<script>
import SelectorContentHeading from "@/components/SelectorContentHeading.vue";
import SelectorContentSeparator from "@/components/SelectorContentSeparator.vue";
import SelectorContentConfigurator from "@/components/SelectorContentConfigurator.vue";
import TheLoader from "@/components/TheLoader.vue";

import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState } from "pinia";

export default {
  name: "SelectorContent",
  components: {
    SelectorContentHeading,
    SelectorContentSeparator,
    SelectorContentConfigurator,
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

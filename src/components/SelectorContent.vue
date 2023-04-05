<template>
  <div v-if="productData" class="selector-content">
    <SelectorContentHeading :product-name="productData.name" />
    <SelectorContentSeparator />
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </div>
</template>

<script>
import SelectorContentHeading from "@/components/SelectorContentHeading.vue";
import SelectorContentSeparator from "@/components/SelectorContentSeparator.vue";

export default {
  name: "SelectorContent",
  components: { SelectorContentHeading, SelectorContentSeparator },
  data() {
    return {
      productData: null,
    };
  },
  mounted() {
    fetch("/api.json")
      .then((res) => res.json())
      .then((data) => (this.productData = data));
  },
};
</script>

<style lang="scss" scoped>
.selector-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div:not(.selector-content-heading):not(.selector-content-separator) {
    height: 300px;
  }
}
</style>

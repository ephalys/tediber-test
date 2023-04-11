<template>
  <div class="selector-content-heading">
    <h1 class="product-name">{{ productName }}</h1>
    <SelectorContentHeadingHightlights />
  </div>
</template>

<script>
import SelectorContentHeadingHightlights from "@/components/Selector/SelectorContentHeadingHightlights.vue";

export default {
  components: { SelectorContentHeadingHightlights },
  name: "SelectorContentHeading",
  props: {
    productName: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.selector-content-heading {
  padding: 1.5rem;
  background-color: $light-grey;
  .product {
    &-name {
      color: $primary;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  }
}
</style>

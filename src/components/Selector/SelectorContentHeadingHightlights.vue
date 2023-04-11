<template>
  <ul class="product-highlights">
    <li
      v-for="(item, index) in highlightsList"
      :key="index"
      class="product-highlights-item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "SelectorContentHeadingHighlights",
  data() {
    return {
      highlightsList: [
        "Canapé 2-3 places design et ultra confortable",
        "Matériaux et design haut de gamme à un prix incomparable",
        "Fabriqué en France et éco-conçu",
        "Entretien facile, coussins déhoussables et lavables",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.product-highlights {
  margin-left: 1rem;

  &-item {
    margin-bottom: 0.5rem;
  }
}
</style>

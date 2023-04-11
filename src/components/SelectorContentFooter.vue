<template>
  <div class="selector-content-footer">
    <p class="selector-content-footer-total">1390€</p>
    <BaseButton name="Ajouter au panier" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { BaseButton },
  name: "SelectorContentFooter",
};
</script>

<style lang="scss" scoped>
.selector-content-footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  &-total {
    font-size: 2.5rem;
    font-weight: bold;
    color: $primary;
  }
}
</style>

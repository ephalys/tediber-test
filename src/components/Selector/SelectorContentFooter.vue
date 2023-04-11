<template>
  <div class="selector-content-footer">
    <p class="selector-content-footer-total">1390€</p>
    <BaseButton name="Ajouter au panier" @click="handleSubmit" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState, mapActions } from "pinia";

export default {
  components: { BaseButton },
  name: "SelectorContentFooter",
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, ["productData", "options"]),
    ...mapActions(useProductStore, ["sendProductData"]),
  },
  methods: {
    handleSubmit() {
      this.productStore.sendProductData();
    },
  },
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

<template>
  <div class="selector-content-footer">
    <p class="selector-content-footer-total">
      {{ price }}
    </p>
    <BaseButton
      name="Ajouter au panier"
      @click="handleSubmit"
      :disabled="!isConfiguratorCompleted"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import { useProductStore } from "@/stores/useProductStore";
import { mapStores, mapState, mapActions } from "pinia";

export default {
  components: { BaseButton },
  name: "SelectorContentFooter",
  data() {
    return { error: null };
  },
  computed: {
    ...mapStores(useProductStore),
    ...mapState(useProductStore, [
      "productData",
      "options",
      "productVariantFromUserConfiguration",
    ]),
    ...mapActions(useProductStore, ["sendProductData"]),
    price() {
      const price = this.isConfiguratorCompleted
        ? this.productVariantFromUserConfiguration?.price
        : "0";
      return `${price}€`;
    },
    isConfiguratorCompleted() {
      return !!this.productVariantFromUserConfiguration;
    },
  },
  methods: {
    handleSubmit() {
      if (!this.productVariantFromUserConfiguration)
        this.error = "Veuillez configurer votre canapé";
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

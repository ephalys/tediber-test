import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    productData: {},
  }),
  getters: {
    steps() {
      return this.productData?.options;
    },
  },
  actions: {
    getProductData() {
      fetch("/api.json")
        .then((res) => res.json())
        .then((data) => (this.productData = data))
        .catch((error) => console.error("Fetch error:", error));
    },
    getStepOptions(code) {
      return this.productData.options.find((option) => option.code === code);
    },
  },
});

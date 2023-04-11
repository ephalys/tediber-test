import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    productData: {},
    userSelectedConfiguration: [],
    productVariantFromUserConfiguration: null,
    price: 0,
  }),
  getters: {
    steps() {
      if (this.productData) {
        return this.productData.options;
      }
      return [];
    },
    isConfiguratorCompleted() {
      return this.steps?.length === this.userSelectedConfiguration?.length;
    },
    fullPrice() {
      return `${this.price} €`;
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
    updateUserSelectedConfiguration(stepCode, itemCode) {
      const stepItem = { [stepCode]: itemCode };
      const indexStepCode = this.userSelectedConfiguration.findIndex(
        (object) => object[stepCode]
      );

      if (indexStepCode > -1) {
        //If the user has already selected an option for this step
        this.userSelectedConfiguration.splice(indexStepCode, 1, {
          ...this.userSelectedConfiguration[indexStepCode],
          ...stepItem,
        });
      } else {
        //If the user has not selected an option for this step yet
        this.userSelectedConfiguration.push(stepItem);
      }

      this.getMatchingVariant();
    },
    getMatchingVariant() {
      if (!this.isConfiguratorCompleted) return;

      const productVariants = this.productData.variants;
      const userOptions = this.userSelectedConfiguration;

      for (const variant of productVariants) {
        const matching = Object.entries(variant.optionCodes).every(
          ([key, value]) => {
            const selectedOption = userOptions.find(
              (option) => option[key] === value
            );
            return Boolean(selectedOption);
          }
        );

        if (matching) {
          this.productVariantFromUserConfiguration = variant;
          this.price = variant.price;
          return;
        }
      }
    },
    sendProductData() {
      const variantCode = this.productVariantFromUserConfiguration?.code;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantCode: variantCode }),
      };

      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
});

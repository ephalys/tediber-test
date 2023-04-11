import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    productData: {},
    userSelectedConfiguration: [],
  }),
  getters: {
    steps() {
      if (this.productData) {
        return this.productData.options;
      }
      return [];
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
    },
    getMatchingVariant() {
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
          return variant.code;
        }
      }

      return null;
    },
    sendProductData() {
      const variantCode = this.getMatchingVariant();
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

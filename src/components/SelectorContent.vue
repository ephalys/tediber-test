<template>
  <div v-if="productData" class="selector-content">
    <SelectorContentHeading :product-name="productData.name" />
    <SelectorContentSeparator />
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </div>
  <TheLoader v-else />
</template>

<script>
import SelectorContentHeading from "@/components/SelectorContentHeading.vue";
import SelectorContentSeparator from "@/components/SelectorContentSeparator.vue";
import TheLoader from "@/components/TheLoader.vue";

export default {
  name: "SelectorContent",
  components: {
    SelectorContentHeading,
    SelectorContentSeparator,
    TheLoader,
  },
  data() {
    return {
      productData: null,
    };
  },
  mounted() {
    fetch("/api.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => (this.productData = data))
      .catch((error) => console.error("Fetch error:", error));
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

<template>
  <div class="selector-wrapper">
    <SelectorPreview />
    <SelectorContent />
  </div>
</template>

<script>
import SelectorPreview from "@/components/Selector/SelectorPreview.vue";
import SelectorContent from "@/components/Selector/SelectorContent.vue";

export default {
  name: "SelectorWrapper",
  components: { SelectorPreview, SelectorContent },
};
</script>

<style lang="scss" scoped>
.selector-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  padding: 2rem;
}
</style>

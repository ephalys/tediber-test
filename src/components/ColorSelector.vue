<template>
  <div class="color-selector">
    <div
      class="color-selector-item"
      v-for="(option, index) in options"
      :key="index"
      :class="{ active: isOptionActive(option) }"
      :style="getBackgroundFromCode(option.code)"
      @mouseover="handleHover(option.value)"
      @mouseout="handleMouseOut"
      @click="handleClick(option.value)"
    ></div>
  </div>
</template>

<script>
const COLORS = [
  { code: "sofa-simple-color_ECRU", value: "#C2B280" },
  { code: "sofa-simple-color_GRIS", value: "#61605f" },
  { code: "sofa-simple-color_BLEU", value: "#273347" },
  { code: "sofa-simple-color_VERT", value: "#689d71" },
  { code: "sofa-simple-color_KAKI", value: "#94812b" },
  { code: "sofa-simple-color_TERRACOTTA", value: "#d7a285" },
  {
    code: "sofa-simple-feet-color_CLAIR",
    value: `url(${require("@/assets/img/sofa-simple-feet-color_CLAIR.png")}) center`,
  },
  {
    code: "sofa-simple-feet-color_FONCE",
    value: `url(${require("@/assets/img/sofa-simple-feet-color_FONCE.png")}) center`,
  },
];

export default {
  name: "ColorSelector",
  props: {
    options: Array,
  },
  data() {
    return {
      hoverColor: null,
      selectedColor: null,
      colors: COLORS,
    };
  },
  watch: {
    selectedColor(newVal) {
      this.$emit("updateModifierTitle", newVal);
    },
    hoverColor(newVal) {
      if (!newVal && this.selectedColor) {
        this.$emit("updateModifierTitle", this.selectedColor);
      } else {
        this.$emit("updateModifierTitle", newVal);
      }
    },
  },
  methods: {
    isOptionActive(option) {
      return option.value === this.selectedColor;
    },
    handleHover(optionValue) {
      this.hoverColor = optionValue;
    },
    handleClick(optionValue) {
      this.selectedColor = optionValue;
    },
    handleMouseOut() {
      this.hoverColor = null;
    },
    getBackgroundFromCode(code) {
      const color = this.colors.find((c) => c.code === code);
      return {
        background: color?.value,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.color-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;

  &-item {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid transparent;
    cursor: pointer;
    transition: border 0.2s;
    z-index: 2;

    &.active {
      border: 1px solid $primary;
    }

    &:hover:not(.active) {
      border: 1px solid $grey;
    }
  }
}
</style>

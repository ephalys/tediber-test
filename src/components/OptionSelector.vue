<template>
  <div class="color-selector">
    <div
      class="color-selector-item"
      v-for="(option, index) in options"
      :key="index"
      :class="[variant, { active: isOptionActive(option) }]"
      :style="getBackgroundFromCode(option.code)"
      @mouseover="handleHover(option.value)"
      @mouseout="handleMouseOut"
      @click="handleClick(option.value)"
    ></div>
  </div>
</template>

<script>
const COLORS = [
  { code: "sofa-simple-color_ECRU", value: "#C2B280", isPureColor: true },
  { code: "sofa-simple-color_GRIS", value: "#61605f", isPureColor: true },
  { code: "sofa-simple-color_BLEU", value: "#273347", isPureColor: true },
  { code: "sofa-simple-color_VERT", value: "#689d71", isPureColor: true },
  { code: "sofa-simple-color_KAKI", value: "#94812b", isPureColor: true },
  { code: "sofa-simple-color_TERRACOTTA", value: "#d7a285", isPureColor: true },
  {
    code: "sofa-simple-feet-color_CLAIR",
    value: `url(${require("@/assets/img/sofa-simple-feet-color_CLAIR.png")}) center`,
    isPureColor: false,
  },
  {
    code: "sofa-simple-feet-color_FONCE",
    value: `url(${require("@/assets/img/sofa-simple-feet-color_FONCE.png")}) center`,
    isPureColor: false,
  },
  {
    code: "sofa-simple-feet-form_ROND",
    value: `url(${require("@/assets/img/feet-rond.jpeg")}) center/cover no-repeat`,
    isPureColor: false,
  },
  {
    code: "sofa-simple-feet-form_CARRE",
    value: `url(${require("@/assets/img/feet-carre.jpeg")}) center/cover no-repeat`,
    isPureColor: false,
  },
];

export default {
  name: "OptionSelector",
  props: {
    options: Array,
    variant: String,
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
      const style = {};
      if (color.isPureColor) {
        style.backgroundColor = color?.value;
      } else {
        style.background = color?.value;
      }
      return style;
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
    border: 1px solid transparent;
    cursor: pointer;
    transition: border 0.2s;
    z-index: 2;

    &.circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    &.square {
      width: 100px;
      height: 100px;
      border-radius: 1rem;
    }

    &.active {
      border: 1px solid $primary;
    }

    &:hover:not(.active) {
      border: 1px solid $grey;
    }
  }
}
</style>

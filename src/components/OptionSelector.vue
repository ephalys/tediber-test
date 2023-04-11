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
import { COLORS } from "@/helpers/colors";

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

<template>
  <div class="color-selector">
    <div class="color-selector-list">
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
    <span v-if="info" class="color-selector-info">
      {{ info }}
    </span>
  </div>
</template>

<script>
import { COLORS } from "@/components/Selector/config";

export default {
  name: "SelectorContentConfiguratorOptionPicker",
  props: {
    options: Array,
    variant: String,
    info: String,
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
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1.5rem;

  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  &-info {
    font-size: 0.85rem;

    &:before {
      content: "*";
    }
  }

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

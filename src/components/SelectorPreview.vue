<template>
  <div class="selector-preview">
    <img src="@/assets/img/slider.jpeg" alt="canapé" />
  </div>
</template>

<script>
export default {
  name: "SelectorPreview",
};
</script>

<style lang="scss" scoped>
.selector-preview {
  position: relative;
  height: calc(100vh - 130px);
  position: sticky;
  top: 0px;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 2rem));
    object-fit: cover;
  }
}
</style>

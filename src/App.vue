<template>
  <div id="app">
    <div>
      <TheHeader />
      <SelectorWrapper />
    </div>
    <DummyContent />
  </div>
</template>

<script>
import DummyContent from "@/components/DummyContent.vue";
import SelectorWrapper from "@/components/SelectorWrapper.vue";
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SelectorWrapper,
    DummyContent,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $primary-light;
}
</style>

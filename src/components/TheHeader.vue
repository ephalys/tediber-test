<!--Using functional component here for faster rendering-->
<template functional>
  <header id="header">
    This is a simulated header with the exact same height than the original.
  </header>
</template>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem;
  min-height: 130px; //make sure that the text is not cropped in mobile view
  background-color: $primary;
  color: white;
  z-index: 1;
}
</style>

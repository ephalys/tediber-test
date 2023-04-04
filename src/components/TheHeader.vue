<!--Using functional component here for faster rendering-->
<template functional>
  <header id="header">
    This is a simulated header with the exact same height than the original.
  </header>
</template>

<style lang="scss">
#header {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 130px; //make sure that the text is not cropped in mobile view
  background-color: $primary;
  color: white;
  padding: 2rem;
}
</style>

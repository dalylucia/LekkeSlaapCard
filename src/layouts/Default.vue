<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss">

// iphone xs outline

.wrapper {
  max-width: 375px;
  height: 812px;
  background-color: $ls-white;
  margin: auto;
  margin-top: 5vh;
  border-radius: 25px;
  overflow-y: hidden;
}

</style>

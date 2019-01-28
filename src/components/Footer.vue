<template>
  <footer>Crafted with love by <a href="https://twitter.com/bearwhocode">@bearwhocode</a><br/>Awesome API by
    <a href="https://thecolorapi.com">thecolorapi</a>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  padding: 0 20px;
  font-size: 13px;
  position: absolute;
  bottom: 2rem;
  color: #AAA;
  text-align: center;
  box-sizing: border-box;

  @media screen and (max-width: 570px) {
    font-size: 11px;
    position: relative;
    margin-top: 40px;
    bottom: initial;
    padding-bottom: 40px;
  }
}
</style>

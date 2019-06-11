<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 10">
    <text
      style="line-height:1.25;"
      x="0"
      y="8"
      font-weight="400"
      font-size="10.583"
      font-family="Nunito Sans Black"
      letter-spacing="0"
      word-spacing="0"
      stroke-width=".265"
      fill="none"
    >
      <tspan>SVG ANIMATIONS</tspan>
    </text>
  </svg>
</template>

<script>
export default {
  name: "HomeTitle"
};
</script>

<style scoped lang="scss">
@import "../../scss/source";

text {
  fill: rgba(255, 255, 255, 0.1);
  stroke: $purple;
  animation: writing ease 6s infinite alternate;
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
}

@keyframes writing {
  from {
    stroke-dashoffset: 80;
    fill: rgba(255, 255, 255, 0.1);
  }
  to {
    stroke-dashoffset: 0;
    fill: rgba(255, 255, 255, 0.3);
  }
}
</style>

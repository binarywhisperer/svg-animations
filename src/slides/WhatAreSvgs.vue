<template>
  <section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            What are SVGs?
          </h1>
          <h2 class="subtitle">
            scalable vector graphics
          </h2>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            Graphics
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            SVG is an XML based image format.
          </div>
        </div>
        <header class="card-header">
          <p class="card-header-title is-large">
            Vector
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            Vector based vs Raster based.
          </div>
        </div>
        <header class="card-header">
          <p class="card-header-title is-large">
            Scalable
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            One image for every target display width. Srcset requires much more
            work.
          </div>
        </div>
        <footer class="card-footer">
          <!--<a href="#" class="card-footer-item">Delete</a>-->
        </footer>
      </div>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            SVG DOM
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            Web developers are use to working with a DOM, so SVG's DOM should
            feel intuitive.
          </div>
        </div>
        <footer class="card-footer">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg"
            target="_blank"
            class="card-footer-item"
            >SVG DOM Elements</a
          >
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths"
            target="_blank"
            class="card-footer-item"
            >The Power Of Paths</a
          >
          <a
            href="https://codepen.io/netsi1964/pen/pJzWoz"
            target="_blank"
            class="card-footer-item"
            >Interactive Path Codepen</a
          >
        </footer>
      </div>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            viewBox
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            You view SVGs through a "window" called the viewBox. This is
            incredibly powerful, but a common beginner gotcha.
          </div>
        </div>
        <footer class="card-footer">
          <a
            href="https://codepen.io/binarywhisperer/full/GeBqKz"
            target="_blank"
            class="card-footer-item"
            >viewBox Dolly Zoom Example</a
          >
          <a
            href="https://css-tricks.com/scale-svg/"
            target="_blank"
            class="card-footer-item"
            >Classic CSS Tricks on viewBox</a
          >
        </footer>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "WhatAreSvgs"
};
</script>

<style scoped lang="scss"></style>

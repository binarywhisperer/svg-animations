<template>
  <section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Native Animation Techniques
          </h1>
          <h2 class="subtitle">
            css && js
          </h2>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            Native CSS
          </p>
        </header>
        <header class="card-header">
          <p class="card-header-title is-large">
            PROS
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>No library, and effective in only a few lines.</li>
              <li>
                Performance is powerful, and even more so with Preprocessors.
                nth child stagger && variables
                <a
                  href="https://codepen.io/sdras/pen/9c852940ec52897ca79544879de90eab"
                  target="_blank"
                  >Example</a
                >
              </li>
              <li>Native JS can detect onAnimationEnd</li>
              <li>CSS is still actively expanding functionality.</li>
            </ul>
          </div>
        </div>
        <header class="card-header">
          <p class="card-header-title is-large">
            CONS
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li>Two handle Bezier easings</li>
              <li>Sequencing is difficult</li>
              <li>No motion along a path.</li>
              <li>Browser inconsistencies</li>
              <li>Transform origins are not intuitive</li>
              <li>Inherently there's keyframe code and application code.</li>
            </ul>
          </div>
        </div>
        <footer class="card-footer">
          <!--<a href="#" class="card-footer-item">Delete</a>-->
        </footer>
      </div>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            Native requestAnimationFrame()
          </p>
        </header>
        <footer class="card-footer">
          <a
            href="https://codepen.io/binarywhisperer/pen/ZqOOdm"
            target="_blank"
            class="card-footer-item"
            >Dots Card</a
          >
        </footer>
      </div>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            Canvas (Raster Based SVG)
          </p>
        </header>
      </div>

      <div class="card">
        <header class="card-header">
          <p class="card-header-title is-large">
            Web Animations API (polyfill required)
          </p>
        </header>
        <footer class="card-footer">
          <a
            href="https://codepen.io/danwilson/pen/QwrZwd"
            target="_blank"
            class="card-footer-item"
            >Example</a
          >
        </footer>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "AnimationTechniques"
};
</script>

<style scoped lang="scss"></style>

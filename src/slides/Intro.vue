<template>
  <section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Special Thanks
          </h1>
          <h2 class="subtitle">
            before we get started...
          </h2>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="tile is-parent">
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="title">Special Thanks to Sarah Drasner @sarah_edo</p>
            <div class="content">
              The majority of the examples in this presentations are references
              from her book, and many of those she created herself. Her O'Reilly
              book is a great "0 to SVG Animations in Prod" resource, and
              contains a lot of valuable vocabulary, techniques, examples and
              performance comparisons.
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <div class="content">
              <figure class="image">
                <img src="../assets/sarahdrasner.jpg" />
              </figure>
            </div>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "IntroSlide",
  methods: {
    nextSlide() {}
  }
};
</script>

<style scoped lang="scss"></style>

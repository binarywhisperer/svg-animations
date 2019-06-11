<template>
  <div class="slides">
    <component :is="currentSlide"></component>
    <section class="container">
      <section class="slide-nav">
        <button
          class="button is-uppercase is-primary is-large"
          @click="nextSlide"
        >
          Next Slide &raquo;
        </button>
      </section>
    </section>
  </div>
</template>

<script>
import Intro from "@/slides/Intro.vue";
import WhatAreSvgs from "@/slides/WhatAreSvgs.vue";
import WhyAnimate from "@/slides/WhyAnimate.vue";
import AnimationTechniques from "@/slides/AnimationTechniques.vue";
import LibraryAnimationTechniques from "@/slides/LibraryAnimationTechniques.vue";
import Extras from "@/slides/Extras.vue";
import TipsAndTricks from "@/slides/TipsAndTricks.vue";
import Production from "@/slides/Production.vue";
import Promo from "@/slides/Promo.vue";

export default {
  name: "Slides",
  components: {
    Intro,
    WhatAreSvgs,
    WhyAnimate,
    AnimationTechniques,
    LibraryAnimationTechniques,
    TipsAndTricks,
    Production,
    Extras,
    Promo
  },
  computed: {
    currentSlide() {
      return this.$store.getters.currentSlide;
    }
  },
  methods: {
    nextSlide() {
      window.scrollTo(0, 0);
      this.$store.commit("nextSlide");
    }
  },
  mounted() {
    document.addEventListener("keydown", event => {
      if (event.ctrlKey) {
        this.$store.commit("setSlide", event.key);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/source";
</style>

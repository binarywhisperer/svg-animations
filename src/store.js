import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slides: [
      "Intro",
      "WhatAreSvgs",
      "WhyAnimate",
      "AnimationTechniques",
      "LibraryAnimationTechniques",
      "TipsAndTricks",
      "Production",
      "Extras",
      "Promo"
    ],
    currentSlide: 0
  },
  getters: {
    currentSlide(state) {
      return state.slides[state.currentSlide];
    }
  },
  mutations: {
    nextSlide(state) {
      if (typeof state.slides[state.currentSlide + 1] !== "undefined") {
        state.currentSlide = state.currentSlide + 1;
      }
    },
    setSlide(state, slide) {
      if (typeof state.slides[slide] !== "undefined") {
        state.currentSlide = slide;
      }
    },
    previousSlide(state) {
      state.currentSlide = state.currentSlide - 1;
    }
  },
  actions: {}
});

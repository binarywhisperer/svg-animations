import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Slides from "./views/Slides.vue";
import Elephant from "./views/Elephant";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/slides",
      name: "slides",
      component: Slides
    },
    {
      path: "/elephant",
      name: "elephant",
      component: Elephant
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

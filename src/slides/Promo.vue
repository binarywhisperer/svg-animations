<template>
  <section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Thank you MemphisWebWorkers
          </h1>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="tile is-parent">
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="title">My Tech Twitter is @codebybryce</p>
            <div class="content">
              Feel free to ask me specific questions in Memtech Slack. Debugging
              via Slack is a hobby of mine.
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <div class="content">
              <figure class="image">
                <svg viewbox="0 0 100 100" id="waving-man">
                  <ellipse ry="10" rx="9" cx="50" cy="12" fill="black" />
                  <ellipse ry="9" rx="7" cx="51" cy="12" fill="white" />
                  <polyline
                    class="left-arm"
                    points="35,60 41.5,42.5 48,25"
                    stroke-width="3"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <polyline
                    class="right-arm"
                    points="52,25 58.5,42.5 65,60"
                    stroke-width="3"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <polyline
                    points="50,25 50,50"
                    stroke-width="6"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <polyline
                    class="right-leg"
                    points="51,50 55.5,72.5 60,95"
                    stroke-width="3"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <polyline
                    class="left-leg"
                    points="49,50 44.5,72.5 40,95"
                    stroke-width="3"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
              </figure>
            </div>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "Promo",
  mounted() {
    anime({
      targets: "#waving-man .left-arm",
      points: [
        { value: ["35,60 41.5,42.5 48,25", "35,60 41.5,42.5 48,25"] },
        { value: "25,40 41.5,42.5 48,25" },
        { value: "10,15 28.5,36.5 48,25" },
        { value: "10,15 28.5,36.5 48,25" },
        { value: "25,12 28.5,36.5 48,25" },
        { value: "10,15 28.5,36.5 48,25" },
        { value: "25,12 28.5,36.5 48,25" },
        { value: "10,15 28.5,36.5 48,25" },
        { value: "25,12 28.5,36.5 48,25" },
        { value: "35,60 41.5,42.5 48,25" }
      ],
      easing: "linear",
      duration: 3000,
      loop: true
    });
  }
};
</script>

<style scoped lang="scss">
svg {
  width: 200px;
  fill: none;
}

.gren {
  path {
    fill: red;
    fill-rule: evenodd;
  }
}
</style>

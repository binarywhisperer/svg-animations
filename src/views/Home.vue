<template>
  <div class="home">
    <div class="title">
      <home-title></home-title>
    </div>
    <div class="background">
      <background></background>
    </div>
    <div class="get-started">
      <router-link tag="button" class="button is-primary is-large" to="/slides"
        >Slides</router-link
      >
    </div>
  </div>
</template>

<script>
import Background from "@/components/Home/Background.vue";
import HomeTitle from "@/components/Home/Title.vue";

export default {
  name: "home",
  components: {
    Background,
    HomeTitle
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/source";

.home {
  position: relative;

  .title {
    z-index: 2;
    position: absolute;
    width: 80%;
    margin: 1rem 10%;
  }

  .background {
    position: absolute;
    width: 100%;
  }
}
.get-started {
  position: absolute;
  top: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 2;
}
</style>

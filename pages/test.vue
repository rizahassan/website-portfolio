<template>
  <carousel-3d :width="400" :height="500" :count="10" class="w-full">
    <slide :index="0" class="" @mouseenter="handleVisibility(show)">
      <div v-if="show" class="absolute w-auto h-auto ">
        <h1>Instagram Filter with Spark AR</h1>
        <p>DESCRIPTION</p>
      </div>
      <img class="hover:opacity-25" src="~/static/instafilter.png" />
    </slide>

    <slide :index="1">
      <img src="~/static/twitter-bot.png" />
    </slide>

    <slide :index="2">
      <img src="https://placehold.it/360x270" />
    </slide>
    <slide :index="3">
      <img src="https://placehold.it/360x270" />
    </slide>
    <slide :index="4">
      <img src="https://placehold.it/360x270" />
    </slide>
    <slide :index="5">
      <img src="https://placehold.it/360x270" />
    </slide>
    <div></div>
  </carousel-3d>
</template>

<script>
export default {
  data: () => {
    show: true;
  },
  methods: {
    handleVisiblity(show) {
      show = true;
    }
  },
  props: {}
};
</script>

<style scoped></style>

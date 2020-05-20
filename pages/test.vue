<template>
  <carousel-3d
    :controls-visible="true"
    :width="400"
    :height="570"
    :count="10"
    class="md:tw-w-full"
  >
    <slide
      v-for="(item, i) in projectList"
      :key="i"
      :index="i"
      class="tw-relative"
      @mouseclick="handleVisiblity(i)"
    >
      <img v-bind:src="item.image" />
      <div
        class="tw-text-center tw-absolute tw-bottom-0 tw-bg-white tw-h-20 tw-w-full"
      >
        <h1 class="tw-opacity-100 tw-text-gray-800 tw-text-xl tw-text-center">
          {{ item.topic }}
        </h1>
        <button
          class="tw-inline-block tw-rounded tw-py-2 tw-px-4 tw-shadow-lg tw-bg-transparent hover:tw-bg-blue-700 tw-border tw-border-blue-700 hover:tw-text-white tw-transform tw-duration-500 hover:tw-scale-125 "
        >
          <a :href="'' + item.link">Learn More</a>
        </button>
      </div>
    </slide>
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

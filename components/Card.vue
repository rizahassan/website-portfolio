<template>
  <div
    id="card"
    class="tw-bg-white tw-max-w-sm tw-rounded tw-overflow-hidden tw-shadow-lg"
  >
    <div class="tw-px-2">
      <h3
        class=" tw-mt-6 md:tw-h-24 lg:tw-h-16 text-lg md:tw-text-2xl tw-font-semibold"
      >
        {{ topic }}
      </h3>
      <p class=" tw-mt-6 tw-text-xs md:tw-h-32 lg:tw-h-24 md:tw-text-lg ">
        {{ description }}
      </p>
      <button
        class="tw-my-8 tw-rounded-lg tw-transition tw-duration-500 tw-bg-red-500 tw-text-white   hover:tw-bg-white hover:tw-border-2 hover:tw-border-gray-800 hover:tw-text-gray-800 focus:tw-outline-none focus:tw-shadow-outline tw-p-1"
      >
        <a class="tw-text-sm tw-p-2" :href="'' + link">Learn More</a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    topic: String,
    image: String,
    description: String,
    link: String
  }
};
</script>
<style scoped></style>

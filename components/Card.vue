<template>
  <div id="card" class="  tw-px-2 tw-rounded-lg tw-text-center">
    <img
      id="img"
      class="sm:tw-w-1/2 sm:tw-h-1/2 lg:tw-w-7/12 lg:tw-h-7/12 tw-rounded-lg tw-inline-block tw-shadow-2xl "
      :src="require(`../static/${image}`)"
      alt="card icon"
    />
    <div class="tw-px-2">
      <h3
        class=" tw-mt-6 md:tw-h-24 lg:tw-h-16 text-lg md:tw-text-2xl tw-font-semibold"
      >
        {{ topic }}
      </h3>
      <p class=" tw-text-xs md:tw-h-48 lg:tw-h-24 md:tw-text-lg ">
        {{ description }}
      </p>
      <button
        class="tw-rounded-lg tw-bg-white tw-border tw-border-gray-800 tw-shadow-2xl hover:tw-bg-gray-400 tw-p-1"
      >
        <a class="tw-text-sm" :href="'' + link">Learn More</a>
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

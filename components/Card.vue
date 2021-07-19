<template>
  <div class="tw-relative tw-px-4">
    <div class="tw-absolute tw-z-0 tw-inset-0 tw-bg-gradient-to-r tw-from-red-400 tw-to-cyan tw-shadow-lg tw-transform tw--skew-y-12  tw-rounded-lg"></div>
    <div class="tw-absolute tw-z-0 tw-inset-0 tw-bg-gradient-to-r tw-from-cyan tw-to-red-400 tw-shadow-lg tw-transform tw--skew-y-6 tw-rounded-lg"></div>
    <div
    id="card"
    class="tw-bg-white tw-z-40 tw-max-w-sm tw-rounded-lg tw-overflow-hidden tw-backdrop-filter tw-backdrop-blur tw-bg-opacity-30"
  >
    
    <div class="tw-px-2">
      <h3
        class=" tw-mt-6 md:tw-h-24 lg:tw-h-16 text-lg md:tw-text-2xl tw-font-semibold"
      >
        {{ topic }}
      </h3>
      <img
          class="tw-transition tw-transform tw-duration-700 hover:tw-scale-125"
          :src="require('@/static/' + image + '')"
          :alt="alt"
          :style="{borderColor:color}"
        />
      <p class=" tw-mt-6 tw-text-xs md:tw-h-32 lg:tw-h-24 md:tw-text-lg ">
        {{ description }}
      </p>
      <button
        class="tw-my-8 lg:tw-my-12 tw-rounded-lg tw-transition tw-duration-500 tw-bg-red-500 tw-bg-opacity-30 hover:tw-bg-opacity-30 tw-backdrop-filter tw-backdrop-blur-lg tw-text-white   hover:tw-bg-white hover:tw-border-2 hover:tw-border-gray-800 hover:tw-text-gray-800 focus:tw-outline-none focus:tw-shadow-outline tw-p-1"
      >
        <a class="tw-text-sm tw-p-2" :href="'' + link">Learn More</a>
      </button>
    </div>
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
    link: String,
    alt:String
  }
};
</script>
<style scoped></style>

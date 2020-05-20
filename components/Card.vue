<template>
  <div id="card" class=" tw-px-2 tw-rounded-lg tw-text-center">
    <img
      id="img"
      class=" tw-rounded-lg tw-inline-block tw-shadow-2xl "
      :src="require(`../static/${image}`)"
      alt="card icon"
    />
    <div class="tw-px-2">
      <h3 class=" tw-mt-6 tw-text-2xl tw-font-semibold">{{ topic }}</h3>
      <p class=" tw-text-lg">{{ description }}</p>
      <button
        class="tw-rounded-lg tw-bg-white tw-border tw-border-gray-800 hover:tw-bg-gray-400  tw-p-2"
      >
        <a :href="'' + link">Learn More</a>
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

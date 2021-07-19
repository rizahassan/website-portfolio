<template>
  <div class="tw-rounded-lg tw-w-9/12 md:tw-w-1/2 tw-h-80 ">
    <div
      class="tw-rounded-t-lg  tw-w-full tw-h-8"
      :style="{ backgroundColor: color }"
    ></div>
    <div
      class=" tw-h-11/12 tw-bg-white tw-w-full tw-inline-block tw-rounded-b-md tw-border-2" :style="{borderColor:color}"
    >
      <div class="tw-flex tw-justify-center tw-mt-4">
        <img
          class="tw-w-16 tw-h-16 tw-rounded-full  tw-items-center tw-border-2"
          :src="require('@/static/' + image + '')"
          alt="something"
          :style="{borderColor:color}"
        />
      </div>
      <div class=" tw-mt-2 tw-flex tw-flex-col tw-items-center tw-text-center">
        <p class="tw-font-extrabold tw-my-2">{{ company }}</p>
        <p class="tw-mt-2">{{ title }}</p>
        <p class="tw-my-5 tw-text-sm">{{ date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JobList',
  props: {
    company: String,
    title: String,
    image: String,
    color: String,
    date: String
  }
};
</script>

<template>
  <div class="tw-justify-center tw-mt-2">
    <ol class="tw-inline-block tw-flex tw-flex-row tw-text-gray-800 ">
      <li
        v-for="(_, index) in elements"
        class="dot tw-mt-2 tw-px-2 "
        :key="index"
        :class="{ 'dot-selected': currentElementIndex === index }"
      >
        <button
          class="indicator-btn tw-rounded-full tw-bg-white tw-border tw-border-gray-800 tw-text-white hover:tw-bg-gray-800 hover:tw-text-gray-800"
          @click="showElement(index)"
          :disabled="currentElementIndex === index"
        >
          HERE
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Indicators',
  props: { elements: Array, currentElementIndex: Number, showElement: Function }
};
</script>

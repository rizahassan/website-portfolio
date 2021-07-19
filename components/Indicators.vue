<template>
  <div class="tw-justify-center tw-mt-2">
    <ol class=" tw-flex tw-flex-row tw-text-gray-800 ">
      <li
        v-for="(_, index) in elements"
        class="dot tw-mt-2 tw-px-2 "
        :key="index"
        :class="{ 'dot-selected': currentElementIndex === index }"
      >
        <button
          class="indicator-btn tw-rounded-full tw-w-4 tw-h-4 tw-bg-white tw-border tw-border-gray-800 tw-text-white hover:tw-bg-cyan"
          @click="showElement(index)"
          :disabled="currentElementIndex === index"
          :class="[
            currentElementIndex === index ? 'tw-bg-red-400' : 'tw-bg-white'
          ]"
        ></button>
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

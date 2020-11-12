<template>
  <main class="tw-max-w-screen-xl tw-font-serif">
    <!-- <div class="tw-mt-32 tw-flex tw-flex-col tw-justify-center tw-items-center">
      <form class="mt-12" @submit="checkForm">
        <label for="favcolor">What is Iffah's Favorite Color?</label><br />
        <div class="md:w-2/3">
          <input
            class="tw-bg-gray-200 tw-appearance-none tw-border-2 tw-border-gray-200 tw-rounded tw-w-full tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight tw-focus:outline-none tw-focus:bg-white tw-focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value=" 'Yellow' "
            v-model="answer"
          />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div> -->

    <div
      class="tw-mt-64 tw-mb-64 tw-flex tw-flex-col tw-justify-center tw-items-center"
    >
      <a class=" tw-w-1/4" href="http://allaboutyou.rsvpify.com">
        <GiftBox class="" />
      </a>
      <h2 class="tw-mt-2">Click for a sursurpis</h2>
    </div>
  </main>
</template>

<script>
import GiftBox from '~/components/svg/GiftBox.vue';

export default {
  components: {
    GiftBox
  }
  // data: {
  //   answer: '',
  //   check: false
  // },
  // methods: {
  //   checkForm: function(e) {
  //     if (this.answer == 'red' || 'Red') {
  //       this.check = true;
  //     }
  //   }
  // }
};
</script>

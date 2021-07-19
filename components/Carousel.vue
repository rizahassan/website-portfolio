<template>
  <div class="">
    <div class="card-carousel tw-flex tw-flex-row tw-justify-center">
      <div
        class="tw-w-2/12 md:tw-w-1/12 md:tw-mr-12 tw-flex tw-items-center tw-justify-center"
      >
        <ArrowButton
          arrowType="leftarrow"
          @click.native="showPrevElement"
          :disabled="this.reachedMaxLeft"
          class=""
        />
      </div>

      <Card
        class=""
        :topic="currentElement.topic"
        :description="currentElement.description"
        :image="currentElement.image"
        :link="currentElement.link"
        :alt="currentElement.alt"
      />
      <div
        class="tw-w-2/12 md:tw-w-1/12 md:tw-ml-12 tw-flex tw-items-center tw-justify-center"
      >
        <ArrowButton
          arrowType="rightarrow"
          @click.native="showNextElement"
          :disabled="this.reachedMaxRight"
          class=""
        />
      </div>
    </div>
    <div class="tw-text-center">
      <Indicators
        :elements="this.cards"
        :currentElementIndex="this.currentElementIndex"
        :showElement="this.showElement"
        class="tw-inline-block"
      />
    </div>
  </div>
</template>
<script>
import Card from './Card.vue';
import ArrowButton from './ArrowButton.vue';
import Indicators from './Indicators.vue';
export default {
  name: 'Carousel',
  props: { cards: Array },
  components: { Card, ArrowButton, Indicators },
  data() {
    return {
      currentElementIndex: 0
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
    },
    reachedMaxLeft() {
      return this.currentElementIndex === 0;
    },
    reachedMaxRight() {
      return this.currentElementIndex === this.cards.length - 1;
    }
  },
  methods: {
    showNextElement() {
      this.currentElementIndex++;
    },
    showPrevElement() {
      this.currentElementIndex--;
    },
    showElement(elementIndex) {
      this.currentElementIndex = elementIndex;
    }
  }
};
</script>

<template>
  <main class="md:flex md:flex-row font-serif tracking-wider ">
    <div
      v-for="item in projectList"
      :key="(item.image, item.topic, item.description, item.link)"
      class="py-2 lg:py-0 md:px-8  "
    >
      <div
        class=" max-w-sm bg-white rounded overflow-hidden shadow-2xl transition ease-in-out duration-700"
      >
        <div
          class="px-6 py-4"
          @mouseenter="handleVisibility(item, projectList)"
          @mouseleave="handleVisibility(item, projectList)"
        >
          <div class="font-bold text-center px-2 text-xl mb-2">
            {{ item.topic }}
          </div>
          <div v-if="item.show" class="w-auto">
            <p class="text-gray-700 text-base ">
              {{ item.description }}
            </p>
            <div class="pt-4 text-right">
              <button
                class="inline-block rounded py-2 px-4 shadow-lg bg-transparent hover:bg-blue-700 border border-blue-700 hover:text-white "
              >
                <a :href="'' + item.link">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    projectList: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleVisibility(chosenCard, projectList) {
      projectList.forEach(item => {
        if (item !== chosenCard) {
          item.show = false;
        }
      });
      chosenCard.show = !chosenCard.show;
    },
    passLink(link) {
      return link;
    }
  },
  computed: {}
};
</script>

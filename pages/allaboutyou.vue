<template>
  <main class="tw-max-w-screen-xl tw-font-serif">
    <!-- Hero Image -->
    <div><img src="~/static/allimg.jpg" alt="" /></div>
    <!-- Form -->

    <div
      v-if="show === false"
      class="tw-mt-64 tw-mb-64 tw-flex tw-text-center tw-justify-center"
    >
      <form
        class="tw-flex tw-flex-col tw-items-center tw-justify-center"
        @submit="checkForm"
      >
        <label for="question">What is Iffah's Fav Color?</label>
        <input
          class="tw-shadow tw-text-center tw-appearance-none tw-border tw-border-red-500 tw-rounded tw-w-1/2 tw-py-2 tw-px-3 tw-text-gray-700 tw-mb-3 tw-leading-tight tw-focus:outline-none tw-focus:shadow-outline"
          type="text"
          placeholder=" pink "
          v-model="identityAnswer"
        />
        <input
          class="tw-rounded-lg tw-p-2 tw-border-2 tw-border-black"
          type="submit"
          value="Submit"
        />
      </form>
    </div>

    <!-- Agenda -->
    <div v-if="show === true">
      <p
        class="tw-text-green-600 tw-text-center tw-px-2 tw-font-semibold tw-mt-4"
      >
        Please click the GREEN BUTTON only when you have completed one activity.
      </p>
      <div class="tw-h-full tw-flex tw-flex-row tw-mt-32 tw-mb-64">
        <div
          class="tw-ml-12 tw-border-l-4 tw-border-solid tw-border-red-400 "
        ></div>
        <!-- Div for cards -->
        <div class="tw-ml-4 tw-w-full ">
          <!-- GrabCar -->
          <div class="tw-flex tw-flex-row">
            <h2 class="tw-flex tw-justify-center tw-items-center  tw-mr-4">
              12:20 p.m.
            </h2>
            <div
              class=" tw-w-4/6 tw-pb-4 tw-border-2 tw-border-gray-600 tw-rounded-lg "
            >
              <h3 class="tw-mt-2 tw-font-bold tw-text-center">Grab Car</h3>
              <p class="tw-mt-4 tw-text-center">
                Check your email for a Grab Car Gift Card! <br /><br />
                Then, take a ride to Suria KLCC.
              </p>
              <div
                class="tw-mt-4 tw-flex tw-flex-row tw-items-center tw-justify-center"
              >
                <button
                  @click="answer1 = true"
                  class=" tw-text-center tw-rounded-full tw-w-8 tw-h-8 tw-bg-green-500"
                ></button>
              </div>
            </div>
          </div>
          <!-- Picture -->
          <div v-if="answer1 === true" class="tw-flex tw-flex-row  tw-mt-12">
            <h2 class="tw-flex tw-justify-center tw-items-center  tw-mr-4">
              12:30 p.m.
            </h2>
            <div
              class=" tw-w-4/6 tw-pb-4 tw-border-2 tw-border-gray-600 tw-rounded-lg "
            >
              <h3 class="tw-mt-2 tw-font-bold tw-text-center">Photoshoot</h3>
              <p class="tw-mt-4 tw-text-center">
                Kalau Iffah okay, minta Allisya or someone untuk tangkap gambar
                with Suria KLCC/KLCC as the background.<br /><br />
                Lepas tu, upload gambar kat sini : <br />
              </p>
              <a
                class="tw-text-center tw-ml-12 tw-text-red-400"
                href="https://photos.app.goo.gl/GNsGL3o45tRtPcHS9"
                target="_blank"
                >PHOTO ALBUM</a
              >
              <div
                class="tw-mt-4 tw-flex tw-flex-row tw-items-center tw-justify-center"
              >
                <button
                  @click="answer2 = true"
                  class=" tw-text-center tw-rounded-full tw-w-8 tw-h-8 tw-bg-green-500"
                ></button>
              </div>
            </div>
          </div>
          <!-- Lunch -->
          <div v-if="answer2 === true" class="tw-flex tw-flex-row  tw-mt-12">
            <h2 class="tw-flex tw-justify-center tw-items-center tw-mr-4">
              12:45 p.m.
            </h2>
            <div
              class="tw-w-4/6 tw-pb-4 tw-border-2 tw-border-gray-600 tw-rounded-lg  "
            >
              <h3 class="tw-mt-2 tw-font-bold tw-text-center">Lunch</h3>
              <p class="tw-mt-4 tw-text-center">
                Teka teki: Apakah nama bahan di bawah? *Kalau tak tahu, taktau
                la nak cakap apa :P
              </p>
              <img src="~/static/lemon_grass.jpg" />
              <p class="tw-mt-4 tw-text-center">
                Visit the restaurant with the name of the ingredient above on
                Level 2, Suria KLCC. <br /><br />
                A reservation has been made under the name "RUHUL". <br />
                Enjoy !!<br /><br />Jangan lupa tangkap gambar kat restoran tu
                please ;3
              </p>
              <a
                class="tw-text-center tw-ml-12 tw-text-red-400"
                href="https://photos.app.goo.gl/GNsGL3o45tRtPcHS9"
                target="_blank"
                >PHOTO ALBUM</a
              >

              <div
                class="tw-mt-4 tw-flex tw-flex-row tw-items-center tw-justify-center"
              >
                <button
                  @click="answer3 = true"
                  class=" tw-text-center tw-rounded-full tw-w-8 tw-h-8 tw-bg-green-500"
                ></button>
              </div>
            </div>
          </div>
          <!-- Nail Parlor -->
          <div v-if="answer3 === true" class="tw-flex tw-flex-row tw-mt-12">
            <h2 class="tw-flex tw-justify-center tw-items-center tw-mr-4">
              01:45 p.m.
            </h2>
            <div
              class="tw-w-4/6 tw-pb-4 tw-border-2 tw-border-gray-600 tw-rounded-lg  "
            >
              <h3 class="tw-mt-2 tw-font-bold tw-text-center">
                QUEEN
              </h3>
              <!-- <p class="tw-mt-4 tw-text-center"></p> -->
              <div
                class="tw-mt-8 tw-mb-8 tw-flex tw-items-center tw-justify-center"
              >
                <nuxt-link
                  class=" tw-text-red-400 link-default"
                  to="/two"
                  target="_blank"
                >
                  Cuba tekan sini
                </nuxt-link>
              </div>

              <div
                class="tw-mt-4 tw-flex tw-flex-row tw-items-center tw-justify-center"
              >
                <button
                  @click="answer4 = true"
                  class=" tw-text-center tw-rounded-full tw-w-8 tw-h-8 tw-bg-green-500"
                ></button>
              </div>
            </div>
          </div>
          <!-- Mystery -->
          <div v-if="answer4 === true" class="tw-flex tw-flex-row tw-mt-12">
            <h2 class="tw-flex tw-justify-center tw-items-center tw-mr-4">
              02:15 p.m.
            </h2>
            <div
              class="tw-w-4/6 tw-pb-4 tw-border-2 tw-border-gray-600 tw-rounded-lg "
            >
              <h3 class="tw-mt-2 tw-font-bold tw-text-center">
                Buah Tangan
              </h3>
              <p class="tw-mt-2 tw-px-2">
                I hope y'all like the basic make over! Next time boleh buat full
                manicure sendiri :P <br />
                <br />
                We're almost at the end of the outing today :( I hope that you
                enjoy it so far. <br />
                I promised something before, so I want to end today with
                something that you can grab and bring it home.
              </p>
              <div class="tw-flex tw-text-center tw-justify-center">
                <a class=" tw-text-red-400" href="/three" target="_blank"
                  >Cer tekan sini</a
                >
              </div>

              <div
                class="tw-mt-4 tw-flex tw-flex-row tw-items-center tw-justify-center"
              >
                <button
                  @click="answer5 = true"
                  class=" tw-text-center tw-rounded-full tw-w-8 tw-h-8 tw-bg-green-500"
                ></button>
              </div>
            </div>
          </div>

          <!-- End -->
          <div v-if="answer5 === true" class="tw-flex tw-flex-row tw-mt-12">
            <h2 class="tw-flex tw-justify-center tw-items-center tw-mr-4">
              02:30 p.m.
            </h2>
            <div
              class="tw-w-4/6 tw-pb-4 tw-border-2 tw-border-gray-600 tw-rounded-lg "
            >
              <h3 class="tw-mt-2 tw-font-bold tw-text-center">
                End of today's journey
              </h3>
              <p class="tw-mt-2 tw-px-2">
                We reached the end of today's activity. Enjoy the rest of your
                day Iffah and Allisya! <br />
                <br />
                Psssst. Just a note from me at the very end :)
              </p>

              <div
                class="tw-mt-4 tw-flex tw-flex-row tw-items-center tw-justify-center"
              >
                <a class="tw-text-red-400" href="/last" target="_blank">NOTE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GiftBox from '~/components/svg/GiftBox.vue';

export default {
  components: {
    GiftBox
  },
  data: () => ({
    identityAnswer: '',
    identity: 'red',
    show: false,
    answer1: false,
    answer2: false,
    answer3: false,
    answer4: false,
    answer5: false,
    answer6: false
  }),
  // computed: {
  //   checkAnswer() {
  //     return this.identityAnswer.toLowerCase();
  //   }
  // },
  methods: {
    checkForm() {
      if (this.identityAnswer.toLowerCase() == this.identity) {
        this.show = true;
      }
    }
  }
};
</script>

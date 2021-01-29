<template>
  <main class="tw-max-w-screen-xl tw-font-serif">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-scrollto"></script>
    <div id="firstsection" class="tw-h-screen tw-w-screen tw-bg-black">
      <div class="lg:tw-flex lg:tw-flex-row">
        <div
          class=" tw-text-center tw-transition-all tw-duration-500 tw-ease-out tw-transform hover:tw-translate-x-4 lg:tw-w-1/2 lg:tw-pt-24"
        >
          <img
            src="~/static/rizaImage.jpg"
            alt="Riza Hassan's animated image"
            class="tw-mt-12 tw-inline-block tw-rounded-full tw-border-2 tw-shadow-lg tw-border-gray-800 tw-w-64 tw-h-64"
          />
        </div>
        <!-- Typing animation -->
        <div
          class="lg:tw-w-1/2 tw-mx-8 md:tw-mx-32 tw-mt-4 lg:tw-mt-48 lg:tw-mr-24 tw-pl-4 md:tw-pl-12 tw-rounded-lg tw-shadow-2xl  tw-font-semibold tw-tracking-widest tw-transition-all tw-duration-500 tw-transform hover:tw-translate-x-4 "
        >
          <h1
            class=" tw-font-serif tw-text-white tw-text-4xl lg:tw-text-5xl tw-font-bold "
          >
            Hi,
          </h1>

          <vue-typed-js
            class="tw-text-white tw-pt-4 tw-text-2xl md:tw-text-4xl lg:tw-pt-4"
            :strings="['My name is Riza']"
            :typeSpeed="40"
            :startDelay="1000"
            :loop="true"
          >
            <span class="typing"></span>
          </vue-typed-js>
          <h2 class="tw-mt-2 tw-text-white tw-text-2xl">
            A student developer that is passionate about user experience.
          </h2>
        </div>
      </div>
      <div
        class="tw-text-center lg:tw-text-right  tw-mt-6 md:tw-mt-16 lg:tw-pr-64"
      >
        <div class="tw-inline-block  tw-flex-row"></div>
        <button
          class="tw-inline-block tw-border-2 tw-border-red-400 hover:tw-bg-red-400 tw-rounded-3xl tw-text-white tw-text-xs md:tw-text-xl tw-py-2 tw-px-4"
        >
          <a href="./Riza_Resume.pdf" target="_blank">My Resume</a>
        </button>
        <button
          class="tw-inline-block  tw-ml-4 tw-border-2 tw-border-red-400 hover:tw-bg-red-400 tw-rounded-3xl tw-text-white tw-text-xs md:tw-text-xl tw-py-2 tw-px-4"
        >
          <a href="mailto:ruhulruzbihan@gmail.com">Chat with me!</a>
        </button>
      </div>
      <div class="tw-flex tw-flex-row lg:tw-mt-12     ">
        <div
          class="tw-w-1/4 tw-ml-4 md:tw-ml-6 tw-mt-16 md:tw-mt-48 lg:tw-mt-40"
        >
          <img
            id="downarrow"
            src="~/static/downarrow.png"
            v-scroll-to="'#secondsection'"
            class=" tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 lg:tw-mt-12"
          />
        </div>
        <!-- Social -->
        <div
          class="tw-w-3/4 tw-mt-16 md:tw-mt-40 tw-flex tw-flex-col tw-items-end tw-mr-8   "
        >
          <a href="https://linkedin.com/in/riza-hassan" target="_blank"
            ><LinkedinIcon class="tw-h-8 tw-w-8 tw-mb-4 md:tw-h-12 md:tw-w-12"
          /></a>
          <a href="https://www.instagram.com/riza__hassan/" target="_blank"
            ><InstaIcon class="tw-h-8 tw-w-8 tw-mb-2 md:tw-h-12 md:tw-w-12"
          /></a>
          <a href="https://github.com/rizahassan" target="_blank"
            ><GithubIcon class="tw-h-8 tw-w-8 md:tw-h-12 md:tw-w-12"
          /></a>
        </div>
      </div>

      <!-- Social Media -->
    </div>
    <!-- Second section of the page -->
    <div id="secondsection" class="tw-h-screen tw-w-screen tw-bg-black">
      <!-- About Me container -->
      <div class="tw-pt-12 tw-pl-8 lg:tw-pl-24 tw-text-white">
        <h1 class=" tw-text-3xl md:tw-text-4xl tw-font-bold">About Me</h1>
        <div class="tw-ml-4 md:tw-text-2xl">
          <h2 class="tw-pt-12">Name: Riza Hassan</h2>
          <h2 class="tw-pt-4">
            Email:
            <a href="mailto:ruhulruzbihan@gmail.com">
              ruhulruzbihan@gmail.com</a
            >
          </h2>
        </div>
      </div>

      <!-- Education container -->
      <div class="tw-pt-12 tw-pl-8 lg:tw-pl-24 tw-text-white">
        <h1 class=" tw-text-3xl md:tw-text-4xl tw-font-bold">Education</h1>
        <hr class="tw-mt-4 tw-w-10/12" />

        <div class="tw-mt-3 tw-pl-4 tw-w-10/12">
          <p class="tw-font-bold md:tw-text-2xl">
            University of Wisconsin-Madison
          </p>
          <p class="tw-pt-2 tw-text-xs md:tw-text-xl">
            B.S. in Computer Science
          </p>
          <p class="tw-pt-2 tw-text-xs md:tw-text-xl">Aug 2019 - May 2021</p>
          <p class="tw-pt-2 tw-pr-2 tw-text-xs md:tw-text-xl">
            Relevant course: Advanced Data Structures, AI, Database Management
            Systems, Human-Computer Interaction, Computer Vision
          </p>
        </div>
        <hr class=" tw-mt-4 tw-w-10/12" />
        <div class="tw-mt-3 tw-pl-4 tw-w-10/12">
          <p class="tw-font-bold md:tw-text-2xl">Everett Community College</p>
          <p class="tw-pt-2 tw-text-xs md:tw-text-xl">
            A.A. in Computer Science
          </p>
          <p class="tw-pt-2 tw-text-xs md:tw-text-xl">Feb 2017 - March 2019</p>
          <p class="tw-pt-2 tw-pr-2 tw-text-xs md:tw-text-xl">
            Relevant course: Advanced Calculus, Physics III, Linear Algebra,
            Java Programming, C++ Programming
          </p>
        </div>
        <hr class="tw-mt-4 tw-w-10/12" />
      </div>
      <div class="tw-w-1/4 tw-ml-4 md:tw-ml-6 tw-mt-4 md:tw-mt-6  ">
        <img
          id="downarrow"
          src="~/static/downarrow.png"
          v-scroll-to="'#thirdsection'"
          class=" tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20"
        />
      </div>
    </div>

    <!-- Third section of the page -->
    <div id="thirdsection" class="tw-w-screen tw-h-screen tw-bg-black">
      <div class="tw-pt-6 tw-pl-8 lg:tw-pl-24 tw-text-white">
        <h1 class=" tw-text-3xl md:tw-text-4xl tw-font-bold">
          Relevant Experiences
        </h1>
        <hr class="tw-mt-4 tw-w-10/12" />

        <div class="tw-mt-3 md:tw-my-8 tw-pl-4 tw-w-10/12 md:tw-w-11/12">
          <p class="tw-font-bold md:tw-text-2xl">
            DoIT Quality Assurance
          </p>

          <p class="tw-pt-2 tw-text-xs md:tw-text-xl">
            Intern
          </p>

          <ul
            class="tw-pt-2 tw-pr-2 tw-text-xs md:tw-text-xl tw-space-y-2 lg:tw-pr-24"
          >
            <li>
              Collaborate in an agile environment with a team of 4 interns in
              testing university websites using Cypress to determine potential
              bugs.
            </li>
            <li>
              Update websites components, such as updating the website cookie
              notification using JavaScript to ensure the cookie notification
              displays consistently across different departmental websites.
            </li>
            <li>
              Improve website performance (slowed by large images) to 30% faster
              by enabling caches and using CDN such as Jetpack on Wordpress.
            </li>
          </ul>
        </div>
        <hr class=" tw-mt-4 tw-w-10/12" />
        <div class="tw-mt-3 md:tw-mt-8 tw-pl-4 tw-w-10/12">
          <p class="tw-font-bold md:tw-text-2xl">SpeakToUs Student Org</p>
          <p class="tw-pt-2 tw-text-xs md:tw-text-xl">
            Head of the Development team
          </p>

          <ul
            class="tw-pt-2 tw-pr-2 tw-text-xs md:tw-text-xl tw-space-y-2 lg:tw-pr-24"
          >
            <li>
              Develop a mobile responsive website where users (~10 users/month)
              can chat anonymously with student agents regarding their mental
              health situation.
            </li>
            <li>
              Lead the planning, designing, and development of web-related
              projects assigned to a team of 3 web developers and a graphic
              designer.
            </li>
            <li>
              Technology used: HTML, TailwindCSS, VueJS, Netlify, Tawk.To. URL:
              https://speaktous.online
            </li>
          </ul>
        </div>
        <hr class="tw-mt-4 tw-w-10/12" />
      </div>
      <div class="tw-w-1/4 tw-ml-4 md:tw-ml-6 tw-mt-4 md:tw-mt-6  ">
        <img
          id="downarrow"
          src="~/static/downarrow.png"
          v-scroll-to="'#fourthsection'"
          class=" tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20"
        />
      </div>
    </div>

    <!-- Fourth section of the page -->
    <div
      id="fourthsection"
      class="tw-h-screen tw-w-screen tw-relative tw-bg-black tw-text-center "
    >
      <!-- Change the background color -->
      <div class="">
        <div
          class="tw-text-center tw-pt-4 tw-duration:500  tw-transform  tw-hover:scale-125"
        >
          <h1
            class="tw-text-white tw-inline-block tw-text-3xl md:tw-text-5xl md:tw-mt-8 lg:tw-mt-4 tw-font-semibold tw-tracking-widest  "
          >
            My projects
          </h1>
        </div>
        <!-- Project Carousel  -->
        <div
          class="tw-inline-block tw-mt-40 tw-flex-wrap md:tw-mt-32 tw-py-12   "
        >
          <Carousel :cards="projectList" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from '~/components/Carousel.vue';
import InstaIcon from '~/components/svg/InstaIcon.vue';
import GithubIcon from '~/components/svg/GithubIcon.vue';
import LinkedinIcon from '~/components/svg/LinkedinIcon.vue';
import DownArrowIcon from '~/components/svg/DownArrow.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Carousel,
    InstaIcon,
    GithubIcon,
    LinkedinIcon,
    Footer,
    DownArrowIcon
  },
  data: () => ({
    slides: 3,
    projectList: [
      {
        show: true,
        image: 'speaktous.png',
        imageShow: false,
        topic: 'SpeakToUs website',
        description:
          'Developed a website for a Malaysian organization. Technologies used are: NuxtJS,Vue,TailwindCSS',
        link: 'https://www.speaktous.online'
      },
      {
        show: false,
        image: 'instafilter.png',
        imageShow: false,
        topic: 'Instagram Filter with Spark AR',
        description:
          'Created several Instagram filters for individual and organization purposes. Technologies used is: SparkAR',
        link: 'https://www.instagram.com/a/r/?effect_id=584156795651806'
      },
      {
        show: false,
        image: 'twitter-bot.png',
        imageShow: false,
        topic: 'Twitter Covid-19 Bot',
        description:
          'A Twitter bot that automatically respond to your tweet with the latest Covid-19 statistics. Technologies used are: Python',
        link: 'https://twitter.com/YourCoronaBot'
      }
    ]
  }),
  methods: {
    handleVisibility(index) {
      this.projectList[index].show = true;
    }
  }
};
</script>

<style scoped>
@keyframes translate {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(40px);
  }
}
#downarrow {
  animation-duration: 0.7s;
  animation-name: translate;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
hr {
  background: linear-gradient(
    270deg,
    rgba(255, 107, 107, 0.911458) 31.62%,
    #4ecdc4 72.53%
  );
  height: 2px;
}
ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: red; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>

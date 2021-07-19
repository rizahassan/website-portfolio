<template>
  <main class="tw-max-w-screen-xl tw-font-serif">
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-scrollto"></script>
    <div
      id="firstsection"
      class="tw-h-screen tw-w-screen tw-bg-black tw-relative"
    >

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
            A developer who is passionate about <em class="tw-text-red-400">user experience.</em> 
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
          <a href="mailto:ruhulruzbihan@gmail.com">Email me!</a>
        </button>
      </div>
      <div
        class="tw-w-full tw-flex tw-flex-row tw-justify-between tw-absolute tw-bottom-0"
      >
        <div class="tw-w-1/4 tw-ml-4 md:tw-ml-6 tw-flex ">
          <img
            id="downarrow"
            src="~/static/downarrow.svg"
            v-scroll-to="'#secondsection'"
            class=" tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 "
          />
        </div>
        <!-- Social -->
        <div class="tw-w-3/4 tw-flex tw-flex-col tw-items-end tw-mr-8 tw-mb-4">
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
    <div
      id="secondsection"
      class="tw-h-screen tw-w-screen tw-bg-black tw-relative"
    >
    <h1 data-aos="fade-right" data-aos-duration="1000" class=" tw-pt-8 lg:tw-pt-4 tw-text-center tw-italic tw-text-3xl md:tw-text-5xl tw-text-white tw-font-semibold tw-tracking-widest">
        Education
      </h1>
      <div
        class=" tw-px-4 md:tw-px-36 lg:tw-px-80 tw-pt-12 md:tw-pt-40 tw-flex tw-flex-col"
      >
        <div id="college-2017-2019" class="tw-flex tw-flex-row">
          <div data-aos="fade-down" data-aos-duration="1000">
            <LineComponent></LineComponent>
            <div
              class=" tw-text-center tw-rounded-full tw-p-2 tw-h-14 tw-w-14 tw-text-black tw-bg-cyan tw-border-2 tw-border-white flex tw-items-center tw-justify-center"
            >
              2017
            </div>
            <LineComponent></LineComponent>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
            class="tw-ml-6"
          >
            <CollegeCard
              :collegeName="collegeList[0].collegeName"
              :cert="collegeList[0].cert"
              :image="collegeList[0].image"
              :tags="collegeList[0].tags"
            ></CollegeCard>
          </div>
        </div>

        <div id="college-2019-2021" class="tw-mt-2 tw-flex tw-flex-row">
          <div data-aos="fade-down" data-aos-duration="1000">
            <LineComponent></LineComponent>
            <div
              class=" tw-text-center tw-rounded-full tw-p-2 tw-h-14 tw-w-14 tw-text-black tw-bg-cyan tw-border-2 tw-border-white"
            >
              2019
            </div>
            <LineComponent></LineComponent>
            <div
              class=" tw-text-center tw-rounded-full tw-p-2 tw-h-14 tw-w-14 tw-text-black tw-bg-cyan tw-border-2 tw-border-white "
            >
              2021
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="2000"
            class="tw-ml-6"
          >
            <CollegeCard
              :collegeName="collegeList[1].collegeName"
              :cert="collegeList[1].cert"
              :image="collegeList[1].image"
              :tags="collegeList[1].tags"
            ></CollegeCard>
          </div>
        </div>
      </div>

      <div class="tw-w-full tw-flex tw-absolute tw-bottom-0 tw-mb-20">
        <img
          id="downarrow"
          src="~/static/downarrow.svg"
          v-scroll-to="'#thirdsection'"
          class=" tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 tw-ml-4 md:tw-ml-6 "
        />
      </div>
    </div>

    <!-- Third section of the page -->
    <div id="thirdsection" class="tw-w-screen tw-h-screen tw-bg-black tw-relative">
      <h1 data-aos="fade-right" data-aos-duration="1000" class=" tw-pt-8 lg:tw-pt-4 tw-text-center tw-italic tw-text-3xl md:tw-text-5xl tw-text-white tw-font-semibold tw-tracking-widest">
        Experience Wallet
      </h1>
      <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="300" class=" tw-pt-40 md:tw-pt-64">
        <div
          class="tw-h-1/2 tw-flex tw-flex-row tw-justify-center tw-self-center tw-relative"
          v-for="item in jobList"
          :key="item.title"
        >
          <JobsCard
            :company="item.company"
            :title="item.title"
            :image="item.image"
            :color="item.color"
            :date="item.date"
            :class="item.style"
            onclick=""
            
          ></JobsCard>
        </div>
      </div>
      <div class="tw-w-full tw-flex tw-absolute tw-bottom-0 tw-mb-20 ">
        <img
          id="downarrow"
          src="~/static/downarrow.svg"
          v-scroll-to="'#fourthsection'"
          class=" tw-w-16 tw-h-16 md:tw-w-20 md:tw-h-20 tw-ml-4"
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
          class="tw-text-center tw-pt-4"
        >
          <h1 data-aos="fade-right" data-aos-duration="1000"
            class="tw-text-white tw-italic tw-inline-block tw-text-3xl md:tw-text-5xl tw-mt-8 lg:tw-mt-4 tw-font-semibold tw-tracking-widest  "
          >
            Projects
          </h1>
        </div>
        <!-- Project Carousel  -->
        <div
          class="tw-w-full tw-max-h-screen tw-flex tw-flex-row tw-justify-center tw-items-center tw-mt-28 md:tw-mt-20"
        >
          <Carousel class="tw-w-11/12 lg:tw-w-1/2" :cards="projectList" />
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
import CollegeCard from '~/components/CollegeCard.vue';
import LineComponent from '~/components/Line.vue';
import JobsCard from '~/components/JobsCard.vue';

export default {
  components: {
    Carousel,
    InstaIcon,
    GithubIcon,
    LinkedinIcon,
    DownArrowIcon,
    CollegeCard,
    LineComponent,
    JobsCard
  },
  data: () => ({
    slides: 3,
    collegeList: [
      {
        collegeName: 'Everett Community College',
        cert: 'Associates of Arts in Computer Science',
        image: 'evcctrojan.png',
        tags: ['Advanced Calculus', 'Physics', 'Linear Algebra', 'Java', 'C++']
      },
      {
        collegeName: 'University of Wisconsin-Madison',
        cert: 'Bachelors of Science in Computer Science',
        image: 'uwlogo.png',
        tags: ['Data&Algos', 'AI', 'DBMS', 'Software Security', 'Software Eng']
      }
    ],
    projectList: [
      {
        show: true,
        image: 'safedining.gif',
        alt:"Safe Dining Website gif",
        imageShow: false,
        topic: 'Safe Dining website',
        description:
          'Developed a mobile responsive web application using MERN stack that allows local small restaurants to update their real-time capacity and COVID-19 procedures.',
        link: 'https://safe-dining-506.herokuapp.com/'
      },
      {
        show: true,
        image: 'robinhoodar.jpeg',
        alt:"Robinhood AR gif",
        imageShow: false,
        topic: 'Robinhood AR',
        description:
          "Designed an augmented reality application using Python Flask to receive stock information by scanning companies’ or brands' names.",
        link: 'https://github.com/rizahassan/robinhood-ar'
      },
      {
        show: true,
        image: 'speaktous.gif',
        alt: 'Speak to us website gif',
        imageShow: false,
        topic: 'SpeakToUs website',
        description:
          'Developed a website for a Malaysian organization. Technologies used are: NuxtJS,Vue,TailwindCSS',
        link: 'https://www.speaktous.online'
      },
      {
        show: true,
        image: 'muslimnews.gif',
        alt:"Muslim News website gif",
        imageShow: false,
        topic: 'MuslimNews',
        description:
          'Developed a mobile responsive web application that allows local small restaurants to update their real-time capacity and COVID-19 procedures.',
        link: 'https://muslimnews.netlify.app/'
      },
    ],
    jobList: [
      {
        company: 'Everett Community College',
        title: 'Associated Student Body VP of Administration',
        date: 'November 2017 - March 2019',
        image: 'evcctrojan.png',
        color: '#8338ec',
        style: 'tw-absolute tw-transition tw-duration-500 tw-transform hover:tw--translate-y-56'
      },
      {
        company: 'UW-Madison Division of Information Technology',
        title: 'Support Specialist',
        date: 'Nov 2019 - May 2021',
        image: 'doit.jpeg',
        color: '#ff006e',
        style:
          'tw-absolute tw-top-8  tw-transition tw-duration-500 tw-transform hover:tw--translate-y-56'
      },
      {
        company: 'UW-Madison Division of Information Technology',
        title: 'Quality Assurance Intern',
        date: 'Aug 2020 - May 2021',
        image: 'doit.jpeg',
        color: '#ffbe0b',
        style:
          'tw-absolute tw-top-16 tw-transition tw-duration-500 tw-transform hover:tw--translate-y-56'
      },
      {
        company: 'SpeakToUs',
        title: 'Head of the Development team',
        date: 'Nov 2019 - Current',
        image: 'stulogo.jpg',
        color: '#fb5607',
        style:
          'tw-absolute tw-top-24'
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

<template>
  <main class="max-w-screen-xl font-serif">
    <div class="h-screen w-screen md:h-screen md:w-screen">
      <div class="lg:flex lg:flex-row">
        <div
          class=" transition-all duration-500 ease-out transform hover:translate-x-4 md:w-10/12 lg:w-1/2 lg:pt-24"
        >
          <img
            src="~/static/rizaImage.png"
            alt="Riza Hassan's animated image"
          />
        </div>
        <div
          class="lg:w-1/2 lg:pt-32 pl-4 md:pl-12 font-semibold tracking-widest transition-all duration-500 transform hover:translate-x-4 "
        >
          <h1 class=" text-gray-800 text-5xl ">Hi,</h1>

          <vue-typed-js
            class="text-blue-600 text-3xl md:text-5xl lg:pt-4"
            :strings="['My name is Riza Hassan']"
            :typeSpeed="40"
            :startDelay="1000"
            :loop="true"
          >
            <span class="typing"></span>
          </vue-typed-js>
          <div class="text-gray-800">
            <h1 class="text-5xl md:pt-18 lg:pt-24">I am</h1>
            <ul class="text-3xl md:text-5xl md:pt-4 md:pl-8">
              <li>a student</li>
              <li>an adventure seeker</li>
              <li>a developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Second section of the page -->
    <div class="h-screen w-screen md:h-screen  md:w-screen bg-blue-700">
      <!-- Change the background color -->
      <div class="lg:px-12 ">
        <div class="text-center pt-4 duration:500  transform  hover:scale-125">
          <h1
            class=" inline-block text-3xl md:text-5xl md:pt-8 lg:pt-8 text-white font-semibold tracking-widest  "
          >
            My projects
          </h1>
        </div>
        <!-- Div for cards  -->
        <div class="pt-8 px-8 md:px-8 lg:px-24 ">
          <div class="pt-8 md:pt-0 md:flex md:flex-row ">
            <Cards :projectList="projectList" />
          </div>
        </div>
      </div>
    </div>
    <!-- Third section of the page -->
    <div class="h-screen w-screen md:h-screen  md:w-screen">
      <div
        class="text-center pt-8 md:pt-8 duration-500 transform hover:scale-125 "
      >
        <h1 class="text-3xl md:text-5xl font-semibold tracking-widest">
          Let's get connected !
        </h1>
      </div>
      <div class="lg:flex lg:flex-row">
        <!-- Social media  -->
        <div class=" lg:pl-32 lg:pt-24">
          <!-- Instagram icon -->
          <div class="flex flex-row pt-8">
            <div class="text-center w-1/4 h-1/2">
              <InstaIcon class="inline-block w-1/2 hover:invincible" />
              <Insta2Icon class="inline-block w-1/2 hidden hover:block" />
            </div>

            <a
              class="w-3/4 lg:pt-6 text-2xl md:text-3xl lg:text-4xl hover:text-blue-800"
              href="http://instagram.com/riza__hassan"
              target="_blank"
            >
              @riza__hassan
            </a>
          </div>
          <!-- Github icon -->
          <div class="flex flex-row pt-8">
            <div class="text-center w-1/4 h-1/2">
              <GithubIcon class="inline-block w-1/2" />
            </div>

            <a
              class="w-3/4 lg:pt-6 text-2xl md:text-3xl lg:text-4xl hover:text-blue-800"
              href="http://github.com/rizahassan"
              target="_blank"
            >
              github.com/rizahassan
            </a>
          </div>
          <!-- Linkedin Icon -->
          <div class="flex flex-row pt-8">
            <div class="text-center w-1/4 h-1/2">
              <LinkedinIcon class="inline-block w-1/2" />
            </div>

            <a
              class="w-3/4 lg:pt-6 text-2xl md:text-3xl lg:text-4xl hover:text-blue-800"
              href="http://linkedin.com/in/riza-hassan/"
              target="_blank"
            >
              linkedin.com/in/riza-hassan/
            </a>
          </div>
        </div>
        <!-- Youtube Channel -->
        <div class="py-12 ">
          <div class=" hidden md:block bg-gray-200  rounded shadow-2xl">
            <section class="p-4 text-center">
              <iframe
                class="inline-block"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eVQ5GypbgXc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Texture from "~/components/svg/Texture.vue";
import Cards from "~/components/cards.vue";
import InstaIcon from "~/components/svg/InstaIcon.vue";
import GithubIcon from "~/components/svg/GithubIcon.vue";
import LinkedinIcon from "~/components/svg/LinkedinIcon.vue";
import Insta2Icon from "~/components/svg/Insta2Icon.vue";
import Github2Icon from "~/components/svg/Github2Icon.vue";
import Linkedin2Icon from "~/components/svg/Linkedin2Icon.vue";

import Footer from "~/components/Footer.vue";

export default {
  components: { Cards, InstaIcon, GithubIcon, LinkedinIcon, Footer },
  data: () => ({
    projectList: [
      {
        show: false,
        image: "../components/rizaImage.png",
        imageShow: false,
        topic: "SpeakToUs website",
        description:
          "Developed a website for a Malaysian organization that focuses on destigmatizing mental health. Technologies used are: NuxtJS,Vue,TailwindCSS",
        link: "https://www.speaktous.online"
      },
      {
        show: false,
        image: "",
        imageShow: false,
        topic: "Instagram Filter",
        description:
          "Created several Instagram filters for individual and organization purposes. Technologies used are: SparkAR",
        link: "https://www.instagram.com/a/r/?effect_id=584156795651806"
      },
      {
        show: false,
        image: "",
        imageShow: false,
        topic: "Twitter Covid-19 Bot",
        description:
          "A Twitter bot that automatically respond to your tweet with the latest Covid-19 statistics. Technologies used are: Python",
        link: "https://www.instagram.com/a/r/?effect_id=584156795651806"
      }
    ]
  })
};
</script>

<style scoped></style>

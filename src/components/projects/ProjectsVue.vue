<script setup lang="ts">
import AOS from 'aos';
AOS.init();

function redirectToSite(url: string) {
  console.log('redirecting to ' + url);
  window.open(url, '_blank');
}


</script>

<template>

  <div class="component-content">
  <div class="flex justify-center items-center absolute inset-x-12 bottom-40 h-16">

    <div class="grid grid-rows-7 grid-cols-2 gap-x-56 gap-y-56 h-[100vh]">

      <div class="row-start-1 col-start-1 self-start" data-aos="zoom-in-left" data-aos-duration="2000">
        <div class="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow w-full max-w-2xl
         hover:bg-opacity-35 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-60" src="/src/images/dataviz.png" alt="">
          <div class="flex flex-col justify-start p-4">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DATAVIZ</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A project designed for visualizing music-related data retrieved from an API. It features interactive and
              meaningful data visualizations, making it easy for users to explore music trends and patterns.
              <p class="font-bold"> Technologies used: </p> Vue.js, Babylon.js, JS, TS, HTML, CSS
            </p>
          </div>
          <img src="/src/assets/internet.png" alt="icon" style="width: 36px; height: 36px;"  class="w-8 h-8 md:w-9 md:h-9 cursor-pointer"
               @click="redirectToSite('https://coumbaseck17.github.io/projet_uxdm_frontend/')" />
        </div>
      </div>

      <!-- Carte MY GREEN WORLD -->
      <div class="row-start-3 col-start-2 self-start justify-self-end" data-aos="zoom-out" data-aos-duration="2000" >
        <div class="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow w-full max-w-2xl
        hover:bg-opacity-35 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-60" src="/src/images/green.png" alt="">
          <div class="flex flex-col justify-start p-4">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MY GREEN WORLD</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A 3D video game developed under the theme "Be Green".
              The game promotes environmental awareness by immersing players in an eco-friendly virtual world.
              <p class="font-bold"> Technologies used: </p> Vue.js, D3.js,Python
            </p>
          </div>
          <img src="/src/assets/internet.png" alt="icon" style="width: 36px; height: 36px;"  class="w-8 h-8 md:w-9 md:h-9 cursor-pointer"
               @click="redirectToSite('https://mygreenworld.netlify.app/')" />
        </div>
      </div>

      <!-- Carte PORTFOLIO -->
      <div class="row-start-5 col-start-1 self-start " data-aos="zoom-out-down" data-aos-duration="2000">
        <div class="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow w-full max-w-2xl
         hover:bg-opacity-35 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-60" src="/src/images/portfo.png" alt="">
          <div class="flex flex-col justify-start p-4">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PORTFOLIO</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A personal project designed to highlight my skills, projects, and achievements.
              <p class="font-bold"> Technologies used: </p> Vue.js, Tailwind CSS, JS
            </p>
          </div>
        </div>
      </div>


    </div>

  </div>
    <!--      <div class="row-start-6 col-start-2 self-start justify-self-end" data-aos="zoom-in-up" data-aos-duration="2000">-->
    <!--        <div href="#" class="flex flex-col items-center bg-neutral-100 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl-->
    <!--    hover:bg-opacity-35 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">-->
    <!--          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/src/images/munio-osteo-5a8f14e3.jpeg" alt="">-->
    <!--          <div class="flex flex-col justify-between p-4 leading-normal">-->
    <!--            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 6</h5>-->
    <!--            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
  </div>


</template>

<style scoped>
.name {
  color: #0e0b05;
  top: 250px;
}
</style>
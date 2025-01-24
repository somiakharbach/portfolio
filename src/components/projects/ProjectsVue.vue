<script setup lang="ts">
import AOS from 'aos';
AOS.init();

function redirectToSite(url: string) {
  console.log('redirecting to ' + url);
  window.open(url, '_blank');
}


</script>

<template>
  <div class="flex justify-center items-center absolute inset-x-4 sm:inset-x-12 bottom-48 sm:bottom-52 h-16">
    <div class="grid grid-rows-3 grid-cols-1 sm:grid-rows-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2
    gap-x-8 sm:gap-x-56 gap-y-64 sm:gap-y-56 h-[100vh]">

      <div class="row-start-1 col-start-1 self-start" data-aos="zoom-in-left" data-aos-duration="2000">
        <div class="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow w-full max-w-xs
        sm:max-w-2xl hover:bg-opacity-70 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 custom-card">
          <img class="object-cover w-full rounded-t-lg h-40 sm:h-60" src="/src/images/dataviz.png" alt="">
          <div class="flex flex-col justify-start p-4">
            <h5 class="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white self-center ">DATAVIZ</h5>
            <p class="mb-3 font-light">
              A project designed for visualizing music-related data retrieved from an API. It features interactive and
              meaningful data visualizations, making it easy for users to explore music trends and patterns.
              <p class="font-bold"> Technologies used: </p> Vue.js, D3.js, JS, TS, HTML, CSS, Python
            </p>
          </div>
          <img src="/src/assets/internet.png" alt="icon" style="width: 36px; height: 36px;" class="w-8 h-8 md:w-9 md:h-9
          cursor-pointer" @click="redirectToSite('https://coumbaseck17.github.io/projet_uxdm_frontend/')" />
        </div>
      </div>

      <div class="row-start-3 col-start-1 sm:col-start-2 self-start justify-self-end" data-aos="zoom-out" data-aos-duration="2000">
        <div class="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow w-full max-w-xs
        sm:max-w-2xl hover:bg-opacity-70 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 custom-card">
          <img class="object-cover w-full rounded-t-lg h-40 sm:h-60" src="/src/images/green.png" alt="">
          <div class="flex flex-col justify-start p-4">
            <h5 class="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white self-center">MY GREEN WORLD</h5>
            <p class="mb-3 font-light">
              A 3D video game developed under the theme "Be Green". The game promotes environmental awareness by
              immersing players in an eco-friendly virtual world.
              <p class="font-bold"> Technologies used: </p> Vue.js, Babylon, JS, TS, HTML, CSS
            </p>
          </div>
          <img src="/src/assets/internet.png" alt="icon" style="width: 36px; height: 36px;" class="w-8 h-8 md:w-9 md:h-9
           cursor-pointer" @click="redirectToSite('https://mygreenworld.netlify.app/')" />
        </div>
      </div>

      <div class="row-start-5 col-start-1 self-start" data-aos="zoom-out-down" data-aos-duration="2000">
        <div class="flex flex-col items-center bg-neutral-300 border border-gray-200 rounded-lg shadow w-full max-w-xs
        sm:max-w-2xl hover:bg-opacity-70 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 custom-card">
          <img class="object-cover w-full rounded-t-lg h-40 sm:h-60" src="/src/images/portfo.png" alt="">
          <div class="flex flex-col justify-start p-4">
            <h5 class="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white self-center ">PORTFOLIO</h5>
            <p class="mb-3 font-light">
              A personal project designed to highlight my skills, projects, and achievements.
              <p class="font-bold"> Technologies used: </p> Vue.js, Tailwind CSS, JS
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="loader">
    <div data-glitch="More projects to come..." class="glitch">More projects to come...</div>
  </div>

</template>

<style scoped>

.flex{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}
.custom-card{
  border-radius: 30px;
}

.loader{
  position: absolute;
  bottom: -150%;
  left: 50%;
  transform: translateX(-20%);
}

@media (min-width: 640px) {
  .loader {
    bottom: -100%;
  }
}

.object-cover{
  border-radius: 30px 30px 0 0;
}

.glitch {
  position: relative;
  font-size: 25px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;
  animation: shift 1s ease-in-out infinite alternate;
}

.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-glitch);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

.glitch:before {
  animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #8b00ff;
  z-index: -1;
}

.glitch:after {
  animation: glitch 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #00e571;
  z-index: -2;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-3px, 3px);
  }

  40% {
    transform: translate(-3px, -3px);
  }

  60% {
    transform: translate(3px, 3px);
  }

  80% {
    transform: translate(3px, -3px);
  }

  to {
    transform: translate(0);
  }
}

@keyframes shift {
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }

  41% {
    transform: skewX(10deg);
  }

  42% {
    transform: skewX(-10deg);
  }

  59% {
    transform: skewX(40deg) skewY(10deg);
  }

  60% {
    transform: skewX(-40deg) skewY(-10deg);
  }

  63% {
    transform: skewX(10deg) skewY(-5deg);
  }

  70% {
    transform: skewX(-50deg) skewY(-20deg);
  }

  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
}

</style>
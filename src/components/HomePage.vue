<script setup lang="ts">
import IconsHomePage from "./IconsHomePage.vue";

function redirectToSite(url: string) {
  console.log('redirecting to ' + url);
  window.open(url, '_blank');
}

function sendMail() {
  window.location.href = 'mailto:kharbach2320@gmail.com';
}

function openCV() {
  window.open('../src/assets/Kharbach-Somia-CV.pdf', '_blank');
}

</script>

<template>
  <div class="component-content">
    <div class="name absolute top-48 pl-6 md:pl-24">
      <div class="text-3xl md:text-6xl">KHARBACH SOMIA</div>
      <div class="text-base md:text-xl mt-2">
    Full-stack developer | Computer science graduate
  </div>
  <div class="mt-8 text-sm md:text-base">
    <p class="font-light">
      Passionate full-stack developer with
      <span class="text-white font-bold">
      two years of experience
      </span>
      <br>
      specializing in creating modern and efficient
      web applications.
      <span class="text-white font-bold">
      Let's build something great together! </span>
    </p>

    <!--    <p >I am a 24-year-old Computer Science student-->
<!--      <br>-->
<!--      enrolled in the Master's program in <span class="text-black font-bold"> MIAGE </span>  (Computer Science + Project Management)-->
<!--      <br>-->
<!--      at the University <span class="text-black font-bold"> Paul Sabatier in Toulouse, France. </span>-->
<!--      <br>-->
<!--      Concurrently, I am employed as a <span class="text-black font-bold"> full-stack developer  </span> at-->
<!--      <span class="text-black font-bold"> ORANGE </span>-->
<!--    </p>-->
  </div>
</div>
    <div class="absolute bottom-4 right-4 md:right-12 flex gap-2 ">
      <IconsHomePage @click="redirectToSite('https://github.com/LSQYM')" >
      <img src="../assets/github-sign.png" alt="icon" style="width: 36px; height: 36px;"  class="w-8 h-8 md:w-9 md:h-9 animate-bounce hover:animate-none"  />
    </IconsHomePage>
    <IconsHomePage @click="redirectToSite('https://www.linkedin.com/in/somia-kharbach-2692a11bb/')">
      <img src="../assets/linkedin.png" alt="icon" style="width: 36px; height: 36px;"  class="w-8 h-8 md:w-9 md:h-9 animate-bounce-delayed hover:animate-none"  />
    </IconsHomePage>
    <IconsHomePage @click="sendMail()" >
      <img src="../assets/email.png" alt="icon" style="width: 36px; height: 36px;"  class="w-8 h-8 md:w-9 md:h-9 animate-bounce hover:animate-none" />
    </IconsHomePage>
      <IconsHomePage @click="openCV()" >
        <img src="../assets/cv.png" alt="icon" style="width: 36px; height: 36px;"  class="w-8 h-8 md:w-9 md:h-9 animate-bounce hover:animate-none" />
      </IconsHomePage>
  </div>
  </div>
</template>

<style scoped>
.name{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  top: 250px;
}

.mt-8{
  font-weight: 200;
  font-style: italic;
}


</style>
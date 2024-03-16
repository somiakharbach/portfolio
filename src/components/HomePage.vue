<script setup lang="ts">
import IconsHomePage from "./IconsHomePage.vue";

function redirectToSite(url: string) {
  console.log('redirecting to ' + url);
  window.location.href = url;
}

function sendMail() {
  window.location.href = 'mailto:kharbach2320@gmail.com';
}

</script>

<template>
  <div class="component-content">
<div class="name absolute top-48 pl-24">
  <div class="text-6xl ">KHARBACH SOMIA</div>
  <div class="text-xl mt-2">
    Computer Science student in apprenticeship
  </div>
  <div class="mt-8 text-sm">
    <p >I am a 24-year-old Computer Science student
      <br>
      enrolled in the Master's program in <span class="text-black font-bold"> MIAGE </span>  (Computer Science + Project Management)
      <br>
      at the University <span class="text-black font-bold"> Paul Sabatier in Toulouse, France. </span>
      <br>
      Concurrently, I am employed as a <span class="text-black font-bold"> full-stack developer  </span> at
      <span class="text-black font-bold"> ORANGE </span>
    </p>
  </div>
</div>
  <div class="absolute bottom-4 right-12 flex gap-2">
    <IconsHomePage @click="redirectToSite('https://github.com/LSQYM')">
      <img src="../assets/github-sign.png" alt="icon" style="width: 36px; height: 36px;"/>
    </IconsHomePage>
    <IconsHomePage @click="redirectToSite('https://www.linkedin.com/in/somia-kharbach-2692a11bb/')">
      <img src="../assets/linkedin.png" alt="icon" style="width: 36px; height: 36px;"/>
    </IconsHomePage>
    <IconsHomePage @click="sendMail()">
      <img src="../assets/email.png" alt="icon" style="width: 36px; height: 36px;"/>
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
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
  window.open('/portfolio/src/assets/icons8-angularjs-48.png', '_blank');
}

</script>

<template>
    <div class="content absolute top-48 pl-1 sm:pl-24 text-white">
      <div class="typing-animation">
        <div class="text-base sm:text-3xl md:text-6xl yatra-one-regular"> Hi ! I'm <span> SOMIA ;),  </span>
          <span class="text-base sm:text-3xl md:text-4xl text-yellow-200 font-bold"> your next full-stack developer </span>
        </div>
      </div>
    <div class="mt-8 text-sm md:text-base">
    <p class="font-light">
      Passionate about full-stack development, I bring over <span class="text-blue-400 font-bold"> two years of experience </span>
      in crafting modern web applications,
      <br> supported by a functional and organized approach to project management.
      <br> I am a <span class="text-blue-400 font-bold"> quick learner </span> and a <span class="text-blue-400 font-bold">
      team player </span> who is always eager to learn and grow.
      <br>
      <br>
      <span class="text-yellow-200 font-bold ml-8">
      I’m here to make an impact ! </span>
    </p>
  </div>
</div>
  <div class="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:right-12 flex gap-2">
    <IconsHomePage @click="redirectToSite('https://github.com/somiakharbach')">
      <img src="../assets/icons8-github-24.png" alt="icon" class="icon animate-pulse hover:animate-none"/>
    </IconsHomePage>
    <IconsHomePage @click="redirectToSite('https://www.linkedin.com/in/somia-kharbach-2692a11bb/')">
      <img src="../assets/icons8-linkedin-50.png" alt="icon" class="icon animate-pulse-delayed hover:animate-none"/>
    </IconsHomePage>
    <IconsHomePage @click="sendMail()">
      <img src="../assets/icons8-apple-mail-50.png" alt="icon" class="icon animate-pulse hover:animate-none"/>
    </IconsHomePage>
    <IconsHomePage @click="openCV()">
      <img src="../assets/icons8-cv-48.png" alt="icon" class="icon animate-pulse-delayed hover:animate-none"/>
    </IconsHomePage>
  </div>
</template>

<style scoped>
@keyframes typing {
  from { width: 0; border-right: .15em solid white; }
  to { width: 100%; border-right: .15em solid white; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: white; }
}

.typing-animation {
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3.5s steps(30, end), blink-caret .75s step-end infinite;
}

.content{
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

.icon {
  width: 36px;
  height: 36px;
  transition: transform 0.2s;
}

@media (max-width: 640px) {
  .content {
    top: 30%;
  }

  .text-base {
    font-size: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .content {
    top: 30%;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .text-base {
    font-size: 1.5rem;
  }

  .text-sm {
    font-size: 1rem;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>
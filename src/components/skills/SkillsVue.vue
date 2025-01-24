<script setup lang="ts">

</script>

<template>

    <div class="top-20 sm:top-24 absolute pl-4 sm:pl-24">
      <div class="skills">
    <div class="text-xl sm:text-2xl text-yellow-200"> Building my path with skills in
      <div class="flex flex-col sm:flex-row justify-center items-start space-y-10 sm:space-x-10 sm:space-y-0 translate-y-10
       sm:translate-y-20 translate-x-0 sm:translate-x-20 text-amber-50">

        <div class="flex-1 w-full sm:w-80">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 italic text-yellow-200">Development</h2>
          <p class="text-base">Acquired solid skills through
            university projects and professional experiences
            in technologies such as Vue.js, Angular, SpringBoot, Node.js, Laravel, Tailwind CSS, and Bootstrap. </p>
        </div>

        <div class="w-full sm:w-1 h-0.5 sm:h-80 opacity-70 bg-neutral-50"></div>

        <div class="flex-1 w-full sm:w-80">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 italic text-yellow-200">Data</h2>
          <p class="text-base" >Built expertise in data management
            by working with SQL, NoSQL, and tools like MySQL,
            MariaDB, and MongoDB, along with data analysis using Hadoop, Python, and Power BI.</p>
        </div>

        <div class="w-full sm:w-1 h-0.5 sm:h-80 opacity-70 bg-neutral-50"></div>

        <div class="flex-1 w-full sm:w-80">
          <h2 class="text-xl sm:text-2xl font-bold mb-4 italic text-yellow-200">Project management</h2>
          <p class="text-base" > Managed agile development
            processes with tools like Jira and Confluence,
            ensuring effective team collaboration and project delivery.</p>
        </div>
      </div>
    </div>
  </div>

      <div class="absolute -bottom-20 sm:-bottom-64 left-1/2 transform -translate-x-1/2 sm:-translate-x-1/4 justify-center
      gap-0 flex flex-row p-0 sm:gap-8 sm:p-8">
        <img src="/src/assets/icons8-angularjs-48.png" class="icon1 w-7 h-7 sm:w-12 sm:h-12 animate-move" alt="icon1">
        <img src="/src/assets/icons8-docker-48.png" class="icon2 w-7 h-7 sm:w-12 sm:h-12 animate-move" alt="icon2">
        <img src="/src/assets/icons8-git-48.png" class=" w-7 h-7 icon3 sm:w-12 sm:h-12 animate-move" alt="icon3">
        <img src="/src/assets/icons8-javascript-48.png" class=" icon4 w-7 h-7 sm:w-12 sm:h-12 animate-move" alt="icon4">
        <img src="/src/assets/icons8-laravel-48.png" class=" icon5 w-7 h-7 sm:w-12 sm:h-12 animate-move" alt="icon5">
        <img src="/src/assets/icons8-logo-java-coffee-cup-48.png" class=" icon6 w-7 h-7 sm:w-12 sm:h-12 animate-move" alt="icon6">
        <img src="/src/assets/icons8-nodejs-48.png" class=" w-7 h-7 sm:w-12 sm:h-12 icon7 animate-move" alt="icon9">
        <img src="/src/assets/icons8-python-48.png" class=" w-7 h-7 sm:w-12 icon8 sm:h-12 animate-move" alt="icon11">
        <img src="/src/assets/icons8-vuejs-48.png" class=" w-7 h-7 sm:w-12 sm:h-12 icon9 animate-move" alt="icon14">
        <img src="/src/assets/icons8-php-40.png" class=" w-7 h-7 sm:w-12 sm:h-12 icon10 animate-move" alt="icon13">
        <img src="/src/assets/icons8-mongodb-48.png" class=" w-7 h-7 sm:w-12 icon11 sm:h-12 animate-move" alt="icon7">
        <img src="/src/assets/icons8-mysql-48.png" class=" w-7 h-7 sm:w-12 sm:h-12 icon12 animate-move" alt="icon8">
        <img src="/src/assets/icons8-nosql-32.png" class=" w-7 h-7 sm:w-12 icon13 sm:h-12 animate-move" alt="icon10">
        <img src="/src/assets/icons8-sql-26.png" class=" w-7 h-7 sm:w-12 sm:h-12 icon14 animate-move" alt="icon12">

      </div>
  </div>

</template>

<style scoped>

.skills {
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

@keyframes horizontal-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

@media  (min-width: 640px) {
  .animate-move {
    animation: horizontal-move 2s linear infinite;
  }
}

.icon1 {
  animation-delay: 0s;
}

.icon2 {
  animation-delay: 0.2s;
}

.icon3 {
  animation-delay: 0.4s;
}

.icon4 {
  animation-delay: 0.6s;
}

.icon5 {
  animation-delay: 0.8s;
}

.icon6 {
  animation-delay: 1s;
}

.icon7 {
  animation-delay: 1.2s;
}

.icon8 {
  animation-delay: 1.4s;
}

.icon9 {
  animation-delay: 1.6s;
}

.icon10 {
  animation-delay: 1.8s;
}

.icon11 {
  animation-delay: 2s;
}

.icon12 {
  animation-delay: 2.2s;
}

.icon13 {
  animation-delay: 2.4s;
}

.icon14 {
  animation-delay: 2.6s;
}
</style>
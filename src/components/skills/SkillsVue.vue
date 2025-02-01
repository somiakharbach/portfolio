<script setup lang="ts">

</script>

<template>
  <div class="skills">
  <div class="skills-title text-lg md:text-2xl text-yellow-200"> Building my path with skills in </div>
  <div class="skills-content">
      <div class="flex flex-col sm:flex-row sm:w-full items-start gap-0 sm:space-x-2 md:space-x-12 md:space-y-0 text-amber-50">
        <div class="flex-1 w-full sm:w-1/3 lg:w-1/6">
          <h2 class="text-lg md:text-2xl font-bold mb-4 italic text-yellow-200">Development</h2>
          <p class="text-base">Acquired solid skills through university projects and professional experiences
            in technologies such as Vue.js, Angular, SpringBoot, Node.js, Laravel, Tailwind CSS, and Bootstrap. </p>
        </div>

        <div class="w-full sm:w-1 h-0.5 sm:h-64 xl:h-80 opacity-70 bg-neutral-50"></div>

        <div class="flex-1 w-full sm:w-1/3 lg:w-1/6">
          <h2 class="text-lg md:text-2xl font-bold mb-4 italic text-yellow-200">Data</h2>
          <p class="text-base" >Built expertise in data management
            by working with SQL, NoSQL, and tools like MySQL,
            MariaDB, and MongoDB, along with data analysis using Hadoop, Python, and Power BI.</p>
        </div>

        <div class="w-full sm:w-1 h-0.5 xl:h-80 opacity-70 bg-neutral-50"></div>

        <div class="flex-1 w-full sm:w-1/3 lg:w-1/6">
          <h2 class="text-lg md:text-2xl font-bold mb-4 italic text-yellow-200">Project management</h2>
          <p class="text-base" > Managed agile development
            processes with tools like Jira and Confluence,
            ensuring effective team collaboration and project delivery.</p>
        </div>
      </div>
    </div>

      <div class="skills-icons absolute gap-1.5 md:gap-1 flex flex-row p-0 lg:gap-8">
        <img src="/src/assets/icons8-angularjs-48.png" class="icon1 w-5 h-5 md:w-12 md:h-12 animate-move" alt="icon1">
        <img src="/src/assets/icons8-docker-48.png" class="icon2 w-5 h-5 md:w-12 md:h-12 animate-move" alt="icon2">
        <img src="/src/assets/icons8-git-48.png" class="w-5 h-5 icon3 md:w-12 md:h-12 animate-move" alt="icon3">
        <img src="/src/assets/icons8-javascript-48.png" class=" icon4 w-5 h-5 md:w-12 md:h-12 animate-move" alt="icon4">
        <img src="/src/assets/icons8-laravel-48.png" class=" icon5 w-5 h-5 md:w-12 md:h-12 animate-move" alt="icon5">
        <img src="/src/assets/icons8-logo-java-coffee-cup-48.png" class=" icon6 w-5 h-5 md:w-12 md:h-12 animate-move" alt="icon6">
        <img src="/src/assets/icons8-nodejs-48.png" class=" w-5 h-5 md:w-12 md:h-12 icon7 animate-move" alt="icon9">
        <img src="/src/assets/icons8-python-48.png" class=" w-5 h-5 md:w-12 md:h-12 icon8 animate-move" alt="icon11">
        <img src="/src/assets/icons8-vuejs-48.png" class=" w-5 h-5 md:w-12 md:h-12 icon9 animate-move" alt="icon14">
        <img src="/src/assets/icons8-php-40.png" class=" w-5 h-5 md:w-12 md:h-12 icon10 animate-move" alt="icon13">
        <img src="/src/assets/icons8-mongodb-48.png" class=" w-5 h-5 md:w-12 md:h-12 icon11 animate-move" alt="icon7">
        <img src="/src/assets/icons8-mysql-48.png" class=" w-5 h-5 md:w-12 md:h-12 icon12 animate-move" alt="icon8">
        <img src="/src/assets/icons8-nosql-32.png" class=" w-5 h-5 md:w-12 md:h-12 icon13 animate-move" alt="icon10">
        <img src="/src/assets/icons8-sql-26.png" class=" w-5 h-5 md:w-12 md:h-12 icon14 animate-move" alt="icon12">

      </div>
  </div>
</template>

<style scoped>

.skills{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

.skills-content {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media (min-width: 1024px) {
  .skills-content {
    padding: 5%;
  }
}

.skills-title{
  position: absolute;
  top: 20%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
  .skills-title{
    left: 25%;
    top: 10%;
  }
}


.skills-icons{
  position: absolute;
  top: 90%;
  left: 45%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 640px) {
  .skills-icons{
    top: 95%;
    left: 50%;
  }
}

@media (max-width: 640px) {
  .skills-title{
    top: 6%;
    left: 45%;
    padding-bottom: 10px;
  }
}

@keyframes horizontal-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

@media  (min-width: 1024px) {
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
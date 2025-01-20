<script setup lang="ts">

</script>

<template>

    <div class="name top-20 sm:top-24 absolute pl-4 sm:pl-24">
    <div class="text-xl sm:text-2xl font-serif font-bold italic"> Building my path with skills in
      <div class="flex flex-col sm:flex-row justify-center items-start space-y-10 sm:space-x-10 sm:space-y-0 translate-y-10
       sm:translate-y-20 translate-x-0 sm:translate-x-20">
        <div class="flex-1 w-full sm:w-80">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black italic">Development</h2>
          <p class="text-base text-gray-800" style="font-family: 'Lato', sans-serif;">Acquired solid skills through
            university projects and professional experiences
            in technologies such as Vue.js, Angular, SpringBoot, Node.js, Laravel, Tailwind CSS, and Bootstrap. </p>
        </div>

        <div class="w-full sm:w-1 bg-white h-0.5 sm:h-80 opacity-60"></div>

        <div class="flex-1 w-full sm:w-80">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black italic">Data</h2>
          <p class="text-base text-gray-800" style="font-family: 'Lato', sans-serif;">Built expertise in data management
            by working with SQL, NoSQL, and tools like MySQL,
            MariaDB, and MongoDB, along with data analysis using Hadoop, Python, and Power BI.</p>
        </div>

        <div class="w-full sm:w-1 bg-white h-0.5 sm:h-80 opacity-60 "></div>

        <div class="flex-1 w-full sm:w-80">
          <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-black italic">Project management</h2>
          <p class="text-base text-gray-800" style="font-family: 'Lato', sans-serif;"> Managed agile development
            processes with tools like Jira and Confluence,
            ensuring effective team collaboration and project delivery.</p>
        </div>
      </div>
    </div>

      <div class="absolute -bottom-20 sm:-bottom-64 left-1/2 transform -translate-x-1/2 sm:-translate-x-1/4 justify-center
      gap-0 flex flex-row p-0 sm:gap-8 sm:p-8">
        <img src="/src/assets/icons8-angularjs-48.png" class="animate-pulse w-7 h-7 sm:w-12 sm:h-12" alt="icon1">
        <img src="/src/assets/icons8-docker-48.png" class="animate-pulse-delayed w-7 h-7 sm:w-12 sm:h-12" alt="icon2">
        <img src="/src/assets/icons8-git-48.png" class="animate-pulse w-7 h-7sm:w-12 sm:h-12" alt="icon3">
        <img src="/src/assets/icons8-javascript-48.png" class="animate-pulse-delayed w-7 h-7 sm:w-12 sm:h-12" alt="icon4">
        <img src="/src/assets/icons8-laravel-48.png" class="animate-pulse w-7 h-7 sm:w-12 sm:h-12" alt="icon5">
        <img src="/src/assets/icons8-logo-java-coffee-cup-48.png" class="animate-pulse-delayed w-7 h-7 sm:w-12 sm:h-12" alt="icon6">
        <img src="/src/assets/icons8-nodejs-48.png" class="animate-pulse w-7 h-7 sm:w-12 sm:h-12" alt="icon9">
        <img src="/src/assets/icons8-python-48.png" class="animate-pulse-delayed w-7 h-7 sm:w-12 sm:h-12" alt="icon11">
        <img src="/src/assets/icons8-vuejs-48.png" class="animate-pulse w-7 h-7 sm:w-12 sm:h-12" alt="icon13">
        <img src="/src/assets/icons8-mongodb-48.png" class="animate-pulse-delayed w-7 h-7 sm:w-12 sm:h-12" alt="icon7">
        <img src="/src/assets/icons8-mysql-50.png" class="animate-pulse w-7 h-7 sm:w-12 sm:h-12" alt="icon8">
        <img src="/src/assets/icons8-nosql-32.png" class="animate-pulse-delayed w-7 h-7 sm:w-12 sm:h-12" alt="icon10">
        <img src="/src/assets/icons8-sql-30.png" class="animate-pulse w-7 h-7 sm:w-12 sm:h-12" alt="icon12">
      </div>
  </div>

</template>

<style scoped>
.name {
  color: #f5f5f5;
}

.floating-icon-container {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-55%);
  display: flex;
  justify-content: center;
  gap: 40px;
}
</style>
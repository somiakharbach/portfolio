<script setup lang="ts">

</script>

<template>

  <div class="component-content">

    <div class="name absolute pl-24">
    <div class="text-2xl font-serif font-bold"> Building my path with skills in

      <div class="flex justify-center items-start space-x-10 translate-y-20 translate-x-20">
        <div class="flex-1 w-80">
          <h2 class="text-3xl font-bold mb-4 text-black italic">Development</h2>
          <p class="text-base text-gray-800" style="font-family: 'Lato', sans-serif;">Acquired solid skills through university projects and professional experiences
            in technologies such as Vue.js, Angular, SpringBoot, Node.js, Laravel, Tailwind CSS, and Bootstrap. </p>
        </div>

        <div class="w-1 bg-white h-80 opacity-60"></div>

        <div class="flex-1 w-80">
          <h2 class="text-3xl font-bold mb-4 text-black italic">Data</h2>
          <p class="text-base text-gray-800" style="font-family: 'Lato', sans-serif;">Built expertise in data management by working with SQL, NoSQL, and tools like MySQL,
            MariaDB, and MongoDB, along with data analysis using Hadoop, Python, and Power BI.</p>
        </div>

        <div class="w-1 bg-white h-80 opacity-60 "></div>

        <div class="flex-1 w-80">
          <h2 class="text-3xl font-bold mb-4 text-black italic">Project management</h2>
          <p class="text-base text-gray-800" style="font-family: 'Lato', sans-serif;"> Managed agile development processes with tools like Jira and Confluence,
            ensuring effective team collaboration and project delivery.</p>
        </div>
      </div>
    </div>

      <div class="floating-icon-container">
        <img src="/src/assets/icons8-angularjs-48.png" class="animate-pulse" alt="icon1">
        <!--          <img src="/src/assets/icons8-docker-48.png" class="animate-pulse-delayed" alt="icon2">-->
        <img src="/src/assets/icons8-git-48.png" class="animate-pulse-delayed" alt="icon3">
        <img src="/src/assets/icons8-javascript-48.png" class="animate-pulse" alt="icon4">
        <img src="/src/assets/icons8-laravel-48.png" class="animate-pulse-delayed" alt="icon5">
        <img src="/src/assets/icons8-logo-java-coffee-cup-48.png" class="animate-pulse" alt="icon6">
        <img src="/src/assets/icons8-nodejs-48.png" class="animate-pulse-delayed" alt="icon9">
        <img src="/src/assets/icons8-python-48.png" class="animate-pulse" alt="icon11">
        <img src="/src/assets/icons8-vuejs-48.png" class="animate-pulse-delayed" alt="icon13">
        <img src="/src/assets/icons8-mongodb-48.png" class="animate-pulse" alt="icon7">
        <img src="/src/assets/icons8-mysql-50.png" class="animate-pulse-delayed" alt="icon8">
        <img src="/src/assets/icons8-nosql-32.png" class="animate-pulse" alt="icon10">
        <img src="/src/assets/icons8-sql-30.png" class="animate-pulse-delayed" alt="icon12">

      </div>


  </div>

  </div>

</template>

<style scoped>
.name {
  color: #f5f5f5;
  top: 100px;
}

.floating-icon-container {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 40px;
}
</style>
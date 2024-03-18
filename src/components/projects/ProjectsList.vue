<script setup lang="ts">
// import {ref} from "vue";

// const projects = ref([
//   {
//     title: 'Sharlee',
//     category: 'Branding',
//     imageSrc: 'https://media.graphassets.com/7uVvYwgTHeebSFnexvTH',
//     link: '/work/sharlee'
//   },
//   {
//     title: 'ACT Responsable',
//     category: 'Web Development',
//     imageSrc: 'https://media.graphassets.com/Bp4OR4tTTuwWBy4eNi4p',
//     link: '/work/act-responsable'
//   },
//   // Add more projects here...
// ]);
//
// const activeIndex = ref(null);
//
// function goToProject(project) {
//   window.location.href = project.link;
// }
import ProjectLeft from "./ProjectLeft.vue";
import ProjectRight from "./ProjectRight.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-4 hover:gap-6 ">
    <div class="project-left ">
     <project-left> Projet1 </project-left>
      <project-left> Projet2 </project-left>
      <project-left> Projet3 </project-left>
      <project-left> Projet4 </project-left>

    </div>

    <div class="project-right border-black border">
      <project-right> Details1 </project-right>
      <project-right> Details2 </project-right>
      <project-right> Details3 </project-right>
      <project-right> Details4 </project-right>
    </div>

    </div>
</template>

<style scoped>

</style>
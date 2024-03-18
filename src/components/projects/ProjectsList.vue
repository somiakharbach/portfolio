<script setup lang="ts">
import {ref} from "vue";

const projects = ref([
  {
    title: 'Sharlee',
    category: 'Branding',
    imageSrc: 'https://media.graphassets.com/7uVvYwgTHeebSFnexvTH',
    link: '/work/sharlee'
  },
  {
    title: 'ACT Responsable',
    category: 'Web Development',
    imageSrc: 'https://media.graphassets.com/Bp4OR4tTTuwWBy4eNi4p',
    link: '/work/act-responsable'
  },
  // Add more projects here...
]);

const activeIndex = ref(null);

function goToProject(project) {
  window.location.href = project.link;
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4 hover:gap-6">
    <div class="project-left border-black border">
<!--      <div>01</div>-->
<!--      <div>02</div>-->
<!--      <div>03</div>-->
<!--      <div>04</div>-->
    </div>

    <div class="project-right">
<!--      <div>A</div>-->
<!--      <div>B</div>-->
<!--      <div>C</div>-->
<!--      <div>D</div>-->
    </div>

    </div>
</template>

<style scoped>

</style>
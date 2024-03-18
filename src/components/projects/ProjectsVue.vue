<script setup lang="ts">

import ProjectsList from "./ProjectsList.vue";
</script>

<template>

  <div class="component-content">
  <div class="name absolute top-48 pl-24">
    <div class="text-6xl "> PROJECTS </div>
    <ProjectsList>  </ProjectsList>
  </div>


  </div>

</template>

<style scoped>
.name {
  color: #0e0b05;
  top: 250px;
}
</style>
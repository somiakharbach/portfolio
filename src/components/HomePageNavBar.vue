<script setup lang="ts">

import NavbarButton from "./NavbarButton.vue";

defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="flex flex-row justify-evenly border-amber-50 border-b-2 space-x-1 py-1 sm:space-x-2 md:space-x-4">
    <router-link to="/">
      <NavbarButton title="HOME" />
    </router-link>
    <router-link to="/projects">
      <NavbarButton title="PROJECTS" />
    </router-link>
    <router-link to="/skills">
      <NavbarButton title="SKILLS" />
    </router-link>
    <router-link to="/education">
      <NavbarButton title="EDUCATION" />
    </router-link>
  </div>
</template>



<style scoped>
.flex {
  backdrop-filter: blur(300px);
}
</style>

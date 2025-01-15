<script setup lang="ts">
import { ref } from 'vue'
import NavbarButton from "./NavbarButton.vue";

defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
<!--   <div class="center">-->
<!--      <figure class="circle" >-->

<!--      </figure>-->

<!--   </div>-->

<!--  <div>-->
<!--    <div class="wave"></div>-->
<!--    <div class="wave"></div>-->
<!--    <div class="wave"></div>-->
<!--  </div>-->

  <div class="flex flex-row md:flex-row justify-evenly border-black border-b-2 ">
     <router-link to="/">  <NavbarButton title="HOME"></NavbarButton>  </router-link>
    <router-link to="/projects">  <NavbarButton title="PROJECTS"></NavbarButton>  </router-link>
    <router-link to="/skills">
      <NavbarButton title="SKILLS"></NavbarButton>
    </router-link>
    <router-link to="/education">
      <NavbarButton title="EDUCATION"></NavbarButton>
    </router-link>
  </div>

</template>

<style scoped>
.flex {
  backdrop-filter: blur(300px);
}
</style>

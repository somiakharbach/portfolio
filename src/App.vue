<script setup lang="ts">
import HomePageNavBar from "./components/HomePageNavBar.vue";
// import HomePage from "./components/HomePage.vue";


</script>

<template>
<div>
<div class="navbar">
  <HomePageNavBar msg=""></HomePageNavBar>
</div>
  <div>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

</div>

</template>

<style scoped>

</style>

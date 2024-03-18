<script setup lang="ts">
import HomePageNavBar from "./components/HomePageNavBar.vue";
// import HomePage from "./components/HomePage.vue";

import { ref, onMounted } from "vue";

// Créer une interface pour décrire la structure des éléments de cercle
interface CircleElement extends HTMLElement {
  x: number;
  y: number;
}

const coords = ref({ x: 0, y: 0 });
const circles = ref<NodeListOf<CircleElement> | null>(null);

onMounted(() => {
  // Sélectionnez les éléments de cercle une fois que le composant est monté
  circles.value = document.querySelectorAll('.circle');
  circles.value.forEach(circle => {
    // Assurez-vous que TypeScript reconnaît les propriétés x et y sur chaque élément de cercle
    (circle as CircleElement).x = 0;
    (circle as CircleElement).y = 0;
  });

  window.addEventListener('mousemove', updateCoords);
});

// Mettre à jour les coordonnées sur le mouvement de la souris
function updateCoords(e: MouseEvent) {
  coords.value.x = e.clientX;
  coords.value.y = e.clientY;

  animateCircles();
}

// Animer les cercles
function animateCircles() {
  let x = coords.value.x;
  let y = coords.value.y;

  circles.value?.forEach((circle, index) => {

    const delay = 200 * (index + 1);

    setTimeout(() => {
      circle.style.transition = `transform ${delay / 1000}s`;
      circle.style.left = x - 12 + 'px';
      circle.style.top = y - 12 + 'px';
    }, delay);

    circle.style.left = x - 12  + 'px';
    circle.style.top = y - 12 +  'px';
    circle.style.background = 'transparent'; // Rendre le cercle transparent
    circle.style.border = '2px solid black'; // Ajouter une bordure noire
    circle.style.borderRadius = '50%'; // Rendre le cercle circulaire


    circle.x = x;
    circle.y = y;

    const nextCircle = circles.value![index + 1] || circles.value![0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });

  requestAnimationFrame(animateCircles);
}

</script>

<template>
<div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>

  <div class="navbar">
  <HomePageNavBar msg=""></HomePageNavBar>
  </div>
  <div>

    <transition name="slide-left">
      <router-view></router-view>
    </transition>
  </div>

</div>

</template>

<style scoped>

</style>

<script setup lang="ts">

</script>

<template>

  <div class="name top-20 sm:top-24 absolute pl-4 sm:pl-24">
    <div class="text-xl sm:text-2xl font-serif font-bold italic"> My educational journey
      <div class="flex justify-center items-center h-screen">
        <div class="relative w-full max-w-4xl">
         <svg viewBox="0 0 800 200" class="w-full h-screen" xmlns="http://www.w3.org/2000/svg">
<!--           M where it should start-->
           <path d="M50 150 Q 25 10 180 100 T 350 100 T 520 100 T 690 10" stroke="black" stroke-width="4" stroke-dasharray="10,15" fill="none" />
<!--           Mark relevant points-->
           <g stroke="grey" stroke-width="5" fill="grey">
             <circle id="point2021" cx="100" cy="65" r="5" />
             <circle id="point2022" cx="400" cy="55" r="5" />
             <circle id="point2024" cx="680" cy="50" r="5" />
           </g>
<!--           Label the points-->
           <g font-size="25" font-family="font-serif" fill="black" text-anchor="middle">
             <text x="100" y="65" dx="10" dy="-10">2021</text>
             <text x="400" y="55" dx="10" dy="-10">2022</text>
             <text x="680" y="50" dx="40" dy="-5">2024</text>
            </g>

           <rect x="5" y="-180" rx="3" ry="3" width="300" height="200" stroke="grey" fill="grey" stroke-width="5"/>
                      <text id="ligne1" x="10" y="-160">DEUG Eco-gestion</text>

           <rect x="340" y="140" rx="3" ry="3" width="300" height="200" stroke="grey" fill="grey" stroke-width="5"/>
                      <text id="ligne1" x="350" y="160">Licence MIAGE</text>

           <rect x="450" y="-190" rx="3" ry="3" width="300" height="200" stroke="grey" fill="grey" stroke-width="5"/>
                      <text id="ligne1" x="460" y="-170">Master MIAGE</text>

         </svg>

      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.name {
  color: #f5f5f5;
}
</style>
<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

</script>

<template>
  <div class="education">
      <div class="flex justify-center items-center h-screen text-xl sm:text-2xl mt-10">
        <p class="text-yellow-200 mr-9 text-xs sm:text-2xl"> My educational journey </p>
        <div class="relative w-full max-w-4xl">
          <svg viewBox="0 0 800 200" class="w-full h-screen" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 150 Q 25 10 180 100 T 350 100 T 520 100 T 690 10" stroke="grey" stroke-width="4"
                  stroke-dasharray="10,15" fill="none" />
            <g stroke="white" stroke-width="5" fill="white">
              <circle id="point2021" cx="100" cy="65" r="4" />
              <circle id="point2022" cx="400" cy="55" r="4" />
              <circle id="point2024" cx="680" cy="50" r="4" />
            </g>
            <g font-size="25" font-family="font-normal" fill="white" text-anchor="middle">
              <text x="100" y="65" dx="10" dy="-10">2021</text>
              <text x="400" y="55" dx="10" dy="-10">2022</text>
              <text x="680" y="50" dx="40" dy="-5">2024</text>
            </g>

            <foreignObject x="2" y="-160" width="300" height="220">
              <div class="holographic-card">
              <div class="point-content">
                <p class="font-bold italic text-base">Two year economics and management diploma</p>
                <div class="flex items-center ">
                  <img src="/src/assets/icons8-centre-universitaire-48.png" class="icon"/>
                  <p class="text-xs ml-2">Toulouse school of economics, Toulouse, France.</p>
                </div>
                <div class="flex items-center pt-4">
                  <img src="/src/assets/icons8-livres-48.png" class="icon"/>
                <p class="text-sm ml-2">Management, Statics, Mathematics, Economics, Accounting.</p>
                </div>
              </div>
              </div>
            </foreignObject>

            <foreignObject x="340" y="110" width="300" height="220">
              <div class="holographic-card">
              <div class="point-content">
                <p class="font-bold italic text-base">Bachelor's degree in MIAGE</p>
                <div class="flex items-center">
                <img src="/src/assets/icons8-centre-universitaire-48.png" class="icon"/>
                <p class="text-xs ml-2">Université Paul Sabatier, Toulouse, France.</p>
                </div>
                <div class="flex items-center pt-4">
                  <img src="/src/assets/icons8-livres-48.png" class="icon"/>
                  <p class="text-sm ml-2">Web development, Mathematics, Databases, IT law, Project Management.</p>
                </div>
              </div>
              </div>
            </foreignObject>

            <foreignObject x="500" y="-180" width="300" height="220">
              <div class="holographic-card">
              <div class="point-content">
                <p class="font-bold italic text-base">Master's degree in MIAGE</p>
                <div class="flex items-center">
                  <img src="/src/assets/icons8-centre-universitaire-48.png" class="icon"/>
                  <p class="text-xs ml-2">Université Paul Sabatier, Toulouse, France.</p>
                </div>
                <div class="flex items-center pt-4">
                  <img src="/src/assets/icons8-livres-48.png" class="icon"/>
                <p class="text-sm ml-2">Advanced databases, IA, Data analytics, Project Management,
                  Cloud computing, UI/UX, Cybersecurity.</p>
              </div>
              </div>
              </div>
            </foreignObject>

          </svg>
        </div>
      </div>
  </div>
</template>

<style scoped>

.education{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  color: black;
}

.text-xl {
  color: #000000;
  overflow: hidden;
}

.point-content {
  background-color: ghostwhite;
  border: 1px solid ghostwhite;
  padding: 5px;
  border-radius: 10px;
  word-wrap: break-word;
}

.icon{
  width: 20px;
  height: 20px ;
}

.flex{
  display: flex;
  align-items: center;
}

.ml-2{
  margin-left: 0.5rem;
}

.holographic-card {
  width: 300px;
  height: 200px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  transition: all 0.5s ease;
}

.holographic-card h2 {
  color: rgb(239, 209, 12);
  font-size: 2rem;
  position: relative;
  z-index: 2;
}

.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      0deg,
      transparent,
      transparent 30%,
      rgba(241, 232, 7, 0.96)
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.holographic-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgb(246, 255, 6);
}

.holographic-card:hover::before {
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}

</style>
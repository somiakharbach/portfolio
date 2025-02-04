<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

</script>

<template>
  <div class="education">
      <div class="flex justify-center items-center h-screen text-xl sm:text-2xl mt-10">
        <p class="text-yellow-200 text-xs sm:text-2xl"> My educational journey </p>
        <div class="relative w-full max-w-4xl">
          <svg viewBox="0 0 800 200" class="w-full h-screen" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 150 Q 25 10 180 100 T 350 100 T 520 100 T 690 10" stroke="grey" stroke-width="4" stroke-dasharray="10,15" fill="none" />
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

            <foreignObject x="0" y="-140" width="300" height="220">
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
            </foreignObject>

            <foreignObject x="320" y="140" width="300" height="220">
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
            </foreignObject>

            <foreignObject x="500" y="-150" width="300" height="220">
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
            </foreignObject>

          </svg>
        </div>
      </div>
  </div>
</template>

<style scoped>

.education {
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
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

.point-content:hover {
  opacity: 70%;
}

.icon {
  width: 20px;
  height: 20px;
}

.flex {
  display: flex;
  align-items: center;
}

.ml-2 {
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .education {
    padding: 10px;
  }

  .text-xl {
    font-size: 1rem;
  }

  .point-content {
    font-size: 0.875rem;
  }

  .icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .education {
    padding: 5px;
  }

  .text-xl {
    font-size: 0.875rem;
  }

  .point-content {
    font-size: 0.75rem;
  }

  .icon {
    width: 12px;
    height: 12px;
  }
}
</style>
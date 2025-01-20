<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <a class="cursor-pointer relative inline-flex items-center justify-start inline-block px-3 py-2 text-xs overflow-hidden
  font-bold rounded-full group sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-3 md:text-base" >
    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56
    -translate-y-24 bg-yellow-50 opacity-80 group-hover:-translate-x-8"></span>
    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-900">
      {{ props.title }}
    </span>
  </a>
</template>


<style scoped>

.cursor-pointer{
  font-family: "Unbounded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

</style>
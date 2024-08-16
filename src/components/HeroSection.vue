<template>
  <section class="relative flex flex-col md:flex-row items-center justify-between mobile:mt-4 sm:mt-16">
    <!-- Image Section -->
    <div class="relative overflow-hidden w-full mt-12 md:mt-0 md:w-auto md:absolute md:right-0 md:top-0 order-1 md:order-2">
      <img :src="illustrationWorking" alt="Working Illustration" class="w-full max-w-none md:max-w-xl object-cover md:object-contain translate-x-10 sm:translate-x-16 md:translate-x-24">
    </div>

    <!-- Text Section -->
    <div class="text-center md:text-left md:max-w-xl order-2 md:order-1">
      <h1 class="text-4xl md:text-7xl font-bold text-veryDarkViolet leading-tight">
        More than just<br> shorter links
      </h1>
      <p class="text-grayishViolet text-lg my-2 md:my-4">
        Build your brand's recognition and get detailed<br> insights on how your links are performing.
      </p>
      <button class="bg-cyan text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-light mt-2 md:mt-4">
        Get Started
      </button>
    </div>
  </section>
</template>


<script setup>
import illustrationWorking from "@/assets/images/illustration-working.svg";
</script>

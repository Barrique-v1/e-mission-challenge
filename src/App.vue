<script setup>
import Header from "@/components/Header.vue";
import HeroSection from "@/components/HeroSection.vue";
import LinkShortener from "@/components/LinkShortener.vue";
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <div class="container mx-auto max-w-screen-lg p-4">
      <Header />
      <HeroSection />
    </div>
    <div class="relative flex-grow">
      <div class="absolute inset-0 bg-[#eff1f6] sm:mt-48 mobile:mt-36"></div>
      <div class="relative container mx-auto max-w-screen-lg p-4">
        <LinkShortener />
      </div>
    </div>
  </main>
</template>







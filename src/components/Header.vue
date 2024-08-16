<script setup>
import { ref } from 'vue';
import logo from '@/assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Zustand des Menüs
const isMenuOpen = ref(false);

// Toggle-Funktion für das Menü
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="flex justify-between items-center p-8 sm:pt-8 sm:pb-0 sm:px-0">
    <!-- Logo Section -->
    <div class="flex items-center">
      <img :src="logo" alt="Shortly Logo" class="h-8 mr-8" >
      <!-- Navigation Links (Hidden on mobile, visible on sm and up) -->
      <nav class="hidden md:flex space-x-8 text-grayishViolet font-bold">
        <a href="#" class="hover:text-veryDarkViolet">Features</a>
        <a href="#" class="hover:text-veryDarkViolet">Pricing</a>
        <a href="#" class="hover:text-veryDarkViolet">Resources</a>
      </nav>
    </div>

    <!-- Hamburger Menu Icon for Mobile -->
    <div class="md:hidden">
      <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-grayishViolet h-6 w-6 text-2xl cursor-pointer"
          @click="toggleMenu"
      />
    </div>

    <!-- Dropdown Menu for Mobile -->
    <div v-if="isMenuOpen" class="absolute top-24 left-6 right-6 bg-darkViolet p-6 rounded-lg shadow-lg z-50 sm:hidden">
      <nav class="flex flex-col items-center space-y-6 text-white font-bold">
        <a href="#" class="hover:text-cyan">Features</a>
        <a href="#" class="hover:text-cyan">Pricing</a>
        <a href="#" class="hover:text-cyan">Resources</a>
        <hr class="w-full border-grayishViolet">
        <a href="#" class="hover:text-cyan">Login</a>
        <button class="bg-cyan text-white font-bold py-2 px-6 rounded-full hover:bg-cyan-light">
          Sign Up
        </button>
      </nav>
    </div>

    <!-- Right Section: Login and Sign Up (Hidden on mobile, visible on sm and up) -->
    <div class="hidden md:flex items-center space-x-4 text-grayishViolet font-bold">
      <a href="#" class="hover:text-veryDarkViolet">Login</a>
      <button class="bg-cyan text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-light">
        Sign Up
      </button>
    </div>
  </header>
</template>

<style scoped>
/* Hier können zusätzliche spezifische Stile hinzugefügt werden */
</style>
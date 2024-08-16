<script setup>
import logo from '@/assets/images/logo.svg'
</script>

<template>
  <header class="flex justify-between items-center p-4 mobile:p-2 desktop:p-8">
    <!-- Logo Section -->
    <div class="flex items-center">
      <img :src="logo" alt="Shortly Logo" class="h-8">
      <!-- Navigation Links (Hidden on mobile, visible on sm and up) -->
      <nav class="hidden sm:flex space-x-8 text-grayishViolet font-bold">
        <a href="#" class="hover:text-veryDarkViolet">Features</a>
        <a href="#" class="hover:text-veryDarkViolet">Pricing</a>
        <a href="#" class="hover:text-veryDarkViolet">Resources</a>
      </nav>
    </div>

    <!-- Hamburger Menu Icon for Mobile -->
    <div class="sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-grayishViolet" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </div>

    <!-- Right Section: Login and Sign Up (Hidden on mobile, visible on sm and up) -->
    <div class="hidden sm:flex items-center space-x-4 text-grayishViolet font-bold">
      <a href="#" class="hover:text-veryDarkViolet">Login</a>
      <button class="bg-cyan text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-light">
        Sign Up
      </button>
    </div>
  </header>
</template>
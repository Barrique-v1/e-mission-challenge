<template>
  <section class="relative mobile:mt-8 sm:mt-24">
    <!-- Background Image -->
    <div class="relative bg-darkViolet rounded-lg overflow-hidden">
      <div
          class="absolute inset-0 bg-cover bg-no-repeat"
          :style="{
          backgroundImage: `url(${isMobile ? bgShortenMobile : bgShortenDesktop})`
        }"
      ></div>

      <!-- Shortener Form -->
      <div class="relative z-10 p-6 md:p-12">
        <form @submit.prevent="shortenLink" class="flex flex-col md:flex-row md:items-center">
          <input
              v-model="linkInput"
              type="text"
              placeholder="Shorten a link here..."
              :class="[
              'w-full p-3 rounded-lg text-lg outline-none',
              hasError ? 'border-2 border-red placeholder-red' : 'focus:ring-2 focus:ring-cyan'
            ]"
          />
          <button
              type="submit"
              class="mt-4 md:mt-0 md:ml-4 bg-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-light whitespace-nowrap"
          >
            Shorten It!
          </button>
        </form>
        <p v-if="hasError" class="text-red italic mt-2">Please add a link</p>
      </div>
    </div>

    <!-- Display Links -->
    <div v-if="shortenedLinks.length" class="mt-6 space-y-4">
      <div v-for="(link, index) in shortenedLinks" :key="index" class="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg">
        <p class="text-gray-800 truncate max-w-full md:max-w-2xl">
          {{ link }}
        </p>
        <button
            @click="copyToClipboard(link, index)"
            :class="[
            'mt-2 md:mt-0 text-white font-bold py-2 px-4 rounded-lg w-full md:w-auto',
            copiedIndex === index ? 'bg-darkViolet' : 'bg-cyan hover:bg-cyan-light'
          ]"
        >
          {{ copiedIndex === index ? 'Copied!' : 'Copy' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import bgShortenMobile from '@/assets/images/bg-shorten-mobile.svg';
import bgShortenDesktop from '@/assets/images/bg-shorten-desktop.svg';

const isMobile = ref(false);
const linkInput = ref('');
const shortenedLinks = ref([]);
const hasError = ref(false);
const copiedIndex = ref(null);

onMounted(() => {
  const updateSize = () => {
    isMobile.value = window.innerWidth < 768;
  };

  window.addEventListener('resize', updateSize);
  updateSize();
});

const shortenLink = () => {
  if (linkInput.value.trim() === '') {
    hasError.value = true;
  } else {
    hasError.value = false;
    shortenedLinks.value.push(linkInput.value);
    linkInput.value = '';
  }
};

const copyToClipboard = (link, index) => {
  navigator.clipboard.writeText(link).then(() => {
    copiedIndex.value = index;
    setTimeout(() => {
      copiedIndex.value = null;
    }, 2000);
  });
};
</script>

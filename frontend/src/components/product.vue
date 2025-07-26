<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">Product Catalog</h1>

    <!-- Image Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click.self="closeModal">
      <div class="relative max-w-4xl max-h-full">
        <button @click="closeModal" class="absolute -top-10 right-0 text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img :src="selectedImage" :alt="selectedAlt" class="max-w-full max-h-screen object-contain">
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="product in products"
        :key="product.code"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <!-- Product Image with View Larger Button -->
        <div class="h-48 overflow-hidden relative group">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-full object-cover"
          />
          <button
            @click="openModal(product.image, product.title)"
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <span class="bg-white text-gray-800 px-3 py-1 rounded-md font-medium">View Larger</span>
          </button>
        </div>

        <!-- Product Details -->
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
          <div class="space-y-2 text-gray-600">
            <p><span class="font-medium">Code:</span> {{ product.code }}</p>
            <p><span class="font-medium">Weight:</span> {{ product.weight }}</p>
            <p><span class="font-medium">Price:</span> {{ product.price }}</p>
            <p><span class="font-medium">Shipping:</span> {{ product.shipping }}</p>
            <p><span class="font-medium">Total:</span> {{ product.total }}</p>
            <p>
              <span class="font-medium">
                <a :href="product.link" target="_blank" class="text-blue-600 hover:underline">Product Link</a>
              </span>
            </p>
          </div>

          <!-- Google Drive Button -->
          <a
            :href="product.driveLink"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M7.5 3.75H3.75v3.75H7.5zm1.5 0v3.75h3.75V3.75zm-1.5 1.5H3.75v3.75H7.5zm1.5 0v3.75h3.75V5.25zm-1.5 1.5H3.75v3.75H7.5zm1.5 0v3.75h3.75V6.75z"
              />
            </svg>
            View on Drive
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CJ01 from '../assets/CJ01.jpg';

const showModal = ref(false);
const selectedImage = ref('');
const selectedAlt = ref('');

const openModal = (image, alt) => {
  selectedImage.value = image;
  selectedAlt.value = alt;
  showModal.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto'; // Re-enable scrolling
};

const products = [
  {
    title: "Children's Jewelry Box",
    code: "CJ01",
    weight: "0",
    price: "1707.02",
    shipping: "0",
    total: "1707",
    link: "https://mobile.yangkeduo.com/goods1.html?ps=GMEtp4WS25",
    image: CJ01,
    driveLink: "https://drive.google.com/drive/folders/1iy8rtZfy4gUwl3rxA-weOV6t0FPakRTV?usp=drive_link"
  }
];
</script>

<style scoped>
/* Custom modal transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
<template>
  <div class="product-card group">
    <div class="relative aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
      <img 
        v-if="product.image" 
        :src="product.image" 
        :alt="product.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      >
      <div v-else class="w-full h-full flex items-center justify-center">
        <div class="text-4xl text-primary-300">{{ product.category.charAt(0).toUpperCase() }}</div>
      </div>
      
      <!-- Category Badge -->
      <div class="absolute top-3 left-3">
        <span class="bg-white/90 text-primary-700 text-xs font-semibold px-2 py-1 rounded-full">
          {{ product.category }}
        </span>
      </div>
      
      <!-- Price Badge -->
      <div class="absolute top-3 right-3">
        <span class="bg-accent-500 text-white font-bold px-3 py-1 rounded-full">
          ${{ product.price }}
        </span>
      </div>
    </div>
    
    <div class="p-6">
      <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{{ product.title }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ product.description }}</p>
      
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="flex text-yellow-400 text-sm">
            <span v-for="i in 5" :key="i" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'">★</span>
          </div>
          <span class="text-sm text-gray-500 ml-2">({{ product.reviews }} reviews)</span>
        </div>
        <span class="text-sm text-gray-500">{{ product.downloads }} downloads</span>
      </div>
      
      <div class="flex space-x-2">
        <button 
          @click="addToCart(product)"
          class="flex-1 btn-primary text-sm"
        >
          Add to Cart
        </button>
        <NuxtLink 
          :to="`/products/${product.id}`"
          class="btn-secondary text-sm"
        >
          View Details
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addItem(product)
}
</script>
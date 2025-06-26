<template>
  <div v-if="product" class="min-h-screen bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink>
        <span>/</span>
        <NuxtLink to="/products" class="hover:text-primary-600">Products</NuxtLink>
        <span>/</span>
        <span class="text-gray-900">{{ product.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
          <div class="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl overflow-hidden">
            <img 
              v-if="product.image" 
              :src="product.image" 
              :alt="product.title"
              class="w-full h-full object-cover"
            >
            <div v-else class="w-full h-full flex items-center justify-center">
              <div class="text-6xl text-primary-300">{{ product.category.charAt(0) }}</div>
            </div>
          </div>
          
          <!-- Additional Info Cards -->
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-primary-600">{{ product.downloads }}</div>
              <div class="text-sm text-gray-600">Downloads</div>
            </div>
            <div class="bg-white p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-primary-600">{{ product.reviews }}</div>
              <div class="text-sm text-gray-600">Reviews</div>
            </div>
            <div class="bg-white p-4 rounded-lg text-center">
              <div class="flex justify-center text-yellow-400 text-lg mb-1">
                <span v-for="i in 5" :key="i" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'">★</span>
              </div>
              <div class="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>

        <!-- Product Details -->
        <div class="space-y-6">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                {{ product.category }}
              </span>
              <div class="flex items-center text-yellow-400">
                <span v-for="i in 5" :key="i" :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-300'">★</span>
                <span class="text-gray-600 ml-2">({{ product.reviews }} reviews)</span>
              </div>
            </div>
            
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{{ product.title }}</h1>
            <p class="text-lg text-gray-600 leading-relaxed">{{ product.description }}</p>
          </div>

          <!-- Price and Purchase -->
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <div class="text-4xl font-bold text-primary-600">${{ product.price }}</div>
              <div class="text-right">
                <div class="text-sm text-gray-500">One-time purchase</div>
                <div class="text-sm text-gray-500">Instant download</div>
              </div>
            </div>
            
            <div class="space-y-3">
              <button 
                @click="addToCart(product)"
                class="w-full btn-primary text-lg py-4"
              >
                Add to Cart - ${{ product.price }}
              </button>
              <button class="w-full btn-secondary text-lg py-4">
                Buy Now
              </button>
            </div>
          </div>

          <!-- Features -->
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <h3 class="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Lifetime access to all content</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Free updates and new versions</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Commercial usage rights</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>24/7 customer support</span>
              </li>
              <li class="flex items-start">
                <CheckIcon class="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>30-day money-back guarantee</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      <section class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="relatedProduct in relatedProducts" 
            :key="relatedProduct.id" 
            :product="relatedProduct" 
          />
        </div>
      </section>
    </div>
  </div>
  
  <div v-else class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
      <NuxtLink to="/products" class="btn-primary">Back to Products</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import { useProductStore } from '~/stores/products'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const product = computed(() => productStore.getProductById(route.params.id))
const relatedProducts = computed(() => {
  if (!product.value) return []
  return productStore.getProductsByCategory(product.value.category)
    .filter(p => p.id !== product.value.id)
    .slice(0, 3)
})

const addToCart = (product) => {
  cartStore.addItem(product)
}

// SEO
useHead(() => ({
  title: product.value ? `${product.value.title} - DigitalStore` : 'Product Not Found',
  meta: [
    { name: 'description', content: product.value?.description || 'Product not found' }
  ]
}))
</script>
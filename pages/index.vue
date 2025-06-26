<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Premium Digital Products
            <span class="block text-accent-300">For Modern Creators</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
            Discover high-quality courses, templates, software, and digital assets to accelerate your projects and grow your skills
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <NuxtLink to="/products" class="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
              Browse Products
            </NuxtLink>
            <button class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from our carefully curated collection of digital products
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div 
            v-for="category in productStore.categories" 
            :key="category.name"
            class="text-center group cursor-pointer"
          >
            <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300 transform group-hover:scale-110">
              <span class="text-2xl font-bold text-primary-600">{{ category.name.charAt(0) }}</span>
            </div>
            <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{{ category.name }}</h3>
            <p class="text-sm text-gray-500">{{ category.count }} products</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-picked premium digital products that deliver exceptional value
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/products" class="btn-primary text-lg px-8 py-4">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">10K+</div>
            <div class="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div class="text-gray-600">Digital Products</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">99%</div>
            <div class="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <div class="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-secondary-600 to-primary-600 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Digital Journey?
        </h2>
        <p class="text-xl mb-8 text-primary-100">
          Join thousands of creators and professionals who trust our digital products to grow their business and skills
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/products" class="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
            Start Shopping
          </NuxtLink>
          <button class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductStore } from '~/stores/products'

const productStore = useProductStore()
const featuredProducts = computed(() => productStore.getFeaturedProducts)

// SEO
useHead({
  title: 'DigitalStore - Premium Digital Products for Modern Creators',
  meta: [
    { name: 'description', content: 'Discover high-quality digital products including courses, templates, software, and assets to accelerate your projects and grow your skills.' }
  ]
})
</script>
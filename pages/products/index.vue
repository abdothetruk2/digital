<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
        <p class="text-lg text-gray-600">Discover our complete collection of premium digital products</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Filters -->
        <div class="lg:w-64 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h3 class="font-semibold text-gray-900 mb-4">Filter by Category</h3>
            <div class="space-y-3">
              <label class="flex items-center">
                <input type="radio" name="category" value="" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">All Categories</span>
              </label>
              <label v-for="category in productStore.categories" :key="category.name" class="flex items-center">
                <input type="radio" name="category" :value="category.name" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">{{ category.name }} ({{ category.count }})</span>
              </label>
            </div>
            
            <hr class="my-6">
            
            <h3 class="font-semibold text-gray-900 mb-4">Price Range</h3>
            <div class="space-y-3">
              <label class="flex items-center">
                <input type="radio" name="price" value="" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">All Prices</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="price" value="0-25" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">$0 - $25</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="price" value="25-50" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">$25 - $50</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="price" value="50-100" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">$50 - $100</span>
              </label>
              <label class="flex items-center">
                <input type="radio" name="price" value="100+" class="text-primary-600 focus:ring-primary-500">
                <span class="ml-3 text-gray-700">$100+</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="flex-1">
          <div class="flex items-center justify-between mb-6">
            <p class="text-gray-600">Showing {{ productStore.products.length }} products</p>
            <select class="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Sort by Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Best Rating</option>
            </select>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <ProductCard 
              v-for="product in productStore.products" 
              :key="product.id" 
              :product="product" 
            />
          </div>

          <!-- Pagination -->
          <div class="flex justify-center mt-12">
            <nav class="flex space-x-2">
              <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Previous</button>
              <button class="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
              <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">Next</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/stores/products'

const productStore = useProductStore()

useHead({
  title: 'All Products - DigitalStore',
  meta: [
    { name: 'description', content: 'Browse our complete collection of premium digital products including courses, templates, software, and more.' }
  ]
})
</script>
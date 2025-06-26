<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Product Categories</h1>
        <p class="text-lg text-gray-600">Browse our digital products by category to find exactly what you need</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="category in productStore.categories" 
          :key="category.name"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
          @click="navigateToCategory(category.name)"
        >
          <div class="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
            <div class="text-6xl font-bold text-primary-600">{{ category.name.charAt(0) }}</div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{{ category.name }}</h3>
            <p class="text-gray-600 mb-4">{{ getCategoryDescription(category.name) }}</p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">{{ category.count }} products</span>
              <span class="text-primary-600 font-semibold group-hover:text-primary-700">Browse →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/stores/products'

const productStore = useProductStore()

const getCategoryDescription = (categoryName) => {
  const descriptions = {
    'Course': 'Comprehensive learning materials and video tutorials to master new skills',
    'Template': 'Professional design templates for websites, presentations, and documents',
    'eBook': 'Digital books and guides covering various topics and industries',
    'Software': 'Applications, plugins, and tools to enhance your productivity',
    'Preset': 'Ready-to-use presets for photo editing and design software',
    'Audio': 'Music tracks, sound effects, and audio resources for your projects'
  }
  return descriptions[categoryName] || 'High-quality digital products for professionals'
}

const navigateToCategory = (categoryName) => {
  navigateTo(`/products?category=${encodeURIComponent(categoryName)}`)
}

useHead({
  title: 'Product Categories - DigitalStore',
  meta: [
    { name: 'description', content: 'Browse our digital products by category including courses, templates, ebooks, software, presets, and audio resources.' }
  ]
})
</script>
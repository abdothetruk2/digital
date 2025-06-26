<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">DS</span>
            </div>
            <span class="text-xl font-bold text-gray-900">DigitalStore</span>
          </NuxtLink>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/products" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Products
          </NuxtLink>
          <NuxtLink to="/categories" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            Categories
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            About
          </NuxtLink>
        </nav>

        <!-- Right side actions -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="hidden sm:block">
            <div class="relative">
              <input
                type="text"
                placeholder="Search products..."
                class="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                v-model="searchQuery"
              >
              <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <!-- Cart -->
          <button @click="toggleCart" class="relative p-2 text-gray-700 hover:text-primary-600 transition-colors">
            <ShoppingCartIcon class="w-6 h-6" />
            <span v-if="cartStore.itemCount > 0" class="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {{ cartStore.itemCount }}
            </span>
          </button>

          <!-- User Account -->
          <button class="text-gray-700 hover:text-primary-600 transition-colors">
            <UserIcon class="w-6 h-6" />
          </button>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-700">
            <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-3">
          <NuxtLink to="/" class="text-gray-700 hover:text-primary-600 font-medium">Home</NuxtLink>
          <NuxtLink to="/products" class="text-gray-700 hover:text-primary-600 font-medium">Products</NuxtLink>
          <NuxtLink to="/categories" class="text-gray-700 hover:text-primary-600 font-medium">Categories</NuxtLink>
          <NuxtLink to="/about" class="text-gray-700 hover:text-primary-600 font-medium">About</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const toggleCart = () => {
  cartStore.toggleSidebar()
}
</script>
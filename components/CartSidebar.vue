<template>
  <div v-if="cartStore.sidebarOpen" class="fixed inset-0 z-50 overflow-hidden">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black bg-opacity-50" @click="cartStore.closeSidebar()"></div>
    
    <!-- Sidebar -->
    <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <h2 class="text-lg font-bold text-gray-900">Shopping Cart</h2>
          <button @click="cartStore.closeSidebar()" class="text-gray-400 hover:text-gray-600">
            <XMarkIcon class="w-6 h-6" />
          </button>
        </div>
        
        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="cartStore.items.length === 0" class="text-center py-8">
            <ShoppingCartIcon class="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p class="text-gray-500">Your cart is empty</p>
            <NuxtLink to="/products" class="btn-primary mt-4 inline-block" @click="cartStore.closeSidebar()">
              Browse Products
            </NuxtLink>
          </div>
          
          <div v-else class="space-y-4">
            <div v-for="item in cartStore.items" :key="item.id" class="flex items-center space-x-4 p-4 border rounded-lg">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                <span class="text-primary-600 font-bold">{{ item.category.charAt(0) }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-medium text-gray-900 truncate">{{ item.title }}</h4>
                <p class="text-sm text-gray-500">{{ item.category }}</p>
                <p class="font-bold text-primary-600">${{ item.price }}</p>
              </div>
              <button @click="cartStore.removeItem(item.id)" class="text-red-500 hover:text-red-700">
                <TrashIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div v-if="cartStore.items.length > 0" class="border-t p-6">
          <div class="flex items-center justify-between mb-4">
            <span class="text-lg font-bold text-gray-900">Total:</span>
            <span class="text-2xl font-bold text-primary-600">${{ cartStore.total }}</span>
          </div>
          <button class="w-full btn-primary mb-3">
            Proceed to Checkout
          </button>
          <button @click="cartStore.clearCart()" class="w-full text-sm text-gray-500 hover:text-gray-700">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon, ShoppingCartIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
</script>
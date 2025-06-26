import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    sidebarOpen: false
  }),

  getters: {
    itemCount: (state) => state.items.length,
    total: (state) => state.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)
  },

  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (!existingItem) {
        this.items.push({ ...product })
        this.sidebarOpen = true
      }
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },

    clearCart() {
      this.items = []
      this.sidebarOpen = false
    },

    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },

    closeSidebar() {
      this.sidebarOpen = false
    }
  }
})
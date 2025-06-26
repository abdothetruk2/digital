<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Help Center</h1>
        <p class="text-lg text-gray-600">Find answers to common questions and get the help you need</p>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Search -->
      <div class="mb-12">
        <div class="relative">
          <input
            type="text"
            placeholder="Search for help articles..."
            class="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            v-model="searchQuery"
          >
          <MagnifyingGlassIcon class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
        </div>
      </div>

      <!-- Quick Help Categories -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <ShoppingCartIcon class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Orders & Downloads</h3>
            <p class="text-gray-600 text-sm">How to purchase, download, and access your digital products</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
              <CreditCardIcon class="w-6 h-6 text-secondary-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Payment & Billing</h3>
            <p class="text-gray-600 text-sm">Payment methods, refunds, and billing questions</p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <UserIcon class="w-6 h-6 text-accent-600" />
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Account Management</h3>
            <p class="text-gray-600 text-sm">Managing your account, profile, and preferences</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-sm">
            <button 
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <ChevronDownIcon 
                :class="['w-5 h-5 text-gray-500 transition-transform', openFaqs.includes(index) ? 'rotate-180' : '']"
              />
            </button>
            <div v-if="openFaqs.includes(index)" class="px-6 pb-4">
              <p class="text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Support -->
      <section>
        <div class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 class="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p class="text-primary-100 mb-6">Our support team is here to help you with any questions or issues</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Contact Support
            </NuxtLink>
            <a href="mailto:support@digitalstore.com" class="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon, ShoppingCartIcon, CreditCardIcon, UserIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const searchQuery = ref('')
const openFaqs = ref([])

const faqs = [
  {
    question: "How do I download my purchased products?",
    answer: "After completing your purchase, you'll receive an email with download links. You can also access your downloads from your account dashboard under 'My Purchases'."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods through our payment processor."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee on all digital products. If you're not satisfied, contact our support team for a full refund."
  },
  {
    question: "Do I need to create an account to make a purchase?",
    answer: "While you can checkout as a guest, we recommend creating an account to easily access your purchases, download history, and receive updates."
  },
  {
    question: "Are there any usage restrictions on the digital products?",
    answer: "Most products come with commercial usage rights, but specific licensing terms vary by product. Check the product description for detailed licensing information."
  },
  {
    question: "How long do I have access to my downloads?",
    answer: "You have lifetime access to your purchased products. You can re-download them anytime from your account dashboard."
  },
  {
    question: "What if I have technical issues with a product?",
    answer: "Contact our support team with details about the issue. We'll work with you to resolve any technical problems or provide assistance with product usage."
  }
]

const toggleFaq = (index) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

useHead({
  title: 'Help Center - DigitalStore',
  meta: [
    { name: 'description', content: 'Find answers to common questions about DigitalStore, including orders, downloads, payments, and account management.' }
  ]
})
</script>
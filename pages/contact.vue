<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="text-lg text-gray-600">Get in touch with our team - we're here to help</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
              </div>
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="refund">Refund Request</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Please describe your question or issue in detail..."
              ></textarea>
            </div>
            
            <button type="submit" class="w-full btn-primary text-lg py-4">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Details -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <EnvelopeIcon class="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p class="text-gray-600">support@digitalstore.com</p>
                  <p class="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <ChatBubbleLeftRightIcon class="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Live Chat</h3>
                  <p class="text-gray-600">Available 24/7</p>
                  <p class="text-sm text-gray-500">Click the chat icon in the bottom right</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <ClockIcon class="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Response Time</h3>
                  <p class="text-gray-600">Within 24 hours</p>
                  <p class="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ Link -->
          <div class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
            <h3 class="text-xl font-bold mb-4">Need Quick Answers?</h3>
            <p class="text-primary-100 mb-6">Check out our Help Center for instant answers to common questions</p>
            <NuxtLink to="/help" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Visit Help Center
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EnvelopeIcon, ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/vue/24/outline'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Here you would typically send the form data to your backend
  alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  }
}

useHead({
  title: 'Contact Us - DigitalStore',
  meta: [
    { name: 'description', content: 'Get in touch with DigitalStore support team. We\'re here to help with any questions about our digital products and services.' }
  ]
})
</script>
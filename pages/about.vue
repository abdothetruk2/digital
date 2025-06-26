<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About DigitalStore</h1>
        <p class="text-xl text-primary-100">
          Empowering creators and professionals with premium digital products since 2020
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Our Story -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div class="prose prose-lg text-gray-600">
          <p class="mb-6">
            DigitalStore was founded with a simple mission: to provide creators, entrepreneurs, and professionals 
            with access to high-quality digital products that help them succeed in their endeavors. We believe 
            that great tools and resources should be accessible to everyone, regardless of their budget or location.
          </p>
          <p class="mb-6">
            What started as a small collection of design templates has grown into a comprehensive marketplace 
            featuring courses, software, ebooks, presets, and more. Every product in our store is carefully 
            curated and tested to ensure it meets our high standards for quality and value.
          </p>
        </div>
      </section>

      <!-- Our Mission -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <p class="text-lg text-gray-600 leading-relaxed">
            To democratize access to premium digital resources and empower creators worldwide to bring their 
            ideas to life. We're committed to fostering a community where knowledge, creativity, and innovation 
            can flourish through the power of digital products.
          </p>
        </div>
      </section>

      <!-- Values -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-primary-600 font-bold text-xl">Q</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
            <p class="text-gray-600">Every product is carefully reviewed and tested to ensure it meets our high standards.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-secondary-600 font-bold text-xl">A</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Accessibility</h3>
            <p class="text-gray-600">Making premium digital resources affordable and accessible to creators worldwide.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-accent-600 font-bold text-xl">S</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Support</h3>
            <p class="text-gray-600">Providing exceptional customer service and support to help you succeed.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span class="text-primary-600 font-bold text-xl">I</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600">Continuously evolving our platform to serve our community better.</p>
          </div>
        </div>
      </section>

      <!-- Team -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-2xl">JS</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
            <p class="text-gray-600 mb-2">Founder & CEO</p>
            <p class="text-sm text-gray-500">Passionate about empowering creators with digital tools</p>
          </div>
          
          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-2xl">SD</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Davis</h3>
            <p class="text-gray-600 mb-2">Head of Product</p>
            <p class="text-sm text-gray-500">Ensuring every product meets our quality standards</p>
          </div>
          
          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-2xl">MJ</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
            <p class="text-gray-600 mb-2">Customer Success</p>
            <p class="text-sm text-gray-500">Dedicated to providing exceptional customer support</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center">
        <div class="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
          <h2 class="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p class="text-primary-100 mb-6">Join thousands of creators who trust DigitalStore for their digital needs</p>
          <NuxtLink to="/products" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Browse Products
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - DigitalStore',
  meta: [
    { name: 'description', content: 'Learn about DigitalStore, our mission to empower creators with premium digital products, and the team behind our success.' }
  ]
})
</script>
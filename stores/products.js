import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        title: "Complete Web Development Course",
        description: "Master modern web development with this comprehensive course covering HTML, CSS, JavaScript, and frameworks.",
        price: 89.99,
        category: "Course",
        rating: 5,
        reviews: 324,
        downloads: 1250,
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg"
      },
      {
        id: 2,
        title: "Premium UI/UX Design Templates",
        description: "50+ professional design templates for web and mobile applications with Sketch and Figma files included.",
        price: 49.99,
        category: "Template",
        rating: 4,
        reviews: 186,
        downloads: 892,
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
      },
      {
        id: 3,
        title: "Digital Marketing eBook Bundle",
        description: "Complete guide to digital marketing strategies, SEO, social media marketing, and content creation.",
        price: 29.99,
        category: "eBook",
        rating: 5,
        reviews: 451,
        downloads: 2100,
        image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg"
      },
      {
        id: 4,
        title: "React Component Library",
        description: "Production-ready React components with TypeScript support and comprehensive documentation.",
        price: 79.99,
        category: "Software",
        rating: 4,
        reviews: 95,
        downloads: 312,
        image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
      },
      {
        id: 5,
        title: "Photography Lightroom Presets",
        description: "Professional Lightroom presets for portrait, landscape, and street photography enhancement.",
        price: 19.99,
        category: "Preset",
        rating: 5,
        reviews: 278,
        downloads: 1890,
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
      },
      {
        id: 6,
        title: "Business Plan Template Pack",
        description: "Comprehensive business plan templates for startups, investors, and entrepreneurs.",
        price: 39.99,
        category: "Template",
        rating: 4,
        reviews: 156,
        downloads: 634,
        image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg"
      }
    ],
    categories: [
      { name: 'Course', count: 45 },
      { name: 'Template', count: 128 },
      { name: 'eBook', count: 67 },
      { name: 'Software', count: 23 },
      { name: 'Preset', count: 89 },
      { name: 'Audio', count: 34 }
    ]
  }),

  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === parseInt(id))
    },
    
    getProductsByCategory: (state) => (category) => {
      return state.products.filter(product => product.category === category)
    },
    
    getFeaturedProducts: (state) => {
      return state.products.filter(product => product.rating >= 4).slice(0, 3)
    }
  }
})
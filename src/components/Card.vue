<template>
  <div class="w-full min-h-screen bg-[#f7f7f7] px-4 md:px-8 lg:px-16 py-12">

    <!-- Header -->
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-4xl font-bold text-black">
          New Arrivals
        </h1>

        <p class="text-gray-500 mt-2 text-sm">
          Discover trendy fashion & lifestyle products
        </p>
      </div>

      <button
        class="hidden md:block px-6 py-3 border border-black
               rounded-full hover:bg-black hover:text-white
               transition duration-300"
      >
        View All
      </button>
    </div>

    <!-- Product Slider -->
    <div
      class="flex gap-5 overflow-x-auto scroll-smooth
             scrollbar-hide transition  pb-4"
    >

      <!-- Card -->
      <div
        v-for="item in products"
        :key="item.id"
        class="min-w-[240px]
               bg-white rounded-[20px]
               overflow-hidden flex-shrink-0
               hover:-translate-y-1 hover:shadow-xl
               transition-all duration-300 group"
      >

        <!-- Image -->
        <div
          class="relative h-[420px]
                 overflow-hidden bg-gray-100"
        >
          <router-link :to="`/detail/${item.id}`">
          <img
            :src="item.image[0]"
            :alt="item.type"
            class="w-full h-full object-cover
                   group-hover:scale-105 duration-500"/>
          </router-link>
          <!-- NEW Badge -->
          <div v-if="item.isNewIn"
            class="absolute top-3 left-3
                   bg-black text-white
                   text-[10px]
                   px-2 py-1 rounded-full"
          >
            NEW
          </div>

          <!-- Discount -->
          <div
            v-if="item.discount > 0"
            class="absolute top-3 right-3
                   bg-red-500 text-white
                   text-[10px]
                   px-2 py-1 rounded-full"
          >
            -{{ item.discount }}%
          </div>

        </div>

        <!-- Content -->
        <div class="p-2">

          <!-- Category -->
          <p
            class="text-[11px]
                   uppercase tracking-[2px]
                   text-gray-400"
          >
            {{ item.category_for }}
          </p>

          <!-- Product Type -->
          <h2
            class="text-[17px]
                   font-medium text-gray-900
                   mt-1 line-clamp-1"
          >
            {{ item.type }}
          </h2>

         
          <!-- Bottom -->
          <div
            class="flex items-center justify-between
                   mt-4"
          >

            <span
              class="text-[18px]
                     font-bold text-black"
            >
              ${{ item.price }}
            </span>

            <button
              class="px-4 py-2 text-sm
                     rounded-full
                     border border-black
                     hover:bg-black hover:text-white
                     transition duration-300"
            >
              Add
            </button>

          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const products = [
  {
    id: 1,
    category_for: "Men",
    type: "Regular T-Shirt",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/3122602016/PTAK0051.jpg"
    ],
    price: 20,
    discount: 10,
    
  },

  {
    id: 2,
    category_for: "Men",
    type: "T-Shirts",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-05/4122601572/10S26SHS014_Chocolate%20(1)-cr-450x672.jpg"
    ],
    price: 12,
    discount: 20,
   
  },

  {
    id: 3,
    category_for: "Men",
    type: "Stripe Long Sleeves Shirt",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-05/11226021722/STU_6863-cr-450x672.jpg"
    ],
    price: 22,
    discount: 30,
   
  },
    {
    id: 4,
    category_for: "Women",
    type: "Maxi Dress",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-05/3222602699/AV8A9954-cr-450x672.jpg"
    ],
    price: 22,
    discount:40,
  
  },
    {
    id: 5,
    category_for: "Men",
    type: "Loose Fitted Shirt",
    isNewIn: false,
    image: ["https://zandokh.com/image/catalog/products/2026-05/11226041927/AV8A0045.jpg"
    ],
    price: 22,
    discount: 20,
  
  },
    {
    id: 6,
    category_for: "Men",
    type: "Regular Polo Shirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/3112602042/AV8A0040.jpg"
    ],
    price: 22,
    discount: 10,
    
  },
    {
    id: 7,
    category_for: "Women",
    type: "Knitted Polo Shirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/3222602694/STU_9112.jpg"
    ],
    price: 22,
    discount: 10,
   
  },
    {
    id: 8,
    category_for: "Women",
    type: "Stripe Polo Shirt With Zip",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/12225122548/STU_7058.jpg"
    ],
    price: 22,
    discount: 30,
   
  },
    {
    id: 9,
    category_for: "Men",
    type: "Vintage Wash T-Shirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/21225091542/AV8A9996.jpg"
    ],
    price: 22,
    discount: 20,
  
  },
    {
    id: 10,
    category_for: "Women",
    type: "Knitted Polo Shirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-02/22225121900/PTAK6251.jpg"
    ],
    price: 22,
    discount:10,
  
  },
    {
    id: 11,
    category_for: "Men",
    type: "Relaxed Fitted Shirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/4122605537/10S26SHS027%20-%20Rainy%20Day%20(4).jpg"
    ],
    price: 22,
    discount: 10,
    
  },
    {
    id: 12,
    category_for: "Women",
    type: "Half-Zip Striped Knit Polo Sweater",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2026-03/6222602022/507576_4.jpg"
    ],
    price: 22,
    discount: 20,
   
  }
]
</script>



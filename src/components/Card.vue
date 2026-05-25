<template>
  <div class="w-full min-h-screen bg-[#f7f7f7] px-4 md:px-8 lg:px-16 py-12">
    <!-- Header -->
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-4xl font-bold text-black">
          🔥 New Arrivals 🔥
        </h1>

      
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

      <!-- Card   -->
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
        <div id="my-card" class="relative h-[420px] overflow-hidden bg-gray-100 cursor-pointer" >
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
  <div class="w-full min-h-screen bg-[#f7f7f7] px-4 md:px-8 lg:px-16 py-12">

   

    <!-- Product Slider -->
    <div
      class="flex gap-5   flex-wrap justify-content-center
              pb-4"
    >

      <!-- Card   -->
      <div
        v-for="item in carporduct"
        :key="item.id"
        class="min-w-[240px]
               bg-white 
               overflow-hidden flex-shrink-0
               
               transition-all duration-300 group"
      >

        <!-- Image -->
        <div
          class="relative h-[520px]
                 overflow-hidden bg-gray-100"
        >
          
          <img
            :src="item.image[0]"
            :alt="item.type"
            class="w-full h-full object-cover
             cursor-pointer     "/>
          
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
        

         
       
      </div>
      

    </div>
  </div>
  <div class="w-full min-h-screen bg-[#f7f7f7] px-4 md:px-8 lg:px-16 py-12">
    <!-- Header -->
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-4xl font-bold text-black">
          ⚡All Under $9.99 🛒
        </h1>

       
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

      <!-- Card   -->
      <div
        v-for="item in productWoman"
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
              class="text-[18px]  text-secondary
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

  
    
  <div class="w-full min-h-screen bg-[#f7f7f7] px-4 md:px-8 lg:px-16 py-12">
    <!-- Header -->
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-4xl font-bold text-black">
          Footwear Savings, Every Day Vibes 👟
        </h1>

       
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

      <!-- Card   -->
      <div
        v-for="item in productshop"
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
              class="text-[18px]  text-secondary
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
import { carporduct, products ,productWoman,productshop, } from '../data/products';
const router = useRouter();

</script>

  

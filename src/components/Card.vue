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
       
          <img
            :src="item.image[0]"
            :alt="item.type"
            class="w-full h-full object-cover
                   group-hover:scale-105 duration-500"/>
       
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
       
          <img
            :src="item.image[0]"
            :alt="item.type"
            class="w-full h-full object-cover
                   group-hover:scale-105 duration-500"/>
       
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
  <!-- footer -->
<footer class="w-full bg-[#f5f5f5] py-8 px-4 md:px-10">

  <!-- Top -->
  <div
    class="grid grid-cols-2 md:grid-cols-5 gap-6 text-[12px] md:text-[13px] text-black"
  >

    <!-- Logo -->
    <div class="flex flex-col items-center md:items-start">
      <h3 class="font-bold text-base md:text-lg mb-2">FUSE APP</h3>

      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=fuse"
        class="w-[70px] md:w-[90px]"
      />
    </div>

    <!-- Loyalty -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">LOYALTY</h3>

      <div class="space-y-1">
        <p>♡ Membership & Benefits</p>
      </div>
    </div>

    <!-- Follow -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">FOLLOW US</h3>

      <div class="space-y-1">
        <h6><i class="bi bi-facebook"></i> Facebook</h6>
        <h6><i class="bi bi-instagram"></i> Instagram</h6>
        <h6><i class="bi bi-tiktok"></i> TikTok</h6>
        <h6><i class="bi bi-youtube"></i> Youtube</h6>
      </div>
    </div>

    <!-- Customer -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">
        CUSTOMER SERVICES
      </h3>

      <div class="space-y-1">
        <h6>❓ FAQs & guides</h6>
        <h6>📍 Find a store</h6>
        <h6>🛡 Privacy Policy</h6>
      </div>
    </div>

    <!-- Contact -->
    <div>
      <h3 class="font-bold text-base md:text-lg mb-2">CONTACT US</h3>

      <div class="space-y-1">
        <h6 class="break-all">📧 customer.care@fusekh.com</h6>
        <h6>📞 (+855) 085 330 330</h6>
        <h6>✈ Telegram</h6>
      </div>
    </div>
  </div>

  <!-- Payment -->
  <div class="mt-8">
    <h4 class="font-bold text-sm md:text-base mb-3">
      WE ACCEPT
    </h4>

    <div class="flex flex-wrap gap-2">
      <img
        src="../assets/image.png"
        class="w-[45px] h-[28px] object-contain bg-white p-1 rounded"
      />

      <img
        src="https://i.pinimg.com/736x/15/53/de/1553de5b3e7ae7457fea9154a3f0f1c5.jpg"
        class="w-[45px] h-[28px] object-contain bg-white p-1 rounded"
      />

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        class="w-[45px] h-[28px] object-contain bg-white p-1 rounded"
      />
    </div>
  </div>

  <!-- Bottom -->
  <hr class="mt-8 border-gray-300">

</footer>

  
  
  
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const carporduct = [
  {
    id:1,
    image :[
      " https://zandokh.com/image/catalog/ZANDO%202026/kkkk/12-1.jpg"
    ]
  
  },
   {
    id:2,
    image :[
      " https://zandokh.com/image/catalog/ZANDO%202026/kkkk/13.jpg"
    ]
  
  },
   {
    id:3,
    image :[
      " https://zandokh.com/image/catalog/ZANDO%202026/kkkk/14.jpg"
    ]
  
  },
   {
    id:4,
    image :[
      " https://zandokh.com/image/catalog/ZANDO%202026/kkkk/10.jpg"
    ]
  
  },
  {
    id:5,
    image :[
      " https://zandokh.com/image/catalog/ZANDO%202026/kkkk/15.jpg"
    ]
  
  },
  {
    id:6,
    image :[
      " https://zandokh.com/image/catalog/ZANDO%202026/kkkk/17.jpg"
    ]
  
  }
  

]
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
const productWoman = [
  {
    id: 1,
    category_for: "Women",
    type: "Cropped Polo Shirt",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2025-04/22225031262/ZANDO0804202512265-cr-450x672.jpg"
    ],
    price: 5.55,
    discount: 10,
    
  },

  {
    id: 2,
    category_for: "Men",
    type: "Slim Fit T-Shirt",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-03/2112602842/STU_8054-cr-450x672.jpg"
    ],
    price: 5.55,
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
    price: 8.99,
    discount: 30,
   
  },
    {
    id: 4,
    category_for: "Women",
    type: "Mini Skirt",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-03/22225121862/PTAK4902-cr-450x672.jpg"
    ],
    price: 6.77,
    discount:40,
  
  },
    {
    id: 5,
    category_for: "Men",
    type: "Cargo Short ",
    isNewIn: false,
    image: ["https://zandokh.com/image/cache/catalog/products/2025-07/11225051092/ZD__9403-cr-450x672.jpg"
    ],
    price:8.33,
    discount: 20,
  
  },
    {
    id: 6,
    category_for: "Women",
    type: "Midi Skirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2025-08/22225061640/ZANDO14.08.20256792.jpg"
    ],
    price:7.77,
    discount: 10,
    
  },
   {
    id: 7,
    category_for: "Women",
    type: "Mini Pleats Skirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2025-07/22225011184/AFTERNOON28.06.20250067-cr-450x672.jpg"
    ],
    price:7.77,
    discount: 10,
    
  },
   {
    id: 8,
    category_for: "Women",
    type: "Midi Skirt",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2025-06/22225031249/ZANDO04.06.20252462-cr-450x672.jpg"
    ],
    price:6.57,
    discount: 10,
    
  },
   {
    id: 9,
    category_for: "Women",
    type: "Mini Skirts",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/catalog/products/2025-07/22225041411/ZANDO130620255340.jpg"
    ],
    price:8.77,
    discount: 10,
    
  },
    
    
    
    
   
]
 const productshop =[
       {
    id: 1,
    
    type: " Running Sneakers",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/5162511003/PTAK0028.jpg"
    ],
    price: 5.55,
    discount: 10,
    
  },

  {
    id: 2,
   
    type: "Lifestyle Sneakers",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-05/5152511005/PTAK0033-cr-450x672.jpg"
    ],
    price: 50.55,
    discount: 20,
   
  },

  {
    id: 3,
    
    type: "Skateboarding Sneakers",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-05/5152508085/STU_1102-cr-450x672.jpg"
    ],
    price: 79.99,
    discount: 30,
   
  },
    {
    id: 4,
   
    type: "Lifestyle Sneakers",
    isNewIn: true,
    image: [
      "https://zandokh.com/image/catalog/products/2026-05/5152511014/STU_1067.jpg"
    ],
    price: 60.77,
    discount:40,
  
  },
    {
    id: 5,
  
    type: "Running Sneakers ",
    isNewIn: false,
    image: ["https://zandokh.com/image/catalog/products/2026-05/5162511006/PTAK0038.jpg"
    ],
    price:80.33,
    discount: 20,
  
  },
    {
    id: 6,
   
    type: "Athletic sneakers",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-01/5252602066/5252602067/5252602069/8J6A5670-cr-450x672.jpg"
    ],
    price:177.77,
    discount: 10,
    
  },
   {
    id: 7,
   
    type: "Lifestyle Sneakers",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-03/5152602123z%20%20replace/PTAK8089-cr-450x672.jpg"
    ],
    price:120,
    discount: 10,
    
  },
   {
    id: 8,
   
    type: "Running Shoes",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2026-03/5262603004/PTAK8068-cr-450x672.jpg"
    ],
    price:122.57,
    discount: 10,
    
  },
   {
    id: 9,
   
    type: " Basketball Sneakers",
    isNewIn: false,
    image: [
      "https://zandokh.com/image/cache/catalog/products/2025-12/5142512012/VSAL4226-cr-450x672.jpg"
    ],
    price:199.99,
    discount: 10,
    
  },
    
 ]
</script>

  

<template>
  <header class="w-full flex justify-between px-2 bg-gray-400 md:px-8 lg:px-24 py-7">
    <!-- Menu -->
    <ul class="hidden lg:flex items-center    ">
      <li v-for="item in menu"  :key="item.name" class="px-3 py-2 rounded-xl hover:bg-blue-400 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out ">
         <a  class="font-medium font-bold text-2xl"  :href="item.link"> {{ item.name }} </a>
      </li>
    </ul>
    <!-- Logo -->
     <div class="flex gap-1">
         <button class="lg:hidden block bg-secondary "><i class="bi bi-list text-2xl"></i></button>
         <a href="" class="text-2xl md:text-2xl text-center lg:text-4xl font-serif text-black">PANSAP. </a>
     </div>
    <!-- Search -->
    <div class="hidden lg:flex items-center border rounded-md px-4 py-2 md:my-0  w-[220px]">
      <i class="bi bi-search text-gray-500 mr-3"></i>
      <input
        type="search"
        placeholder="Search"
        class="outline-none w-full text-sm"/>
    </div>
    <!-- Buttons -->
    <div class="flex gap-5  md:gap-10 md:my-0">
        <div class="flex items-center gap-4  md:gap-8 text-xl md:text-2xl">
        <i class="bi bi-search cursor-pointer hover:text-gray-500"></i>
        <i class="bi bi-bell cursor-pointer hover:text-gray-500"></i>
        <i class="bi bi-heart cursor-pointer hover:text-gray-500"></i>
        <i class="bi bi-bag cursor-pointer hover:text-gray-500"></i>
        <i class="bi bi-person cursor-pointer hover:text-gray-500"></i>
      </div>
      <button class="bg-black hidden  lg:block text-white  px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
        Login
      </button>
      <button class="bg-black hidden  lg:block   text-white px-4 py-2  rounded-lg hover:bg-blue-600 transition-colors">
        Register
      </button>
    </div>
  </header>
</template>
<script setup>
const menu = [
  { link: "/home", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/service", name: "Service" },
  { link: "/contact", name: "Contact" }
]
</script>
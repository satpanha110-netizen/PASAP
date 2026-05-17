<template>
    <header class="w-full flex justify-between px-2 bg-gray-400 md:px-8 lg:px-24 py-7 ">
         <button class="lg:hidden block bg-secondary p-5"><i class="bi bi-list"></i></button>
        <ul class=" hidden lg:flex  items-center">
            <li v-for="item in menu" :key="item.name" class="px-3 py-2  rounded-xl hover:bg-blue-400 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" >
                <a class=" text-blfont-medium font-bold text-2xl" href="item.link">{{item.name}}</a>
            </li>
        </ul>
        <a href="" class="text-2xl md:text-3xl  lg:text-4xl font-serif text-black">PANSAP.</a>
        <div class="hidden lg:block ">
            <input type="search" placeholder="Search" class="px-4 py-2 rounded-lg focus:outline-none​ border border-black-300  ">
        </div>
        <!-- icon -->
         <div class="flex gap-4 ">
        <button class=" bg-black text-white px-4  py-2  rounded-lg hover:bg-blue-600 transition-colors ">Login</button>
        <button class=" bg-black text-white px-4  py-2   rounded-lg hover:bg-blue-600 transition-colors ">Register</button>
         
         </div>
        
       
    </header>
  
</template>

<script setup>
  const menu =[
    {link:"/home",name:"Home"},
     {link:"/about",name:"About"},
      {link:"/Service",name:"Service"},
       {link:"/Contact",name:"Contact"}
  ]
</script>

<style>

</style>
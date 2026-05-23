<template>
  <header
    class="w-full flex items-center justify-between
    px-4 md:px-8 lg:px-8
    py-4 bg-gray-100 shadow-sm position-sticky z-50 top-1"
  >

    <!-- LEFT MENU -->
    <ul class="​ hidden lg:flex    items-center gap-6 m-0 p-0">
      <li
        v-for="item in menu"
        :key="item.name"
        class=" list-none  transition"
      >
        <a class="text-black  no-underline nav-link "  :href="item.link">
          {{ item.name }}
        </a>
      </li>
    </ul>

    <!-- LOGO + MOBILE MENU -->
    <div class="flex items-center gap-2">

      <!-- Mobile Button -->
      <button
        class="lg:hidden block"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
      >
        <i class="bi bi-list text-2xl"></i>
      </button>

      <!-- Offcanvas -->
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
      >

        <div class="offcanvas-header">

          <h5 class="offcanvas-title fw-bold">
            PANSAP.
          </h5>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>

        </div>

        <div class="offcanvas-body">

          <ul class="flex flex-col gap-4 p-0">

            <li
              v-for="item in menu"
              :key="item.name"
              class="list-none"
            >
              <a
                class="text-black no-underline text-lg nav-link transition"
                :href="item.link"
              >
                {{ item.name }}
              </a>
            </li>

          </ul>

        </div>

      </div>

      <!-- Logo -->
     <div class="flex justify-center items-center h-[50px] overflow-hidden">
  <img
    src="../assets/logo.png"
    alt="logo"
    class="w-[80px] h-[80px] object-contain
           scale-150
           
           transition duration-300"
  >
</div>
      

    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-3 lg:gap-5">

      <!-- Search Desktop -->
      <div class="hidden lg:flex items-center border rounded-full px-3 py-2 bg-white w-[220px]">
        <button class="hidden lg:flex items-center
             rounded-full px-3 
             bg-white w-[220px]"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
           <i class="bi bi-search text-gray-500"></i>
           <input
          type="search"
          placeholder="Search"
          class="outline-none px-2 text-sm w-full bg-transparent"/>
        </button>

        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
         <div class="offcanvas-body">
           ...
         </div>
        </div>
       

      </div>

      <!-- Icons -->
      <div class="flex items-center gap-3 md:gap-5 text-xl md:text-2xl">

        <i class="bi bi-search lg:hidden cursor-pointer"></i>

        <i class="bi bi-bell cursor-pointer hover:text-blue-600 transition"></i>

        <i class="bi bi-heart cursor-pointer hover:text-blue-600 transition"></i>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <i class="bi bi-bag cursor-pointer hover:text-blue-600 transition"></i></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

       

        <i class="bi bi-person lg:hidden cursor-pointer hover:text-blue-600 transition"></i>

      </div>

      <!-- Buttons -->
      <div class="hidden lg:flex items-center gap-3">

        <button
          class="border border-black
          px-4 py-2 rounded-full
          hover:bg-black hover:text-white transition"
        >
          Login
        </button>

        <button
          class="bg-black text-white
          px-4 py-2 rounded-full
          hover:bg-blue-600 transition"
        >
          Register
        </button>

      </div>

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
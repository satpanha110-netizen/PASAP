<template>
  <header
    class="w-full flex items-center justify-between
    px-4 md:px-8 lg:px-8
    py-4 bg-white shadow-sm sticky top-0 z-50"
  >

    <!-- LEFT MENU -->
    <ul class="hidden lg:flex items-center gap-6 m-0 p-0">

      <li
        v-for="(item, index) in menu"
        :key="item.id"
        class="list-none position-static p-2"
        @mouseenter="activeMenu = index"
        @mouseleave="activeMenu = null"
      >

        <router-link
          class="text-black no-underline nav-link fw-semibold"
          :to="{
            path: '/menu',
            query: {
              gender: item.name
            }
          }"
        >
          {{ item.name }}
        </router-link>

        <!-- MEGA MENU -->
        <div
          v-if="activeMenu === index && item.dropdown"
          class="mega-menu position-absolute start-0 w-100 bg-white shadow-lg p-5"
        >

          <div class="container-fluid">

            <div class="row">

              <div
                v-for="(section, i) in item.dropdown"
                :key="i"
                class="col-lg-2"
              >

                <h5
                  class="fw-bold mb-4"
                  :class="section.title === 'SALE'
                    ? 'text-danger'
                    : ''"
                >
                  {{ section.title }}
                </h5>

                <ul class="list-unstyled">

                  <li
                    v-for="(sub, j) in section.item"
                    :key="j"
                    class="mb-2"
                  >

                    <router-link
                      class="list-none text-decoration-none"
                      :to="{
                        path: '/menu',
                        query: {
                          gender: item.name,
                          section: section.title,
                          category: sub
                        }
                      }"
                    >

                      <span
                        class="text-dark menu-item"
                        :class="section.title === 'SALE'
                          ? 'text-danger'
                          : ''"
                      >
                        {{ sub }}
                      </span>

                    </router-link>

                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </li>

    </ul>

    <!-- LOGO + MOBILE -->
    <div class="flex items-center gap-2">

      <!-- MOBILE BUTTON -->
      <button
        class="lg:hidden block border-0 bg-transparent"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
      >
        <i class="bi bi-list text-2xl"></i>
      </button>

      <!-- MOBILE MENU -->
      <div
        class="offcanvas offcanvas-start w-75"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        ref="offcanvasRef"
      >

        <!-- HEADER -->
        <div class="offcanvas-header">

          <h5 class="offcanvas-title fw-bold">
              <div
        class="flex justify-center items-center
        h-[50px] overflow-hidden"
      >

        <router-link to="/">

          <img
            src="../assets/logo.png"
            alt="logo"
            class="w-[80px] h-[80px] object-contain scale-150"
          >

        </router-link>

      </div>
          </h5>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>

        </div>

        <!-- BODY -->
        <div class="offcanvas-body">

          <ul class="flex flex-col gap-3 p-0 m-0">

            <li
              v-for="men in menu"
              :key="men.id"
              class="list-none border rounded-4 overflow-hidden bg-white shadow-sm"
            >

              <details class="group">

                <!-- HEADER -->
                <summary
                  class="list-none px-4 py-3 d-flex align-items-center justify-content-between cursor-pointer"
                >

                  <div class="d-flex align-items-center gap-3">

                    <div
                      class="rounded-circle bg-black text-white d-flex align-items-center justify-content-center fw-bold"
                      style="width:40px; height:40px;"
                    >
                      {{ men.name.charAt(0) }}
                    </div>

                    <div>

                      <h6 class="m-0 fw-bold">
                        {{ men.name }}
                      </h6>

                      <small class="text-secondary">
                        {{ men.dropdown.length }} collections
                      </small>

                    </div>

                  </div>

                  <i class="bi bi-chevron-down"></i>

                </summary>

                <!-- CONTENT -->
                <div class="px-4 pb-4">

                  <div
                    v-for="(section, index) in men.dropdown"
                    :key="index"
                    class="mb-4"
                  >

                    <h6
                      class="fw-bold mb-3"
                      :class="
                        section.title === 'SALE'
                          ? 'text-danger'
                          : 'text-dark'
                      "
                    >
                      {{ section.title }}
                    </h6>

                    <ul class="list-unstyled m-0">

                      <li
                        v-for="(sub, i) in section.item"
                        :key="i"
                        class="mb-2"
                      >

                        <router-link
                          class="text-decoration-none text-secondary mobile-link"
                          :to="{
                            path: '/menu',
                            query: {
                              gender: men.name,
                              section: section.title,
                              category: sub
                            }
                          }"
                          @click="goMenu"
                        >
                          {{ sub }}
                        </router-link>

                      </li>

                    </ul>

                  </div>

                </div>

              </details>

            </li>

          </ul>

        </div>

      </div>

      <!-- LOGO -->
      <div
        class="flex justify-center items-center
        h-[50px] overflow-hidden"
      >

        <router-link to="/">

          <img
            src="../assets/logo.png"
            alt="logo"
            class="w-[80px] h-[80px] object-contain scale-150"
          >

        </router-link>

      </div>

    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-3 lg:gap-5">

      <!-- SEARCH -->
      <div
        class="hidden lg:flex items-center
        border rounded-full px-3 py-2
        bg-white w-[220px]"
      >

        <i class="bi bi-search text-gray-500"></i>

        <input
          type="search"
          placeholder="Search"
          class="outline-none px-2 text-sm
          w-full bg-transparent border-0"
        >

      </div>

      <!-- ICONS -->
      <div class="flex items-center gap-3 md:gap-5 text-xl md:text-2xl">

        <i class="bi bi-search lg:hidden cursor-pointer"></i>

        <i
          class="bi bi-bell cursor-pointer
          hover:text-blue-600 transition"
        ></i>

        <i
          class="bi bi-heart cursor-pointer
          hover:text-blue-600 transition"
        ></i>

        <!-- CART BUTTON -->
        <button
          class="border-0 bg-transparent p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
        >

          <i
            class="bi bi-bag cursor-pointer
            hover:text-blue-600 transition"
          ></i>

        </button>

        <!-- CART -->
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
        >

          <div class="offcanvas-header">

            <h5 class="offcanvas-title">
              Shopping Cart
            </h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>

          </div>

          <div class="offcanvas-body">
            Your cart is empty.
          </div>

        </div>

        <i
          class="bi bi-person lg:hidden cursor-pointer
          hover:text-blue-600 transition"
        ></i>

      </div>

      <!-- BUTTON -->
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
          hover:bg-blue-600 transition border-0"
        >
          Register
        </button>

      </div>

    </div>

  </header>
</template>

<script setup>
import { ref } from "vue"
import { menu } from "../data/menu_drown"
import { Offcanvas } from "bootstrap"

const activeMenu = ref(null)
const offcanvasRef = ref(null)

const goMenu = () => {
  const offcanvas =
    Offcanvas.getOrCreateInstance(
      offcanvasRef.value
    )

  if (offcanvas) {
    offcanvas.hide()
  }
}
</script>

<style scoped>
.nav-link {
  font-size: 17px;
  transition: 0.3s;
}

.nav-link:hover {
  color: #2563eb;
}

.mega-menu {
  top: 65px;
  left: 0;
  z-index: 999;
  min-height: 350px;
}

.menu-item {
  transition: 0.3s;
}

.menu-item:hover {
  color: red !important;
  padding-left: 5px;
}

.mobile-link {
  transition: 0.3s;
}

.mobile-link:hover {
  color: #2563eb !important;
  padding-left: 5px;
}

summary::-webkit-details-marker {
  display: none;
}

details[open] .bi-chevron-down {
  transform: rotate(180deg);
}

.bi-chevron-down {
  transition: 0.3s;
}
</style>
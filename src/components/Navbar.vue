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
                      class="rounded-circle bg-black text-white
                      d-flex align-items-center justify-content-center fw-bold"
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

          <!-- MOBILE AUTH -->
          <div class="mt-4 d-flex flex-column gap-3">

            <button
              class="mobile-auth-btn login-mobile-btn"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>

            <button
              class="mobile-auth-btn register-mobile-btn"
              data-bs-toggle="modal"
              data-bs-target="#registerModal"
            >
              Register
            </button>

          </div>

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
        border px-3 py-2
        bg-white w-[220px]"
      >

        <i class="bi bi-search text-gray-500"></i>

        <input
        v-model="search"
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
         <button
  class="desktop-register-btn"
  data-bs-toggle="modal"
  data-bs-target="#loginModal"
  @click="activeTab = 'register'"
>
  <i class="bi bi-person lg:hidden cursor-pointer hover:text-blue-600 transition"> </i>
</button>
        

      </div>

      <!-- DESKTOP BUTTON -->
      <div class="hidden lg:flex items-center gap-3">

        <button
          class="desktop-login-btn"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Login
        </button>

       <button
  class="desktop-register-btn"
  data-bs-toggle="modal"
  data-bs-target="#loginModal"
  @click="activeTab = 'register'"
>
  Register
</button>

      </div>

    </div>

  </header>

  <!-- LOGIN MODAL -->
 <!-- AUTH MODAL -->
  <!-- AUTH MODAL -->
<div class="modal fade" id="loginModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">

    <div class="modal-content zando-modal border-0">

      <!-- CLOSE -->
      <button
        type="button"
        class="btn-close zando-close"
        data-bs-dismiss="modal"
      ></button>

      <div class="p-4 p-md-5">

        <!-- TABS -->
        <div class="d-flex gap-4 auth-tabs">

          <button
            class="auth-tab"
            :class="{ active: activeTab === 'login' }"
            @click="activeTab = 'login'"
          >
            LOGIN
          </button>

          <button
            class="auth-tab"
            :class="{ active: activeTab === 'register' }"
            @click="activeTab = 'register'"
          >
            REGISTER
          </button>

        </div>

        <!-- LOGIN FORM -->
        <div v-if="activeTab === 'login'" class="mt-5">

          <div class="mb-4">
            <label class="auth-label">Mobile number</label>
            <input class="zando-input" placeholder="Enter phone number" />
          </div>

          <div class="mb-4 position-relative">
            <label class="auth-label">Password</label>

            <input
              :type="showPassword ? 'text' : 'password'"
              class="zando-input pe-5"
              placeholder="Enter password"
            />

            <i
              class="bi eye-icon"
              :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
              @click="showPassword = !showPassword"
            ></i>
          </div>

          <button class="zando-btn">LOGIN</button>

          <div class="text-center mt-3">
            <a class="forgot-link">Forgot your password?</a>
          </div>

          <div class="text-center my-4 or-text">OR</div>

          <button class="social-login-btn">
            <i class="bi bi-google"></i> Continue with Google
          </button>

          <button class="social-login-btn mt-3">
            <i class="bi bi-facebook text-primary"></i> Continue with Facebook
          </button>

        </div>

        <!-- REGISTER FORM -->
        <div v-else class="mt-2">

          <div class="mb-3">
            <label class="auth-label">Full name</label>
            <input class="zando-input" placeholder="Enter full name" />
          </div>

          <div class="mb-3">
            <label class="auth-label">Mobile number</label>
            <input class="zando-input" placeholder="Enter phone number" />
          </div>

          <div class="mb-3">
            <label class="auth-label">Email</label>
            <input class="zando-input" placeholder="Enter email" />
          </div>

          <div class="mb-4 position-relative">
            <label class="auth-label">Password</label>

            <input
              :type="showPassword ? 'text' : 'password'"
              class="zando-input pe-5"
              placeholder="Create password"
            />

            <i
              class="bi eye-icon"
              :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"
              @click="showPassword = !showPassword"
            ></i>
          </div>

          <button class="zando-btn mt-2">CREATE ACCOUNT</button>
          <div class="text-center my-4 or-text">OR</div>

          <button class="social-login-btn mt-2">
            <i class="bi bi-google"></i> Continue with Google
          </button>

          <button class="social-login-btn mt-2">
            <i class="bi bi-facebook text-primary"></i> Continue with Facebook
          </button>
        </div>

      </div>
    </div>

  </div>
</div>
</template>

<script setup>
import { ref } from "vue"
import { menu } from "../data/menu_drown"
import { Offcanvas } from "bootstrap"
const activeTab = ref('login')
const showPassword = ref(false)

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

.zando-modal{
  border-radius: 2px;
  background: #fff;
}

.zando-close{
  position: absolute;
  right: 22px;
  top: 22px;
  z-index: 10;
}

.auth-tabs{
  border-bottom: 1px solid #ddd;
  padding-bottom: 14px;
}

.auth-tab{
  border: none;
  background: none;
  font-size: 17px;
  font-weight: 600;
  padding: 0;
  position: relative;
}

.auth-tab.active::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  width: 100%;
  height: 3px;
  background: black;
}

.auth-label{
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
}

.zando-input{
  width: 100%;
  height: 54px;
  border: 1px solid #111;
  padding: 0 16px;
  outline: none;
  font-size: 15px;
}

.zando-input:focus{
  border-color: black;
}

.eye-icon{
  position: absolute;
  right: 18px;
  top: 48px;
  cursor: pointer;
}

.zando-btn{
  width: 100%;
  height: 54px;
  border: none;
  background: black;
  color: white;
  font-size: 18px;
  font-weight: 700;
  transition: .3s;
}

.zando-btn:hover{
  opacity: .9;
}

.forgot-link{
  color: black;
  text-decoration: none;
  font-weight: 600;
}

.or-text{
  font-size: 20px;
  font-weight: 300;
}

.social-login-btn{
  width: 100%;
  height: 54px;
  border: 1px solid #111;
  background: white;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 17px;

  transition: .3s;
}

.social-login-btn:hover{
  background: #f5f5f5;
}

.register-link{
  color: black;
  font-weight: 600;
  margin-left: 5px;
  text-decoration: none;
}
</style>

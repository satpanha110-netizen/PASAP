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
      <!-- DESKTOP SEARCH -->
     

      <!-- ICONS -->
      <div class="flex items-center gap-3 md:gap-5 text-xl md:text-2xl">
         

           <router-link to="/search"  class=" hidden lg:flex border-0 bg-transparent text-black">
                      
            <i class="bi bi-search  hover:text-blue-600  cursor-pointer"></i>
          </router-link>


          <router-link to="/search"  class="border-0 bg-transparent text-black">
                      
            <i class="bi bi-search lg:hidden cursor-pointer"></i>
          </router-link>

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
          >{{ cart.totalItems }}</i>

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

<div class="offcanvas-body d-flex flex-column">

  <!-- EMPTY -->
  <div
    v-if="cart.carts.length === 0"
    class="h-100 d-flex justify-content-center align-items-center text-secondary"
  >
    Your cart is empty.
  </div>

  <!-- CART ITEMS -->
  <div
    v-else
    class="d-flex flex-column gap-4 h-100"
  >

    <!-- PRODUCT -->
    <div
      v-for="item in cart.carts"
      :key="item.id"
      class="d-flex gap-3 border-bottom pb-3"
    >

      <!-- IMAGE -->
      <img
        :src="item.image[0]"
        class="cart-image"
      >

      <!-- CONTENT -->
      <div class="flex-grow-1">

        <h6 class="fw-bold mb-1">
          {{ item.type }}
        </h6>

        <p class="text-secondary small mb-2">
          {{ item.text }}
        </p>

        <!-- PRICE -->
        <div class="fw-bold mb-3">
          $
          {{
            item.discount != 0
              ? (
                  item.price -
                  ((item.price * item.discount) / 100)
                ).toFixed(1)
              : item.price
          }}
        </div>

        <!-- QTY -->
        <div class="d-flex align-items-center gap-2">

          <button
            class="qty-btn"
            @click="cart.decreaseQty(item.id)"
          >
            -
          </button>

          <span class="fw-bold">
            {{ item.qty }}
          </span>

          <button
            class="qty-btn"
            @click="cart.increaseQty(item.id)"
          >
            +
          </button>

        </div>

      </div>

      <!-- REMOVE -->
      <button
        class="remove-btn"
        @click="cart.removeCart(item.id)"
      >
        <i class="bi bi-x-lg"></i>
      </button>

    </div>

    <!-- FOOTER -->
    <div class="mt-auto pt-4">

      <!-- TOTAL -->
      <div
        class="d-flex justify-content-between
        align-items-center mb-4"
      >

        <h5 class="m-0 fw-bold">
          Total
        </h5>

        <h5 class="m-0 fw-bold">
          ${{ cart.totalPrice.toFixed(1) }}
        </h5>

      </div>

      <!-- BUTTON -->
      <button class="checkout-btn">
        CHECKOUT
      </button>

    </div>

  </div>

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
          class=" btn btn-outline-secondary  desktop-login-btn"
          data-bs-toggle="modal"
          data-bs-target="#loginModal"
        >
          Login
        </button>

       <button
  class=" btn btn-outline-secondary desktop-register-btn"
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
            class="auth-tab "
            :class="{ active: activeTab === 'login' }"
            @click="activeTab = 'login'"
          >
            LOGIN
          </button>

          <button
            class="auth-tab "
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
import { useCartStore } from "../store/cart"
const activeTab = ref('login')
const showPassword = ref(false)
const activeMenu = ref(null)
const offcanvasRef = ref(null)
const cart = useCartStore();
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
/* CART */
.cart-image{
  width: 90px;
  height: 110px;
  object-fit: cover;
  border-radius: 12px;
  background: #f3f3f3;
}

.qty-btn{
  width: 30px;
  height: 30px;
  border: none;
  background: #f1f1f1;
  border-radius: 8px;
  font-weight: bold;
  transition: .3s;
}

.qty-btn:hover{
  background: black;
  color: white;
}

.remove-btn{
  border: none;
  background: transparent;
  color: #999;
  transition: .3s;
}

.remove-btn:hover{
  color: red;
}

.checkout-btn{
  width: 100%;
  height: 55px;
  border: none;
  background: black;
  color: white;
  font-weight: 700;
  border-radius: 14px;
  transition: .3s;
}

.checkout-btn:hover{
  opacity: .9;
}
</style>

<template>
  <div class="container-fluid py-4 px-lg-5 px-3">

    <!-- HEADER -->
    <div class="header-box mb-5">

      <div>
        <p class="mini-title">DISCOVER COLLECTION</p>

        <h1 class="title">
          {{ route.query.gender }}
          <span>/</span>
          {{ route.query.section }}
          <span>/</span>
          {{ route.query.category }}
        </h1>
      </div>

      <div class="qty-box">
        <h3>{{ qty }}</h3>
        <p>Products Available</p>
      </div>

    </div>

    <!-- PRODUCTS -->
    <div class="row g-4">

      <div
        class="col-6 col-md-4 col-lg-3"
        v-for="product in filteredProducts"
        :key="product.id"
      >

        <div class="product-card">

          <!-- IMAGE -->
          <div class="image-wrapper">

            <router-link
              class="text-decoration-none"
              :to="`/detail/${product.id}`"
            >

              <!-- MAIN IMAGE -->
              <img
                class="main-image"
                :src="product.image[0]"
                alt=""
              >

              <!-- HOVER IMAGE -->
              <img
                v-if="product.image[1]"
                class="hover-image"
                :src="product.image[1]"
                alt=""
              >

            </router-link>

            <!-- OVERLAY -->
            <div class="overlay">

              <button class="icon-btn">
                <i class="bi bi-heart"></i>
              </button>

              <button class="icon-btn">
                <i class="bi bi-eye"></i>
              </button>

            </div>

            <!-- BADGES -->
            <div class="badges">

              <span
                class="badge-new"
                v-if="product.isNewIn"
              >
                NEW
              </span>

              <span
                class="badge-discount"
                v-if="product.discount != 0"
              >
                -{{ product.discount }}%
              </span>

            </div>

          </div>

          <!-- CONTENT -->
          <div class="content">

            <!-- CATEGORY -->
            <p class="category">
              {{ product.category_for }}
            </p>

            <!-- NAME -->
            <p class="product-name">
              {{ product.type }}
            </p>

            <!-- TEXT -->
            <h5 class="product-text">
              {{ product.text }}
            </h5>

            <!-- PRICE -->
            <div class="price-row">

              <div class="price-box">

                <span
                  class="old-price"
                  v-if="product.discount != 0"
                >
                  ${{ product.price }}
                </span>

                <span class="new-price">
                  $
                  {{
                    product.discount != 0
                      ? (
                          product.price -
                          ((product.price * product.discount) / 100)
                        ).toFixed(1)
                      : product.price
                  }}
                </span>

              </div>

              <!-- ADD TO CART -->
              <button
                class="cart-btn"
                @click="addToCart(product)"
              >
                <i class="bi bi-bag-plus"></i>
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

    <!-- EMPTY -->
    <div
      class="empty"
      v-if="filteredProducts.length === 0"
    >
      No Product Found
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { products } from "../data/menu_data"
import { useCartStore } from "../store/cart"

// ROUTE
const route = useRoute()

// PINIA
const cart = useCartStore()

// ADD TO CART
const addToCart = (product) => {
  cart.addToCart(product)
}

// FILTER PRODUCTS
const filteredProducts = computed(() => {

  const category_for =
    route.query.gender?.toLowerCase()

  const item =
    route.query.section?.toLowerCase()

  const type =
    route.query.category?.toLowerCase()

  let result = []

  for (let i = 0; i < products.length; i++) {

    const product = products[i]

    // CATEGORY
    if (
      product.category_for.toLowerCase()
      !== category_for
    ) {
      continue
    }

    // NEW IN
    if (item === "new in") {

      if (!product.isNewIn) {
        continue
      }

      if (type === "all") {
        result.push(product)
        continue
      }

      if (
        product.item.toLowerCase() === type
      ) {
        result.push(product)
      }

      continue
    }

    // NORMAL CATEGORY
    if (
      product.item.toLowerCase() !== item
    ) {
      continue
    }

    // ALL
    if (type === "all") {
      result.push(product)
      continue
    }

    // TYPE MATCH
    if (
      product.type.toLowerCase() === type
    ) {
      result.push(product)
    }

  }

  return result
})

// TOTAL PRODUCT
const qty = computed(() =>
  filteredProducts.value.length
)
</script>

<style scoped>

/* PAGE */
.container-fluid{
  background:
  linear-gradient(to bottom,#f7f8fc,#eef2f7);
  min-height: 100vh;
}

/* HEADER */
.header-box{
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-wrap: wrap;
  gap: 20px;
}

.mini-title{
  font-size: 13px;
  font-weight: 200;
  letter-spacing: 3px;
  color: #888;
  margin-bottom: 10px;
}

.title{
  font-size: 42px;
  font-weight: 900;
  color: #111;
  margin: 0;
  text-transform: capitalize;
  line-height: 1.2;
}

.title span{
  color: #d0d0d0;
  margin: 0 8px;
}

.qty-box{
  background: white;
  padding: 18px 26px;
  border-radius: 22px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  text-align: center;
}

.qty-box h3{
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: #111;
}

.qty-box p{
  margin: 0;
  color: #777;
  font-size: 13px;
}

/* CARD */
.product-card{
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background: white;
  transition: 0.5s;
  box-shadow:
  0 10px 35px rgba(0,0,0,0.06);
}

.product-card:hover{
  transform: translateY(-12px);
  box-shadow:
  0 22px 50px rgba(0,0,0,0.12);
}

/* IMAGE */
.image-wrapper{
  position: relative;
  height: 400px;
  overflow: hidden;
  background: #f3f4f8;
}

.main-image,
.hover-image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  transition: 0.6s;
}

/* HOVER */
.hover-image{
  opacity: 0;
  transform: scale(1.1);
}

.product-card:hover .hover-image{
  opacity: 1;
  transform: scale(1);
}

.product-card:hover .main-image{
  opacity: 0;
  transform: scale(1.05);
}

/* OVERLAY */
.overlay{
  position: absolute;
  top: 20px;
  right: -60px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: 0.4s;
  z-index: 20;
}

.product-card:hover .overlay{
  right: 20px;
}

.icon-btn{
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background: white;
  color: #111;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.icon-btn:hover{
  background: #111;
  color: white;
  transform: scale(1.1);
}

/* BADGES */
.badges{
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.badge-new,
.badge-discount{
  padding: 1px 8px;
  border-radius: 50px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  width: fit-content;
}

.badge-new{
  background: #111;
}

.badge-discount{
  background:
  linear-gradient(135deg,#ff6b00,#ff2d55);
}

/* CONTENT */
.content{
  padding: 24px;
}

/* CATEGORY */
.category{
  color: #999;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12px;
  margin-bottom: 12px;
}

/* NAME */
.product-name{
  font-size: 15px;
  font-weight: 800;
  color: #454444;
  margin-bottom: 5px;
  line-height: 1.3;
  max-lines: 1;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-text{
  font-size: 15px;
  color: #000;
  margin-bottom: 25px;
  line-height: 1.3;
   overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-lines: 1;
}

/* PRICE ROW */
.price-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

/* PRICE */
.price-box{
  display: flex;
  flex-direction: column;
}

.old-price{
  color: #aaa;
  margin-bottom: 0px;
  text-decoration: line-through;
  font-size: 14px;
}

.new-price{
  font-size: 28px;
  font-weight: 900;
  margin-top: 3px;
  background:
  linear-gradient(135deg,#111,#444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* CART */
.cart-btn{
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 18px;
  background:
  linear-gradient(135deg,#111,#333);
  color: white;
  font-size: 20px;
  transition: 0.3s;
}

.cart-btn:hover{
  transform: scale(1.08) rotate(-5deg);
  background:
  linear-gradient(135deg,#09b54d,#00d26a);
}

/* EMPTY */
.empty{
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: #999;
}

/* TABLET */
@media(max-width: 992px){

  .title{
    font-size: 30px;
  }

  .image-wrapper{
    height: 280px;
  }

}

/* MOBILE */
@media(max-width: 576px){

  .header-box{
    align-items: start;
  }

  .title{
    font-size: 22px;
  }

  .qty-box{
    padding: 14px 18px;
  }

  .qty-box h3{
    font-size: 22px;
  }

  .image-wrapper{
    height: 220px;
  }

  .content{
    padding: 16px;
  }

  .product-name{
    font-size: 16px;
    margin-bottom: 18px;
  }

  .new-price{
    font-size: 20px;
  }

  .cart-btn{
    width: 45px;
    height: 45px;
    border-radius: 14px;
    font-size: 16px;
  }

  .icon-btn{
    width: 38px;
    height: 38px;
  }

}
</style>
<template>
  <div class="container-fluid py-4 px-lg-5 px-3">

    <!-- SEARCH -->
    <div class="search-box mb-5">

      <input
        v-model="search"
        type="text"
        placeholder="Search category, item, type..."
        class="search-input"
      >

      <i class="bi bi-search search-icon"></i>

    </div>

    <!-- RESULT -->
    <div class="result-box mb-4">

      <h2 class="result-title">
        Search Result
      </h2>

      <div class="qty-box">
        {{ filteredProducts.length }} Products
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

            <p class="category">
              {{ product.category_for }}
            </p>

            <h3 class="product-name">
              {{ product.type }}
            </h3>

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

              <button class="cart-btn" @click="addToCart">
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
import { ref, computed } from "vue"
import { products } from "../data/menu_data"
import { useCounterStore } from "../store/counter"
const count = useCounterStore();
const addToCart =()=>{
  count.increment();
} 

const search = ref("")

const filteredProducts = computed(() => {

  return products.filter(product => {

    const keyword = search.value.toLowerCase()

    return (
      product.category_for.toLowerCase().includes(keyword) ||
      product.item.toLowerCase().includes(keyword) ||
      product.type.toLowerCase().includes(keyword)
    )

  })

})
</script>

<style scoped>

/* PAGE */
.container-fluid{
  background:
  linear-gradient(to bottom,#f7f8fc,#eef2f7);
  min-height: 100vh;
}

/* SEARCH */
.search-box{
  position: relative;
  max-width: 500px;
}

.search-input{
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
  padding: 0 60px 0 24px;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  outline: none;
  font-size: 16px;
}

.search-icon{
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #888;
}

/* RESULT */
.result-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.result-title{
  font-size: 38px;
  font-weight: 900;
  margin: 0;
}

.qty-box{
  background: white;
  padding: 14px 22px;
  border-radius: 18px;
  font-weight: 700;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
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
  height: 350px;
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
  padding: 9px 16px;
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
  font-size: 22px;
  font-weight: 800;
  color: #111;
  margin-bottom: 25px;
  line-height: 1.3;
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
  text-decoration: line-through;
  font-size: 14px;
}

.new-price{
  font-size: 28px;
  font-weight: 900;
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

  .result-title{
    font-size: 28px;
  }

  .image-wrapper{
    height: 280px;
  }

}

/* MOBILE */
@media(max-width: 576px){

  .result-title{
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
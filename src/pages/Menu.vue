<template>
  <div class="container-fluid py-3 px-lg-5 px-3">
    <!-- TITLE -->
    <h1 class="title mb-4">
      {{ route.query.gender }}
      -
      {{ route.query.section }}
      -
      {{ route.query.category }}
      ({{ qty }})
    </h1>
    <!-- PRODUCTS -->
    <div class="row g-2 g-md-3 g-lg-4">
      <div
        class="col-6 col-md-4 col-lg-3"
        v-for="product in filteredProducts"
        :key="product.id">
        <div class="card border-0" style="z-index: 0;">
          <img class="main-image" :src="product.image[0]" alt="">
          <router-link class="text-decoration-none" :to="`/detail/${product.id}`">
            <img
              v-if="product.image[1]"
              class="hover-image"
              :src="product.image[1]"
              alt=""
            >
          </router-link>
          <!-- NEW -->
          <span class="badge-new" v-if="product.isNewIn">
            NEW
          </span>
          <!-- DISCOUNT -->
          <span class="badge-discount" v-if="product.discount != 0">
            -{{ product.discount }}%
          </span>
        </div>
          <!-- IMAGE -->
          <div class="image-box">
          <!-- CONTENT -->
          <div class="content d-flex flex-column justify-content-between flex-grow-1">
            <div>
              <h3>{{ product.category_for }} {{ product.type }}</h3>
              <!-- <p>{{ product.category_for. product.type }}</p> -->
            </div>
            <div class="bottom">
              <div class="d-flex">
                <h4 style="text-decoration: line-through;" v-if="product.discount!=0">US ${{ product.price }}</h4>
                <h4 v-if="product.discount!=0">US ${{ (product.price-((product.price*product.discount)/100)).toFixed(1) }}</h4>
                <h4 v-else>US ${{ product.price }}</h4>
              </div>
              <button @click="handleCount">
                Add {{ product.id }}
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
import { inject } from "vue"
const route = useRoute();

const filteredProducts = computed(() => {
  const category_for = route.query.gender?.toLowerCase();
  const item = route.query.section?.toLowerCase();
  const type = route.query.category?.toLowerCase();
  let result = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // CATEGORY
    //comare category_for in url with product category_for(mean category) 
    // if choose on Men and products have Men (1 or more) it will continue to check other condition
    //  but products don't have Men it will skip this product and continue to next product
    // {    
    //   id: 1,
    //   category_for: "Men",
    // }
    // it will compare
    // it will compare match and continue if no product have (Men,Women,Kids) it will skip all product and return empty array
    if (product.category_for.toLowerCase() !== category_for) {
      continue;
    }
    // NEW IN Category
    // if choose new in item it will check if product is new in or not if not it will skip this product and continue to next product
    if (item === "new in") { 
      if (!product.isNewIn) { // if our product is new in it will continue
        continue;
      }
      if (type === "all") { // if choose all in new in it will push all new in product to result array
        result.push(product);
        continue;
      }
      // if choose else like (clothing,shoes,accessories) it will compare with product item if match it will push to result array
      // if we choose clothing it will compare with product item if product item is clothing it will push to result array 
      // but if product item is shoes or accessories it will skip this product and continue to next product
      if (product.item.toLowerCase() === type) { 
        result.push(product);
      }
      continue;
    }
    // NORMAL CATEGORY//
    // if choose normal category it will compare item in url with product item 
    if (product.item.toLowerCase() !== item) {
      continue;
    }
    // ALL TYPES
    // if choose all in type it will push all product that match category and item to result array
    if (type === "all") {
      result.push(product);
      continue;
    }
    // TYPE MATCH
    // if choose else in type it will compare with product type if match it will push to result array
    if (product.type.toLowerCase() === type) {
      result.push(product);
    }
  }
  return result;
});
const qty = computed(() => filteredProducts.value.length);
// computed is used to calculate the length of filtered products and update qty whenever filteredProducts change
const handleCount = inject("handleCount");
</script>
<style scoped>
/* TITLE */
.title{
  font-size:34px;
  font-weight:bold;
  color:#111;
}
/* CARD */
.card{
  height: 485px;
  background:white;
  border-radius:20px;
  overflow:hidden;
  transition:0.4s;
  box-shadow:0 5px 20px rgba(0,0,0,0.08);
}
.card:hover{
  transform:translateY(-10px);
  box-shadow:0 15px 30px rgba(0,0,0,0.12);
  cursor: pointer;
}
/* IMAGE */
.image-box{
  width:100%;
  height:100%;
  position:relative;
  overflow:hidden;
}
/* RESPONSIVE IMAGE HEIGHT */
@media(max-width:992px){
  .image-box{
    height:280px;
  }
}
@media(max-width:576px){
  .card{
    /* width: 40%; */
    height: auto;
  }
  /* .image-box{
    height:250px;
  } */
}
.main-image,
.hover-image{
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  top:0;
  left:0;
  transition:0.5s;
}
/* HOVER IMAGE */
.hover-image{
  opacity:0;
}
.card:hover .hover-image{
  opacity:1;
}
.card:hover .main-image{
  opacity:0;
  transform:scale(1.05);
}
/* BADGES */
.badge-new{
  position:absolute;
  top:15px;
  left:15px;
  background:black;
  color:white;
  padding:8px 14px;
  border-radius:30px;
  font-size:12px;
  font-weight:bold;
  z-index:10;
}
.badge-discount{
  position:absolute;
  top:55px;
  left:15px;
  background:#ff6701;
  color:white;
  padding:8px 14px;
  border-radius:30px;
  font-size:12px;
  font-weight:bold;
  z-index:10;
}

/* CONTENT */
.content{
  padding:22px;
  min-height:10%;
}

.content h3{
  font-size:15px;
  color:#999;
  margin-bottom:8px;
}

.content p{
  font-size:20px;
  font-weight:600;
  margin-bottom:20px;
  color:#111;
}
/* BOTTOM */
.bottom{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:10px;
}
.bottom h4{
  color:#ff6701;
  font-size:20px;
  margin:0;
}
/* BUTTON */
.bottom button{
  border:none;
  background:#111;
  color:white;
  padding:10px 18px;
  border-radius:10px;
  cursor:pointer;
  transition:0.3s;
  font-size:14px;
}
.bottom button:hover{
  background:#09b54d;
}
/* MOBILE */
@media(max-width:576px){
  .title{
    font-size:24px;
  }
  .content{
    padding:18px;
  }
  .content h4{
    font-size:15px;
  }
  .bottom{
    flex-direction:column;
    align-items:flex-start;
  }
  .bottom button{
    width:100%;
  }
}
/* EMPTY */
.empty{
  width:100%;
  height:300px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:30px;
  color:gray;
}
</style>
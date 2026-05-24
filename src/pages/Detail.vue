<template>
  <div v-if="product" class="d-flex gap-3">

    <!-- List Images -->
    <div class="d-flex flex-column gap-2">
      <img
        v-for="img in product.image"
        :key="img"
        :src="img"
        alt=""
        class="w-[100px] h-[100px] object-cover cursor-pointer border"
        @click="selectedImage = img"
      >
    </div>

    <!-- Show Image -->
    <img
      :src="selectedImage"
      :alt="product.type"
      class="w-[300px] h-[400px] object-cover"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { products as productData ,productWoman } from '../data/products'
import { products as menuData } from '../data/menu_data'

// combine both arrays
const allProducts = [...productData, ...menuData, ...productWoman]

const route = useRoute()

const product = allProducts.find(
  item => item.id == route.params.id
)

const selectedImage = ref(
  product?.image?.[0] || ''
)
</script>

<style>
</style>
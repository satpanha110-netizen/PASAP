<template>
  <div v-if="product" class="container py-4">

    <div class="row g-4">

      <!-- LEFT: IMAGES -->
      <div class="col-md-6 d-flex gap-3">

        <!-- THUMBNAILS -->
        <div class="d-flex flex-column gap-2">
          <img
            v-for="img in activeImages"
            :key="img"
            :src="img"
            class="border rounded cursor-pointer"
            style="width:90px; height:90px; object-fit:cover;"
            @click="selectedImage = img"
          />
        </div>

        <!-- MAIN IMAGE -->
        <div class="flex-grow-1 text-center">
          <img
            :src="selectedImage"
            class="rounded shadow-sm"
            style="width:100%; max-width:420px; height:520px; object-fit:cover;"
          />
        </div>

      </div>

      <!-- RIGHT: DETAILS -->
      <div class="col-md-6">

        <!-- PRICE -->
        <div class="d-flex align-items-center gap-3">
          <h2 class="text-danger fw-bold mb-0">
            ${{ product.price }}
          </h2>

          <span class="text-muted text-decoration-line-through">
            $45.59
          </span>

          <span class="badge bg-success px-3 py-2">-30%</span>
        </div>

        <!-- TITLE -->
        <h4 class="mt-2 fw-bold">
          {{ product.type }}
        </h4>

        <p class="text-muted">
          Stylish product detail like Zando UI
        </p>

        <!-- COLOR VARIANTS -->
        <div class="mt-4">
          <p class="fw-bold mb-2">Color</p>

          <div class="d-flex gap-2 flex-wrap">

            <div
              v-for="(variant, index) in product.variants"
              :key="index"
              @click="selectVariant(variant)"
              class="p-2 border rounded text-center cursor-pointer"
              :class="{
                'border-dark shadow-sm': selectedVariant.name === variant.name
              }"
              style="width:85px;"
            >
              <img
                :src="variant.images[0]"
                style="width:65px; height:65px; object-fit:cover;"
                class="rounded"
              />
              <small class="d-block mt-1">
                {{ variant.name }}
              </small>
            </div>

          </div>
        </div>

        <!-- SIZE -->
      <!-- SIZE -->
<div class="mt-4">
  <p class="fw-bold mb-2">Size</p>

  <div class="d-flex gap-2 flex-wrap">

    <button
      v-for="size in sizes"
      :key="size"
      @click="selectedSize = size"
      class="btn px-3 py-2"
      :class="selectedSize === size ? 'btn-dark' : 'btn-outline-dark'"
    >
      {{ size }}
    </button>

  </div>
</div>
        <!-- QUANTITY -->
        <div class="mt-4">
          <p class="fw-bold mb-2">Quantity</p>

          <div class="d-flex align-items-center gap-2">

            <button class="btn btn-light" @click="decreaseQty">−</button>

            <input
              v-model="quantity"
              class="form-control text-center"
              style="width:70px;"
            />

            <button class="btn btn-light" @click="increaseQty">+</button>

          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="mt-4 d-flex gap-2">

          <button class="btn btn-dark w-100 py-3">
            Add to Bag
          </button>

          <button class="btn btn-outline-danger px-3">
            ❤️
          </button>

        </div>

        <!-- INFO BOX -->
        <div class="mt-4 p-3 bg-light rounded">

          <div class="d-flex justify-content-between">

            <div>
              🚚 Fast Delivery<br />
              <small>1 - 3 days</small>
            </div>

            <div>
              📞 Support<br />
              <small>085 330 330</small>
            </div>

          </div>

        </div>

      </div>

    </div>
  </div>

  <div v-else class="text-center py-5">
    Product not found
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import { products as productData, productWoman, productshop } from '../data/products'
import { products as menuData } from '../data/menu_data'

const route = useRoute()
const sizes = ['S', 'M', 'L', 'XL']

const selectedSize = ref('M')

const allProducts = [
  ...productData,
  ...menuData,
  ...productWoman,
  ...productshop
]

const product = ref(null)
const selectedImage = ref('')
const selectedVariant = ref({})
const quantity = ref(1)

/* LOAD PRODUCT */
const loadProduct = () => {
  product.value = allProducts.find(
    item => item.id == route.params.id
  )

  if (product.value?.variants?.length) {
    selectedVariant.value = product.value.variants[0]
    selectedImage.value = selectedVariant.value.images[0]
  } else {
    selectedImage.value = product.value?.image?.[0] || ''
  }
}

loadProduct()

watch(() => route.params.id, loadProduct)

/* COMPUTED IMAGES */
const activeImages = computed(() => {
  return selectedVariant.value?.images || product.value?.image || []
})

/* VARIANT SELECT */
const selectVariant = (variant) => {
  selectedVariant.value = variant
  selectedImage.value = variant.images[0]
}

/* QUANTITY */
const increaseQty = () => quantity.value++
const decreaseQty = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
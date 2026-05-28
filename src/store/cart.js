import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: []
  }),

  getters: {
    totalItems: (state) => state.carts.length,

    totalPrice: (state) =>
      state.carts.reduce((total, item) => {
        return total + ((item.price - (item.price * item.discount / 100)) * item.qty)
      }, 0)
  },

  actions: {
    addToCart(product) {

      // check product already in cart
      const existing = this.carts.find(
        item => item.id === product.id
      )

      if (existing) {
        existing.qty++
      } else {
        this.carts.push({
          ...product,
          qty: 1
        })
      }
    },

    increaseQty(id) {
      const item = this.carts.find(item => item.id === id)

      if (item) {
        item.qty++
      }
    },

    decreaseQty(id) {
      const item = this.carts.find(item => item.id === id)

      if (item && item.qty > 1) {
        item.qty--
      }
    },
    removeCart(id) {
      this.carts = this.carts.filter(
        item => item.id !== id
      )
    }
  }
})
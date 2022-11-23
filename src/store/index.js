import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLoggedin : false,
    cartItems : 0,
    user : {
      nom : null,
      prenom : null,
      isAdmin : null
    },
    cart : {}
  },
  mutations: {
    INCREMENT_CART(state){
      state.cartItems++
    }
  },
  actions: {
    incrementCart(context){
      context.commit('INCREMENT_CART')
    }
  },
  modules: {
  }
})

const configureStore = require('@reduxjs/toolkit').configureStore
// const logger = require('redux-logger').createLogger()
const productsReducer = require('../features/products/productSlice')
const { cakeReducer } = require('../features/cake/cakeSlice')
const { iceCreamReducer } = require('../features/icecream/iceCreamSlice')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    products: productsReducer
  }
})

module.exports = store

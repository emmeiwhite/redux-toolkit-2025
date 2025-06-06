const configureStore = require('@reduxjs/toolkit').configureStore
const logger = require('redux-logger').createLogger()

const { cakeReducer } = require('../features/cake/cakeSlice')
const { iceCreamReducer } = require('../features/icecream/iceCreamSlice')

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer
  },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(logger)
})

module.exports = store

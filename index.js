const store = require('./app/store')

const { cakeActions } = require('./features/cake/cakeSlice')
const { iceCreamActions } = require('./features/icecream/iceCreamSlice')
const { fetchProducts } = require('./features/products/productSlice')

console.log('Initial state:', store.getState())
// console.log('Initial State: ', store.getState())
// subscribe to the store
const unsubscribe = store.subscribe(() => {
  console.log('Update State: ', store.getState())
})

store.dispatch(cakeActions.addCake())
// store.dispatch(iceCreamActions.orderIceCream())
// store.dispatch(cakeActions.addCake())
store.dispatch(fetchProducts()).then(() => {
  console.log('Final state after fetchProducts:', store.getState())
  unsubscribe()
})
console.log(store.getState())

unsubscribe()

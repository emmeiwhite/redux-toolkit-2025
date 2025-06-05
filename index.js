const store = require('./app/store')

const { cakeActions } = require('./features/cake/cakeSlice')
const { iceCreamActions } = require('./features/icecream/iceCreamSlice')

console.log('Initial State: ', store.getState())
// subscribe to the store
const unsubscribe = store.subscribe(() => {
  console.log('Update State: ', store.getState())
})

store.dispatch(cakeActions.addCake())
store.dispatch(iceCreamActions.orderIceCream())

unsubscribe()

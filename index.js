const store = require('./app/store')

const { cakeActions } = require('./features/cake/cakeSlice')

console.log('Initial State: ', store.getState())
// subscribe to the store
const unsubscribe = store.subscribe(() => {
  console.log('Update State: ', store.getState())
})

store.dispatch(cakeActions.addCake())

unsubscribe()

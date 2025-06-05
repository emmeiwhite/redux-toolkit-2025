import store from './app/store'

console.log(store.getState())

// subscribe to the store
store.subscribe(() => {
  console.log('Update State: ', store.getState())
})

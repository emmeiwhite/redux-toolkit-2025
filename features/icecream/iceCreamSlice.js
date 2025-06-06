const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfIceCreams: 100
}

const iceCreamSlice = createSlice({
  name: 'iceCream',
  initialState,
  reducers: {
    orderIceCream: state => {
      state.numOfIceCreams--
    },
    reStockIceCream: state => {
      state.numOfIceCreams + 5
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeActions.addCake, (state, action) => {
      state.numOfIceCreams--
    }) // We don't have to call addCake, but simply pass it like this cakeActions.addCake, the action-type . But I am a bit confused here, how is addCake an action type
  }
})

console.log('The ActionCreator object')
console.log(iceCreamSlice.actions)

// export reducer and action creators

module.exports = {
  iceCreamReducer: iceCreamSlice.reducer,
  iceCreamActions: iceCreamSlice.actions
}

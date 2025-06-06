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
    })
  }
})

/**
 * cakeActions.addCake (without parentheses) is an action creator, and Redux Toolkit reads its .type property.
 */

console.log('The ActionCreator object')
console.log(iceCreamSlice.actions)

// export reducer and action creators

module.exports = {
  iceCreamReducer: iceCreamSlice.reducer,
  iceCreamActions: iceCreamSlice.actions
}

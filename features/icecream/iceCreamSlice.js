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
  }
})

console.log(iceCreamSlice)

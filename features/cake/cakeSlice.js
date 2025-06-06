const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 30
}

// A scenario where we want to gift free ice-cream on dispatch of cake actionCreator. That is, the sale is on and people who buy cake will get a free iceCream. We'll require extraReducers function for this in the iceCream slice

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    addCake: state => {
      state.numOfCakes--
    }
  }
})

// console.log(cakeSlice)

// We have the reducers and the action creators from cakeSlice  and we have to export these
module.exports = {
  cakeReducer: cakeSlice.reducer,
  cakeActions: cakeSlice.actions
}

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfCakes: 30
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    addCake: (state, action) => {
      state.numOfCakes--
    }
  }
})

console.log(cakeSlice)

// We have the reducers and the action creators from cakeSlice  and we have to export these
module.exports = cakeSlice.reducer // default export
module.exports.cakeActionCreator = cakeSlice.actions // action creators

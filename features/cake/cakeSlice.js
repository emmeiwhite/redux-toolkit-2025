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

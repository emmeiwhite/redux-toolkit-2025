const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  loading: false,
  products: [],
  error: ''
}

const productSlice = createSlice({
  name: 'product',
  initialState
})

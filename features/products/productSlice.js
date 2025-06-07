const { createAsyncThunk } = require('@reduxjs/toolkit')
const { default: axios } = require('axios')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  loading: false,
  products: [],
  error: ''
}

/** --- 1) Define the Async Thunk | To perform async operation --- */
const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
  return axios.get('https://fakestoreapi.com/products').then(res => console.log(res.data))
})
// Async Fetch !!!

// For async-call, we do not need to use reducers
const productSlice = createSlice({
  name: 'product',
  initialState
})

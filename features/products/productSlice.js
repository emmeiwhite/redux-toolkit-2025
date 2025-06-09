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
  return axios.get('https://fakestoreapi.com/products').then(res => res.data)
  // axios returns promise
})
// Async Fetch !!!

// For async-call, we do not need to use reducers
const productSlice = createSlice({
  name: 'product',
  initialState,
  /** --- 2) Handle the thunk in the Slice --- */
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true // state updates means UI will change
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload // createAsyncThunk will send data as action.payload behind the scenes
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

console.log(productSlice) // The console.log, I love this very must, as we can see the outputs and export reducer and action creators properly (for sync and async cases)

// Here we are making an async-call, and productSlice.actions is empty object, we do not have to export the productSlice.actions in async case, instead we'll need to export our fetchProducts instead (whatever variable is assigned to createAsyncThunk fxn).
module.exports = productSlice.reducer // default export
module.exports.fetchProducts = fetchProducts // named export

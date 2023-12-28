import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLoading (state) {
      state.loading = true
    },

    setIsLoadingFalse (state) {
      state.loading = false
    }

  }
})

export const {isLoading, setIsLoadingFalse } = loginSlice.actions

export default loginSlice.reducer

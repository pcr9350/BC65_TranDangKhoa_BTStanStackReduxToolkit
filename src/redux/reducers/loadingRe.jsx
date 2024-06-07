import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const loadingRe = createSlice({
  name: 'loadingRe',
  initialState,
  reducers: {
    setLoadingAction: (state,action) => {
        state.isLoading = action.payload
    }  
  }
});

export const {setLoadingAction} = loadingRe.actions

export default loadingRe.reducer
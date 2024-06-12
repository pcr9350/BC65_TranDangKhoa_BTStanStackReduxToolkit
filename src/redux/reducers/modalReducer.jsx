import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalTitle:'Default title',
    modalContent: '',
    // onSubmitFunction: ()=>{
    //     console.log('modal')
    // }
}

const modalReducer = createSlice({
  name: 'modalReducer',
  initialState,
  reducers: {
    openModalAction:  (state, action) =>{
        const {modalTitle, modalContent} = action.payload;
        state.modalTitle = modalTitle;
        state.modalContent = modalContent;
    },
    // setSubmitModalFunctionAction: (state, action)=>{
    //     state.onSubmitFunction = action.payload;
    // }
    // setSubmitModalFunctionAction
  }
});

export const {openModalAction } = modalReducer.actions

export default modalReducer.reducer
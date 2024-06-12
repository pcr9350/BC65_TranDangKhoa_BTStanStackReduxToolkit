import {configureStore} from '@reduxjs/toolkit';
import storeReducer from './reducers/storeReducer';
import loadingRe from './reducers/loadingRe';
import modalReducer from './reducers/modalReducer';

export const store = configureStore({
    reducer: {
        //state ứng dụng lưu tại đây
        loadingRe,
        modalReducer,
        storeReducer,
    }
})

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { httpStore } from '../../util/config';
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, setCookie, setDataJsonStorage, setDataTextStorage } from '../../util/utilFunction';
import { historyRouter } from "../../main";
import { setLoadingAction } from './loadingRe';
const initialState = {
    storeList: [{
            "id": 1,
            "name": "Khải Sneaker",
            "alias": "khai-sneaker",
            "latitude": "10.771663",
            "longtitude": "106.669631",
            "description": "379 sư vạn hạnh quận 10",
            "image": "https://apistore.cybersoft.edu.vn/images/store1.jpg",
            "deleted": false
        
    }],
    storeById: [{
      "id": 1,
      "name": "Khải Sneaker",
      "alias": "khai-sneaker",
      "latitude": "10.771663",
      "longtitude": "106.669631",
      "description": "379 sư vạn hạnh quận 10",
      "image": "https://apistore.cybersoft.edu.vn/images/store1.jpg",
      "deleted": false
  
}],
}

const storeReducer = createSlice({
  name: 'storeReducer',
  initialState,
  reducers: {
    getStoreListAction: (state, action) => {
        state.storeList = action.payload;
    },
    getStoreByIdAction: (state, action) => {
      state.storeById = action.payload;
    }
  }, extraReducers: (builder) =>{
    builder.addCase(addStoreActionAsync.fulfilled,(state,action) => {
        console.log('success',state,action)
    });
    builder.addCase(addStoreActionAsync.pending,(state,action) => {
        console.log('pending')
    });
    builder.addCase(addStoreActionAsync.rejected, (state,action) => {
        console.log('error',state,action)
    });
    builder.addCase(updateStoreActionAsync.fulfilled,(state,action) => {
      console.log('success',state,action)
  });
  builder.addCase(updateStoreActionAsync.pending,(state,action) => {
      console.log('pending')
  });
  builder.addCase(updateStoreActionAsync.rejected, (state,action) => {
      console.log('error',state,action)
  });

  }
});

export const {getStoreListAction, getStoreByIdAction} = storeReducer.actions

export default storeReducer.reducer

export const getStoreListActionApi = () => {

    return async (dispatch) => {
      //xử lý api
      const res = await httpStore.get('/api/Store/getAll');
      const actionPayload = getStoreListAction(res.data.content);
      dispatch(actionPayload);
    }
  };

  export const getStoreByIdActionApi = (id) => {

    return async (dispatch) => {
      //xử lý api

      const res = await httpStore.get(`/api/Store/getbyid?id=${id}`);
      
      const actionPayload = getStoreByIdAction(res.data.content);
      dispatch(actionPayload);
    }
  };
  // Dùng thư viện từ redux toolkit để tạo ra action async
export const addStoreActionAsync = createAsyncThunk(
  'storeReducer/addStoreActionAsync',
  async (storeRegister, {dispatch,getState}) => {
      const actionLoading = setLoadingAction(true);
      dispatch(actionLoading)
      try{
      const res = await httpStore.post('/api/Store', storeRegister);
      return res.data.content //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extrareducer
      }catch (err){
          return Promise.reject(err);
      }finally {
          const actionLoading = setLoadingAction(false);
          dispatch(actionLoading)
          return 'finally' //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extraReducer
      }
      
  },
)

export const updateStoreActionAsync = createAsyncThunk(
  'storeReducer/updateStoreActionAsync',
  async (storeUpdate, {dispatch,getState}) => {
      const actionLoading = setLoadingAction(true);
      dispatch(actionLoading)
      console.log(storeUpdate)
      try{
      const res = await httpStore.put(`/api/Store?id=${storeUpdate.id}`, storeUpdate);
      console.log(res.data.content)
      getStoreListActionApi();
      return res.data.content //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extrareducer
      }catch (err){
          return Promise.reject(err);
      }finally {
          const actionLoading = setLoadingAction(false);
          dispatch(actionLoading)
          return 'finally' //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extraReducer
      }
      
  },
)



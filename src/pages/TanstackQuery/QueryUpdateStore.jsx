import React, { useEffect } from 'react'
import useRedux from '../../CustomHook/useRedux';
import {  useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { storeApi } from '../../services/apiStore/store/storeApi';
import { setSubmitModalFunctionAction } from '../../redux/reducers/modalReducer';
import FormUpdateStore from '../../components/FormUpdateStore';

const QueryUpdateStore = (props) => {
    const {state,dispatch} = useRedux();

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['updateStoreApi'],
        mutationFn: storeApi.updateStore,
        onSuccess: (res) => {{
            // Xử lý sau khi success api
            queryClient.invalidateQueries('storeListApi');
        }}
    });

    useEffect(()=>{
         //   mounting component
      const payload = frmUpdate.handleSubmit;
      const action = setSubmitModalFunctionAction(payload);
      dispatch(action);

      const {isLoading, isPending, data, error} = useQuery({
        queryKey:['storeByIdApi'],
        queryFn: storeApi.getById(props.id),
        staleTime: 3 * 60 * 1000, // 3 phút sau dữ liệu mới cũ
        cacheTime: 5 * 60 * 1000, // thời gian lưu dữ liệu trong cache
        refetchOnWindowFocus: true, //kích vào cửa sổ browser thì queryFn chạy
    });

    document.querySelector('#frmIdUpdate').value = +data.id;
    document.querySelector('#frmNameUpdate').value = data.name;
    document.querySelector('#frmAliasUpdate').value = data.alias;
    document.querySelector('#frmLatUpdate').value = data.latitude;
    document.querySelector('#frmLongUpdate').value = data.longtitude;
    document.querySelector('#frmDesUpdate').value = data.description;
    document.querySelector('#frmImageUpdate').value = data.description;
    }, [props.id])



    const frmUpdate = useFormik({
        initialValues: {
          id: 0,
          name: "",
          alias: "",
          latitude: "",
          longtitude: "",
          description: "",
          image: "",
          deleted: true
        },
        onSubmit: (values) => {
          // Lấy dữ liệu từ form thành công
          mutation.mutateAsync(values);
        }
      });
  return (
    <div className="container">
    <h3>Query Update Store</h3>
    {/* <form action="" className='container' onSubmit={frmUpdate.handleSubmit}>
        
        <div className='w-75 mx-auto'>
        <div className="form-group">
              <label htmlFor="id">ID</label>
              <input type="text" name='id' className='form-control' id='frmIdUpdate' readOnly onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' className='form-control' id='frmNameUpdate' onChange={frmUpdate.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="alias">Alias</label>
              <input type="text" name='alias' className='form-control' id='frmAliasUpdate' onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name='latitude' className='form-control' id='frmLatUpdate' onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="longtitude">Longtitude</label>
              <input type="text" name='longtitude' className='form-control' id='frmLongUpdate' onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" name='description' className='form-control' id='frmDesUpdate' onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="text" name='image' className='form-control' id='frmImageUpdate' onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group mx-2 my-2">
              <label htmlFor="deleted" className='me-2'>Deleted: </label>
              <div>
              <label htmlFor="true">True</label>
              <input value={true} name='deleted' id='true' className='form-check-input mx-2' type='radio' onChange={frmUpdate.handleChange}/>
              </div>
              <div>
              <label htmlFor="false">False</label>
              <input value={false} checked name='deleted' id='false' className='form-check-input mx-2' type='radio' onChange={frmUpdate.handleChange}/>
              </div>
            </div>
            <div className="form-group">
              <button className='btn btn-dark mt-2' type='submit'>Update</button>
            </div>
        </div>
      </form> */}
      <FormUpdateStore />

      </div>
  )
}

export default QueryUpdateStore
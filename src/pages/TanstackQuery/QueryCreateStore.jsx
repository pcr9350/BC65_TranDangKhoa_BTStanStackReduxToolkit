import React from 'react'
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { storeApi } from '../../services/apiStore/store/storeApi'
import * as Yup from 'yup'


const QueryCreateStore = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationKey: ['addStoreApi'],
        mutationFn: storeApi.addStore,
        onSuccess: (res) => {{
            // Xử lý sau khi success api
            queryClient.invalidateQueries('storeListApi');
        }}
    });

    const frmRegisterQuery = useFormik({
        initialValues: {
          name: 0,
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
        },
        validationSchema: Yup.object().shape({
          name: Yup.string().required('name cannot be blank!'),
          image: Yup.string().required('image cannot be blank!'),
        })
      });

  return (
    <form action="" className='container' onSubmit={frmRegisterQuery.handleSubmit}>
    <h3>Query Create Store</h3>
    <div className='w-75 mx-auto'>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" name='name'  className='form-control' onChange={frmRegisterQuery.handleChange} />
          {frmRegisterQuery.errors.name && <p className='text text-danger'>{frmRegisterQuery.errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="">Alias</label>
          <input type="text" name='alias' className='form-control' onChange={frmRegisterQuery.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Latitude</label>
          <input type="text" name='latitude' className='form-control' onChange={frmRegisterQuery.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Longtitude</label>
          <input type="text" name='longtitude' className='form-control' onChange={frmRegisterQuery.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input type="text" name='description' className='form-control' onChange={frmRegisterQuery.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="">Image</label>
          <input type="text" name='image' className='form-control' onChange={frmRegisterQuery.handleChange}/>
          {frmRegisterQuery.errors.image && <p className='text text-danger'>{frmRegisterQuery.errors.image}</p>}
        </div>
        <div className="form-group mx-2 my-2">
          <label htmlFor="" className='me-2'>Deleted: </label>
          <div>
          <label htmlFor="true">True</label>
          <input value={true} checked name='deleted' id='true' className='form-check-input mx-2' type='radio' onChange={frmRegisterQuery.handleChange}/>
          </div>
          <div>
          <label htmlFor="false">False</label>
          <input value={false} name='deleted' id='false' className='form-check-input mx-2' type='radio' onChange={frmRegisterQuery.handleChange}/>
          </div>
        </div>
        <div className="form-group">
          <button className='btn btn-dark mt-2' type='submit'>Create</button>
        </div>
    </div>
  </form>
  )
}

export default QueryCreateStore
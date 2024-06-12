import React, { useEffect } from 'react'
import useRedux from '../../CustomHook/useRedux';
import { getStoreByIdActionApi, updateStoreActionAsync } from '../../redux/reducers/storeReducer';
import { useFormik } from 'formik';

import * as Yup from 'yup'

const UpdateStore = (props) => {
    const {state,dispatch} = useRedux();
  
  useEffect(()=>{
    //   mounting component
      // const payload = frmUpdate.handleSubmit;
      // const action = setSubmitModalFunctionAction(payload);
      // dispatch(action);

      
    const actionThunk = getStoreByIdActionApi(props.id);
    // console.log(actionThunk)
        dispatch(actionThunk)
        
  },[props.id]);

  const {storeById} = state.storeReducer;
  

  useEffect(()=>{

    frmUpdate.setValues(
      {
      id: storeById.id,
      name: storeById.name,
      alias: storeById.alias,
      latitude: storeById.latitude,
      longtitude: storeById.longtitude,
      description: storeById.description,
      image: storeById.image,
      deleted: storeById.deleted
    })
  }, [storeById.id])

  

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
        
        // console.log(values)
        // Cách 2: ActionAsync từ createActionThunk
        const actionThunk = updateStoreActionAsync(values);
        dispatch(actionThunk)
        
        // getStoreListActionApi();
        
      },
      validationSchema: Yup.object().shape({
        name: Yup.string().required('name cannot be blank!'),
        image: Yup.string().required('image cannot be blank!'),
      }),
    });
    
  return (
    <div className="container">
    <h3>Update Store</h3>
    <form action="" id='form-update-redux' className='container' onSubmit={frmUpdate.handleSubmit}>
        
        <div className='w-75 mx-auto'>
        <div className="form-group">
              <label htmlFor="id">ID</label>
              <input type="text" name='id' className='form-control'  readOnly value={frmUpdate.values.id} onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' className='form-control' value={frmUpdate.values.name} onChange={frmUpdate.handleChange} />
              {frmUpdate.errors.name && <p className='text text-danger'>{frmUpdate.errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="alias">Alias</label>
              <input type="text" name='alias' className='form-control' value={frmUpdate.values.alias} onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name='latitude' className='form-control' value={frmUpdate.values.latitude} onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="longtitude">Longtitude</label>
              <input type="text" name='longtitude' className='form-control' value={frmUpdate.values.longtitude} onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" name='description' className='form-control' value={frmUpdate.values.description} onChange={frmUpdate.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input type="text" name='image' className='form-control' value={frmUpdate.values.image} onChange={frmUpdate.handleChange}/>
              {frmUpdate.errors.image && <p className='text text-danger'>{frmUpdate.errors.image}</p>}
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
      </form>
      
      </div>
  )
}

export default UpdateStore
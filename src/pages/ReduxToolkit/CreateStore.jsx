import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addStoreActionAsync } from '../../redux/reducers/storeReducer';
// import { setSubmitModalFunctionAction } from '../../redux/reducers/modalReducer';

const CreateStore = () => {
    // {
    //     "id": 0,
    //     "name": "string",
    //     "alias": "string",
    //     "latitude": "string",
    //     "longtitude": "string",
    //     "description": "string",
    //     "image": "string",
    //     "deleted": true
    //   }


    const dispatch = useDispatch();
    const frmRegister = useFormik({
      initialValues: {
        name: "",
        alias: "",
        latitude: "",
        longtitude: "",
        description: "",
        image: "",
        deleted: true
      },
      onSubmit: (values) => {
        // console.log(values);
  
        // Cách 2: ActionAsync từ createActionThunk
        const actionThunk = addStoreActionAsync(values);
        dispatch(actionThunk)
      },
    });
  
    useEffect(()=>{
      //mounting component
    //   const payload = frmRegister.handleSubmit;
    //   const action = setSubmitModalFunctionAction(payload);
    //   dispatch(action);
  },[])
    return (
      <form action="" className='container' onSubmit={frmRegister.handleSubmit}>
        <h3>Create Store</h3>
        <div className='w-75 mx-auto'>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input type="text" name='name'  className='form-control' onChange={frmRegister.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="">Alias</label>
              <input type="text" name='alias' className='form-control' onChange={frmRegister.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Latitude</label>
              <input type="text" name='latitude' className='form-control' onChange={frmRegister.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Longtitude</label>
              <input type="text" name='longtitude' className='form-control' onChange={frmRegister.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <input type="text" name='description' className='form-control' onChange={frmRegister.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="">Image</label>
              <input type="text" name='image' className='form-control' onChange={frmRegister.handleChange}/>
            </div>
            <div className="form-group mx-2 my-2">
              <label htmlFor="" className='me-2'>Deleted: </label>
              <div>
              <label htmlFor="true">True</label>
              <input value={true} checked name='deleted' id='true' className='form-check-input mx-2' type='radio' onChange={frmRegister.handleChange}/>
              </div>
              <div>
              <label htmlFor="false">False</label>
              <input value={false} name='deleted' id='false' className='form-check-input mx-2' type='radio' onChange={frmRegister.handleChange}/>
              </div>
            </div>
            <div className="form-group">
              <button className='btn btn-dark mt-2' type='submit'>Create</button>
            </div>
        </div>
      </form>
    )
}

export default CreateStore
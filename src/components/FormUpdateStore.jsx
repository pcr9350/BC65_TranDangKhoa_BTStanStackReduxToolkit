import React from 'react'

const FormUpdateStore = () => {
  return (
    <form action="" className='container' onSubmit={frmUpdate.handleSubmit}>
        
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
      </form>
  )
}

export default FormUpdateStore
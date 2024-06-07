import React from 'react'
import useRedux from '../CustomHook/useRedux'

const ModalRedux = () => {
    const {dispatch, state} = useRedux();
    const {modalTitle, modalContent, onSubmitFunction} = state.modalReducer;


  return (
    <div>
{/* <!-- Modal --> */}
<div className="modal fade" id="modal-redux" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        {modalContent}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary mx-2" onClick={onSubmitFunction}>Submit</button>
      </div>
      </div>
    </div>
  </div>
</div>

    
  )
}

export default ModalRedux
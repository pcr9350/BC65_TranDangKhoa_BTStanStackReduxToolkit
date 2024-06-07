// import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
const useRedux = () => {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);
  return {
    state,dispatch
  }
}

export default useRedux
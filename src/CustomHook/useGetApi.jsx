import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { httpStore } from '../util/config';

// Custom hook ?
/* 
    Custom hook là hook cho ta tự tạo ra (hoặc do các developer khác phát triển) dùng để tái sử dụng lại các logic từ các hook có sẵn trong component
    Custom hook tương tự component nhưng phần return là giá trị thay vì jsx
*/


const useGetApi = (url) => {
    const [res, setRes] = useState({});
    const getApi = async ()=>{
        const result = await httpStore.get(url);
        setRes(result.data);
    }
    useEffect(()=>{
        getApi();
    },[])
  return res;
}

export default useGetApi
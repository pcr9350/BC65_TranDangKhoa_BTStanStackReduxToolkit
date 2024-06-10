import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { storeApi } from '../../services/apiStore/store/storeApi'
import { Space, Table } from 'antd';
import { NavLink } from 'react-router-dom';
import UpdateStore from '../ReduxToolkit/UpdateStore';
import { openModalAction } from '../../redux/reducers/modalReducer';
import useRedux from '../../CustomHook/useRedux';
import { deleteStoreActionAsync, getIdDeleteAction } from '../../redux/reducers/storeReducer';

const QueryStoreList = () => {
    
    const {state,dispatch} = useRedux();
  const arrIdDelete = [];
    // biến 
const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text,record) => <NavLink to={`admin/detail/${record.id}`}>{text}</NavLink>,
    },
    {
        title: 'Họ tên',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span>{text}</span>,
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
        render: (text) => <span>{text}</span>,
      },
      {
        title: 'Hình ảnh',
        dataIndex: 'image',
        key: 'image',
        render: (text) => <img src={`${text}`} height={50} width={50}></img>,
      },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          
          <button
        type="button"
        className="btn btn-primary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#modal-redux"
        onClick={()=>{
          const payload = {
            modalTitle: 'Update Store',
            modalContent: <UpdateStore id={record.id} />,
          };
          
          dispatch(openModalAction(payload));
        }}
      >
        Update
      </button>
  
          <button className='btn btn-danger' onClick={()=>{
            try {
              const arrID = [];
              arrID.push(record.id);
              dispatch(getIdDeleteAction(arrID));
              const actionThunk = deleteStoreActionAsync(arrID);
              dispatch(actionThunk);

              // const deleteStore = storeApi.deleteStore(arrID);
              // console.log(deleteStore)
              // Handle successful deletion
            } catch (error) {
              // Handle deletion errors
              console.error("Error deleting store:", error);
            }
           
          }}>Delete</button>
        </Space>
      ),
    },
  ];

  const {isLoading, isPending, data, error} = useQuery({
    queryKey:['storeListApi'],
    queryFn: storeApi.getAll,
    staleTime: 3 * 60 * 1000, // 3 phút sau dữ liệu mới cũ
    cacheTime: 5 * 60 * 1000, // thời gian lưu dữ liệu trong cache
    refetchOnWindowFocus: true, //kích vào cửa sổ browser thì queryFn chạy
})

  return (
    <div className='container'>
        <h3>Query Store List</h3>

        {isLoading ? <span>Loading...</span> :
        <Table columns={columns} dataSource={data} loading={isLoading}/>}
    </div>
  )
}

export default QueryStoreList
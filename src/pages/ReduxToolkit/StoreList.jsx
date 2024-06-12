import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { NavLink } from "react-router-dom";
import useRedux from "../../CustomHook/useRedux";
import {
  deleteStoreActionAsync,
  getIdDeleteAction,
  getStoreListActionApi,
} from "../../redux/reducers/storeReducer";
import UpdateStore from "./UpdateStore";
import { openModalAction } from "../../redux/reducers/modalReducer";
import CreateStore from "./CreateStore";

const StoreList = () => {
  const { state, dispatch } = useRedux();
  const { storeList } = state.storeReducer;

  useEffect(() => {
    const actionThunk = getStoreListActionApi();
    dispatch(actionThunk);
  }, []);

  // biến
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => 
        <span>{text}</span>
      ,
    },
    {
      title: "Họ tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) => <img src={`${text}`} height={50} width={50}></img>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            type="button"
            className="btn btn-primary mx-2"
            data-bs-toggle="modal"
            data-bs-target="#modal-redux"
            onClick={() => {
              const payload = {
                modalTitle: "Update Store",
                modalContent: <UpdateStore id={record.id} />,
              };

              dispatch(openModalAction(payload));
            }}
          >
            Update
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              try {
                const arrID = [record.id];
                dispatch(getIdDeleteAction(arrID));
                const actionThunk = deleteStoreActionAsync(arrID);
                dispatch(actionThunk);
                
                // Handle successful deletion
              } catch (error) {
                // Handle deletion errors
                console.error("Error deleting store:", error);
              }
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className="container">
      <CreateStore />
      <hr />
      <h3>Store List</h3>
      <Table columns={columns} dataSource={storeList} />;
    </div>
  );
};

export default StoreList;

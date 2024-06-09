import React, { useState } from 'react';
import useRoute from '../CustomHook/useRoute'
import {
    BackwardFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

// phần biến
const { Header, Sider, Content } = Layout;

const AdminTemplateTanStack = () => {
    const [collapsed, setCollapsed] = useState(false);

    const {navigate} = useRoute();

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <Layout>
        <Sider style={{minHeight: '100vh'}} trigger={null} collapsible collapsed={collapsed}>
          {/* <div className="demo-logo-vertical" /> */}
          <div className='logo m-2 mt-5'>
                <img src="https://i.pravatar.cc?u=1" className='rounded rounded-circle mx-auto d-block' width={50} height={50} alt="" />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Query User Management',
                onClick: (event) => {
                    navigate('/admin-tanstack/query-store-list')
                }
              },
              {
                key: '2',
                icon: <UserAddOutlined />,
                label: 'Query Create User',
                onClick: (event) => {
                    navigate('/admin-tanstack/query-create-store')
                }
              },
            //   {
            //     key: '3',
            //     icon: <UserOutlined />,
            //     label: 'RQ-User-List',
            //     onClick:(event)=>{
            //       navigate('/admin/react-query-users')
            //   }
            //   },
            //   {
            //     key: '4',
            //     icon: <UserAddOutlined />,
            //     label: 'RQ-Create-User',
            //     onClick:(event)=>{
            //       navigate('/admin/react-query-create-user')
            //   }
            //   },
            //   {
            //     key: '5',
            //     icon: <UserAddOutlined />,
            //     label: 'RQ-User-paging',
            //     onClick:(event)=>{
            //       navigate('/admin/react-query-user-paging')
            //   }
            //   },
            //   {
            //     key: '6',
            //     icon: <UserOutlined />,
            //     label: 'RQ-User-List-Mockapi',
            //     onClick:(event)=>{
            //       navigate('/admin/react-query-users-mockapi')
            //   }
            //   },
              {
                key: '7',
                icon: <BackwardFilled />,
                label: 'Về trang chủ',
                onClick: (event) => {
                    navigate('/admin-tanstack/query-store-list')
                }
              },
              
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
}

export default AdminTemplateTanStack
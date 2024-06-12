import React from 'react'
import { NavLink } from 'react-router-dom'
import useRedux from '../CustomHook/useRedux'

const HeaderHome = () => {
// cần lấy state login về
const {state, dispatch} = useRedux();
// const {userLogin} = state.userReducer;

// const renderLoginLink = () => {
//   if (userLogin) {
//     // nếu có dữ liệu trên store thì là đăng nhập rồi
//     return <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/user/profile">Hello {userLogin.email}</NavLink>
//   }
//   // chưa có dữ liệu trên store thì là link login
//   return <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} to="/login">Login</NavLink>

// }


  return (   
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-warning">
    <NavLink className="navbar-brand" to="/">Store Admin</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse row navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-10" style={{fontSize:'13px'}}>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} aria-current="page" to="/admin/store-list">Redux Toolkit</NavLink>
        </li>
        <li className="nav-item">
          <NavLink style={({isActive})=>isActive ? {borderRadius:'5px'}:{}} className={({isActive})=>isActive ? 'nav-link bg-white text-dark' : 'nav-link'} aria-current="page" to="/admin-tanstack/query-store-list">Tanstack Query</NavLink>
        </li>
        
       
        {/* <li className="nav-item">
          {renderLoginLink()}
        </li> */}
        
       
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
   
    </div>
  </div>
</nav>


  )
}

export default HeaderHome
import React from 'react'
import HeaderHome from '../components/HeaderHome'
import { Outlet } from 'react-router-dom'
// import ResponsiveItem from '../HOC/ResponsiveItem'
// import BottomTabMobile from '../components/BottomTabMobile'

// const footerDesktop = <footer className='fs-1 bg-dark text-white text-center p-3'>
// Footer
// </footer>

const HomeTemplate = () => {
  return (
    <>
      <HeaderHome />
      <div className="content" style={{ minHeight: 650 }}>
        <Outlet />
      </div>
      <footer className="fs-1 bg-dark text-white text-center p-3">
        Footer
      </footer>
      {/* <ResponsiveItem component={footerDesktop} mobileComponent={<BottomTabMobile />} /> */}
    </>
  );
}

export default HomeTemplate
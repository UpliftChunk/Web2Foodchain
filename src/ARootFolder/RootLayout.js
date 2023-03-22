import React from 'react'
import Navbar from './RootNavbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
        <Navbar/>
        
        {/* dynamic content */}
        <Outlet/>

        {/* constant */}
        <Footer/>
    </div>
  )
}

export default RootLayout
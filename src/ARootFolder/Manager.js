import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';

function Manager() {
  return (
    <div>

    {/* navBar */}
      <Navbar>
          <Nav className="d-flex navbarContainer ms-auto me-auto">
            <Link className='nav-link' to="">Operate Farmer Orders</Link>
            <Link className='nav-link' to="mnlcfrorders">Locate Farmer Stock</Link>
          </Nav>
      </Navbar>
      <hr className='mt-0'></hr>
      
      {/* important */}
      <Outlet/>
    </div>
  )
}

export default Manager
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';
function Farmer() {
  return (
    <div>

    {/* navBar */}
      <Navbar>
          <Nav className="d-flex navbarContainer ms-auto me-auto ">
            <Link className='nav-link' to="">Other Farmers</Link>
            <Link className='nav-link' to="frcnorder">Check Orders</Link>
          </Nav>
      </Navbar>
      <hr className='mt-0'></hr>

      <Outlet/>
    </div>
  )
}

export default Farmer
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';

function Consumer() {
  return (
    <div>

    {/* navBar */}
      <Navbar>
          <Nav className="d-flex navbarContainer ms-auto me-auto ">
            <Link className='nav-link' to="">FoodHub</Link>
            <Link className='nav-link' to="cnplaceorder">Place Order</Link>
          </Nav>
      </Navbar>
      <hr className='mt-0'></hr>

      <Outlet/>
    </div>
  )
}

export default Consumer
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function RootNavbar() {
  return (
    <Navbar className='bg-light'>
          <Nav className="d-flex navbarContainer ms-auto ">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/farmer">Farmer</Link>
            <Link className='nav-link' to="/consumer">Consumer</Link>
            <Link className='nav-link' to="/manager">Manager</Link>
          </Nav>
      </Navbar>
  );
}

export default RootNavbar;
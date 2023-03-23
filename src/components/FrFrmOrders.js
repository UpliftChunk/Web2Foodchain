import React from 'react'
import {Link, Outlet} from 'react-router-dom';


function FrFrmOrders() {
  let left = {textAlign:"start", marginLeft:"5px"}
  return (
    <div>
      <header style={left}>Sell crop to foodhub</header>
      <Link className='btn btn-primary' to="addcrop">Sell crop</Link>
      <Outlet props={true}/>

    </div>
  )
}

export default FrFrmOrders
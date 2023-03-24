import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react';

function FrFrmOrders() {
  let left = {textAlign:"start", marginLeft:"5px"}
  let [fOrds, setfOrds] = useState([
    {
       variety:" ",
       quantity:" ",
       date:" "
    }
   ])

 useEffect(() => {
    // make http get request
    // write side effect only in use effect
    fetch("http://localhost:4000/farmer1orders").then(response => response.json())
    .then(usersData=>setfOrds(usersData))
    .catch(error => console.log("error is",error) )
   },[])   



  return (
    <div>
      <header style={left}>Sell crop to foodhub</header>
      <Link className='btn btn-primary mb-4' to="addcrop">Sell crop</Link>
      <Outlet props={true}/>

      <header style={left}>Your Pending Orders...(We are reaching up to collect your Order)</header>
      
      <div className='row m-1'>
        {
          fOrds.map(Ord=>
            <div className='d-flex card flex-row justify-content-between m-1 bg-light'>
              <div className='d-flex justify-content-around flex-row p-1 rounded w-75'>
              <div>Variety:  {Ord.variety} </div>
              <div>Quantity:{Ord.quantity} </div>
              <div>Order Date: {Ord.date}  </div>
              </div>
              <div className='btn btn-secondary '>Processing</div>
            </div>
          )
        }

      </div>

    </div>
  )
}

export default FrFrmOrders
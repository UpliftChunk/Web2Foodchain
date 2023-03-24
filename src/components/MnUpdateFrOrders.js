import React from 'react'
import { useEffect, useState } from 'react';
function MnUpdateFrOrders() {
    let [AllfOrds, setAllfOrds] = useState([
      {
        username:" ",
        variety:" ",
        quantity:" ",
        date:" "
      }
    ])

    useEffect(() => {
      // make http get request
      // write side effect only in use effect
      fetch("http://localhost:4000/allFrOrders").then(response => response.json())
      .then(usersData=>setAllfOrds(usersData))
      .catch(error => console.log("error is",error) )
    },[])   

   

    return (
      <div>
        <div className='row m-1'>
          {
            AllfOrds.map(Ord=>
              <div className='d-flex card flex-row justify-content-between m-1 bg-light'>
                <div className='card-header'>@{Ord.username}</div>
                <div className='d-flex justify-content-around flex-row p-1 rounded w-75'>
                <div>Variety:  {Ord.variety} </div>
                <div>Quantity:{Ord.quantity} quintals</div>
                <div>Order Date: {Ord.date}  </div>
                </div>
                <div className='btn btn-primary'>Update Status: Success</div>
              </div>
            )
          }

        </div>

      </div>
    )

}

export default MnUpdateFrOrders
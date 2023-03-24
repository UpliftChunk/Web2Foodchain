import React from 'react'
import { useState, useEffect } from 'react'
import './CnFoodHub.css'
function CnFoodHub() {

  let [itemscount, setitemcount]= useState(0)
  let [vegis, setvegis] = useState([
     {
        photo:' ',
        variety:' ',
        price:' '
     }
  ])

  let modifyitemcount =() => {
      setitemcount(itemscount+1)
  }
     
  useEffect(() => {
     // make http get request
     // write side effect only in use effect
     fetch("http://localhost:4000/vegis").then(response => response.json())
     .then(usersData=>setvegis(usersData))
     .catch(error => console.log("error is",error) )
  },[])   


 return (
    <div>
        {/*vegi cards */}
     <div className="text-white">
        <h2 className="countbox">Cart Size: {itemscount} items</h2>
        <div className="row text-black m-3">
           {
              vegis.map(vegiObj=><div className="col">
               <div className="card card1 mb-2" >
                   <div className="card-header"> {vegiObj.variety} </div>  
                   <img className="vegePhoto" src={vegiObj.photo} alt='Card ImageTop'/>
                   <div className="card-footer d-flex justify-content-between p-2">
                     <div className='badge text-dark' style={{fontSize:"small"}}>
                      Cost : ₹{vegiObj.price} /kg  
                     </div> 
                     <button className="d-flex btn btn-info ms-auto" onClick={modifyitemcount}> Add to Cart  </button> 
                   </div>
                 </div> 
               </div>)
           }
        </div>
     </div>

  

     </div>
 )

}

export default CnFoodHub
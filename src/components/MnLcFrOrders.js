import React from 'react'
import './MnLcFrOrders.css';
import {FaTruck} from 'react-icons/fa';
import {GiTomato} from 'react-icons/gi';


function MnLcFrOrders() {
  return (
    
    <div className="userinterface p-1">
      <div>MnLcFrOrders</div>
      <div className="display-6 title">FoodHub is aware of crop locations</div>
      <hr />
      <div className="w-100 m-auto p-2">
        {/* //*Map to View scrap*/}
        <div className="py-3 lead division2">
          <div className="sticky-top bg-white w-100 text-end">FoodHub <FaTruck/> ...(hover for 1s to view quantity in map)</div> 
          <div className="d-flex justify-content-around Home mx-5">
              <GiTomato/>
            <div className="Thebackground">
              <img className="BGmap" src="https://i.postimg.cc/26rLM0TC/Page-Scrap-Picker-Map.jpg" alt='map'/>   
              <div title="Ramulu 
                weight: 25 quintals" className="location1">
                  afads
                </div>
              <div title="tomato 
                weight: 32 quintals" className="location2">
                </div>
              <div title="Kishore 
                weight: 12 quintals" className="location3">
                  
                </div>
              <div title="paper item 
                weight: 28 quintals" className="location4">
                  
                </div>
              <div title="cable item 
                weight: 10 quintals" className="location5">
                  
                </div>
              <div title="tomato 
                weight: 42 quintals" className="location6 ico">
                  <GiTomato style={{zIndex:"10"}}/>
                </div>
              <div title="paper item 
                weight: 13 quintals" className="location7">
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MnLcFrOrders
import './App.css';
// import {useState, useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './ARootFolder/RootLayout';
import Home from './ARootFolder/Home';
import Consumer from './ARootFolder/Consumer';
import Farmer from './ARootFolder/Farmer';
import Manager from './ARootFolder/Manager';
import CnFoodHub from './components/CnFoodHub';
import CnPlaceOrder from './components/CnPlaceOrder';
import FrCnOrder from './components/FrCnOrder';
import FrFrmOrders from './components/FrFrmOrders';
import MnLcFrOrders from './components/MnLcFrOrders';
import MnUpdateFrOrders from './components/MnUpdateFrOrders';

import PlaceOrderModal from './components/farmerComp/PlaceOrderModal';

function App() {
  /*
  // const {vegis, setVegis} = useState([
  //   {
  //     photo: '',
  //     variety: '',
  //     price:''
  //   }
  // ])
  // useEffect(() =>{
  //   fetch('/VegStock').then(res=>{
  //     if(res.ok){
  //       return res.json();
  //     }
  //   }).then(jsonRes => setVegis(jsonRes))
  //   .catch(err => console.error(err));
  // })
  // console.log(vegis)
  */
  const router = createBrowserRouter([
    {
      path : "/",
      element :<RootLayout/>,
      children:[
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/farmer',
          element : <Farmer/>,
          children:[
            {
              path : '',
              element : <FrFrmOrders/>, 
              children: [
                {
                  path : 'addcrop',
                  element : <PlaceOrderModal/>
                }
              ]
            },
            {
              path : 'frcnorder',
              element : <FrCnOrder/> 
            }
          ]
        },
        {
          path : '/consumer',
          element : <Consumer/>,
          children:[
            {
              path : '',
              element : <CnFoodHub/> 
            },
            {
              path : 'cnplaceorder',
              element : <CnPlaceOrder/> 
            }
          ]
        },
        {
          path : '/manager',
          element : <Manager/>,
          children:[
            {
              path : '',
              element : <MnUpdateFrOrders/> 
            },
            {
              path : 'mnlcfrorders',
              element : <MnLcFrOrders/> 
            }
          ]
        }
      ]
    }
  ])
  
  return (
    <div className="App">
        {/* provide browser router */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;

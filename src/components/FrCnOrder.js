import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from 'react';

function FrCnOrder() {
  let left = {textAlign:"start", marginLeft:"5px"}
  let [Retailers, setRetailers] = useState([
    {
       photo:" ",
       username:" ",
       location:" ",
       description:" ",
       requirements:" ",
       Variety:" ",
       Quantity:" ",
       MyBudget:" ",
       CurrentBid:" ",
    }
 ])
    
 useEffect(() => {
    // make http get request
    // write side effect only in use effect
    fetch("http://localhost:4000/allCnOrders").then(response => response.json())
    .then(CnOrders=>setRetailers(CnOrders))
    .catch(error => console.log("error is",error) )
 },[])   



  return (
    <div>
      <header style={left}>Consumers have Placed the below orders..</header>

      {
        Retailers.map(retailer=>
          <div className='mt-4 border m-auto' style={{width:'70%', maxWidth:"600px"}}>
          <Row>
            <Col xs={4}>
              <img src={retailer.photo} style={{height:'230px', objectFit:'cover'}} alt='userlogo'/>
            </Col>
            <Col className='m-0 p-0'>
              <Card>
                <Card.Header className='d-flex flex-row justify-content-between'>
                  <div>@{retailer.username}</div>
                  <div style={{fontSize:"small"}}>Location:{retailer.location}</div>
                  </Card.Header>
                <Card.Body>
                  <Card.Title>{retailer.description}</Card.Title>
                  <Card.Text>
                    Requirements: {retailer.requirements}
                    <div className='d-flex justify-content-around'>
                    <span>Variety: <span style={{fontWeight:"bold"}}>{retailer.Variety}</span> </span> 
                    <span> Quantity: <span style={{fontWeight:"bold"}}>{retailer.Quantity}</span> quintals </span>
                    </div>
                    <div>My Budget: {retailer.MyBudget} </div>
                  </Card.Text>
                  <div className='d-flex flex-row justify-content-around'>
                    <div className='btn text-white bg-secondary'>Current Bid: ₹{retailer.CurrentBid} </div>
                    <Button variant="success">Make Bid</Button>
                  </div>
                </Card.Body>
            </Card>
            </Col>
          </Row>

          </div>
        )
      } 

    </div>
  )
}

export default FrCnOrder
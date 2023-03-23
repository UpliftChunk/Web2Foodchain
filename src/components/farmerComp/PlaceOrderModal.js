import React from 'react'
import {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function PlaceOrderModal(props) {
  const [show, setShow] = useState(props);
  const handleClose = () => setShow(false);

  let navigate= useNavigate();
  let NormalState= ()=>{
    navigate("/farmer/")
  }


   return (
        <Modal show={show} onHide={handleClose}>
              <Modal.Body className="modal-body">
                <Modal.Header  className="card-title heading fw-bold fs-6 lh-sm">Sell Your Crop to Foodhub</Modal.Header>
                <hr className="m-0" />
                {/* list */}
                <Modal.Body className="fs-5">
                  <label htmlFor="inputVariety">Variety</label>
                  <select id="inputVariety" className="form-control">
                    <option selected>Choose...</option>
                    <option>Tomato</option>
                    <option>Potato</option>
                    <option>Brinjal</option>
                    <option>Carrot</option>
                    <option>BeetRoot</option>
                  </select>
                  <label htmlFor="inputQuantity">Quantity</label>
                  <input type="number" className="form-control" id="inputQuantity" placeholder="in quintals" />                 
                  <label htmlFor="inputphoto">photo</label>
                  <input type="text" className="form-control" id="inputphoto" placeholder="place url" />
                </Modal.Body>
                {/* button */}
                <Modal.Footer className="d-flex justify-content-around mt-3">
                  <button className="btn rounded-pill text-white btn-secondary" onClick={NormalState} >close</button>
                  <button className="btn rounded-pill text-white btn-success" onClick={NormalState}>Place Request to PickUp</button>
                </Modal.Footer>
              </Modal.Body>
            
        </Modal>
    );
}

export default PlaceOrderModal

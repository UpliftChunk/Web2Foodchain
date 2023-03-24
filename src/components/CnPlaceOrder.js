import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function CnPlaceOrder() {
  return (
    <div>
      <header className='mb-4'>Place Your Order</header>

      <Form >
        <Form.Group as={Row} className="mb-3 ms-auto me-auto" controlId="formPlaintext">
          <Form.Label column sm="2">
            Quantity
          </Form.Label>
          <Col sm="8">
            <Form.Control placeholder="in quintals" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 ms-auto me-auto" controlId="formPlaintext">
          <Form.Label column sm="2">
            Variety
          </Form.Label>
          <Col sm="8">
            <Form.Select>
                <option>Choose...</option>
                <option>Tomato</option>
                <option>Potato</option>
                <option>Brinjal</option>
                <option>Carrot</option>
                <option>BeetRoot</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 ms-auto me-auto" controlId="formPlaintext">
          <Form.Label column sm="2">
            Budget
          </Form.Label>
          <Col sm="8">
            <Form.Control placeholder="(in INR)" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 ms-auto me-auto" controlId="formPlaintext">
          <Form.Label column sm="2">
            Description
          </Form.Label>
          <Col sm="8">
            <Form.Control placeholder="(optional)" />
          </Col>
        </Form.Group>

        <Button variant="success" type="submit">
        Submit
      </Button>

      </Form>
    </div>
  )
}

export default CnPlaceOrder
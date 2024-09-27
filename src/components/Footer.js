import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Footer() {
  return (
    <div>
        <div className='position-relative mt-5 text-start p-4'>
            <div className='position-absolute top-0 end-0 translate-middle'>
             <img src='./sofa.png' alt='' height={300} width={300}/>
            </div>
            <h3><i className="fa-regular fa-envelope text-secondary"></i>Subscribe to newsletter</h3>
            <Form>
      <Row>
        <Col md={3}>
          <Form.Control placeholder="Enter your name" />
        </Col>
        <Col md={3}>
          <Form.Control placeholder="Enter your Email" />
        </Col>
        <Col>
          <Button variant='success' className='px-4'><i className="fa-brands fa-telegram"></i></Button>
        </Col>
      </Row>
    </Form>
    <div>
        <Container>
            <a href='#'><h1>Furniture</h1></a>
            
        </Container>
    </div>
        </div>
      
    </div>
  )
}

export default Footer

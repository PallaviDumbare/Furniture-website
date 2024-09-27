import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



function Modern() {
    return(
    <div>
         
    
      <Row className='bg-success text-white p-3 text-start'>
        <Col>
             <h1 className='fw-bold w-75 mt-5'>Modern Interior Design Studio</h1>
             <p className='fs-6 mt-4 mb-4'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
             </p>
        <Button variant="warning rounded-pill fw-bold p-3 w-25 mb-4">Shop now</Button>
        <Button variant="outline-light rounded-pill fw-bold p-3 ms-4 w-25 mb-4">Exlpore</Button>
        </Col>
        <Col>
           <img src='./couch.png' alt='' className='img-fluid w-100 mx-auto d-block'/>
        </Col>
      </Row>

  
    </div>



    );

}
export default Modern

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div>
      <Container>
        <Row className='mt-4 mb-4'>
          <h1 className='text-center'>Our Team</h1> 
      <Col>
          <Card style={{ width: '16rem' }} className='border-0'>
           <Card.Img variant="top" src="./person_1.jpg" />
            <Card.Body className='text-start'>
              <Card.Title>
                <h4>Lawson Arnold</h4>
                <p className='text-secondary'>CEO, Founder,Atty</p>
            </Card.Title>
              <Card.Text>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics,a large language ocean.</p>
                 <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
    <Col>
    <Card style={{ width: '16rem' }} className='border-0'>
           <Card.Img variant="top" src="./person_2.jpg" />
            <Card.Body className='text-start'>
              <Card.Title>
                <h4>Lawson Arnold</h4>
                <p className='text-secondary'>CEO, Founder,Atty</p>
            </Card.Title>
              <Card.Text>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics,a large language ocean.</p>
                 <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
              </Card.Text>
            </Card.Body>
          </Card>
    </Col>
    <Col>
    <Card style={{ width: '16rem' }} className='border-0'>
           <Card.Img variant="top" src="./person_3.jpg" />
            <Card.Body className='text-start'>
              <Card.Title>
                <h4>Lawson Arnold</h4>
                <p className='text-secondary'>CEO, Founder,Atty</p>
            </Card.Title>
              <Card.Text>
                 <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics,a large language ocean.</p>
                 <a href='#' className='text-dark text-decoration-underline'>Learn More</a>
              </Card.Text>
            </Card.Body>
          </Card>
    </Col>
     </Row>
     </Container> 
    </div>
  )
}

export default About

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';


function Blog() {
  return (
    <div>
      <container>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="./" />
             <Card.Body>
               <Card.Title>First time home owner ideas</Card.Title>
               <Card.Text>
                by <b>Kristian Botson</b> on <b>Dec 19,20021</b>
               </Card.Text>

            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
               <Card.Title>How to keep your furniture clean</Card.Title>
               <Card.Text>
                by <b>Robert Fox</b> on <b>Dec 15,20021</b>
               </Card.Text>

            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
               <Card.Title>Small space furniture apartment items</Card.Title>
               <Card.Text>
                by <b>Kristian Botson</b> on <b>Dec 12,20021</b>
               </Card.Text>

            </Card.Body>
          </Card>
          </Col>
        </Row>
      </container>
    </div>
  )
}

export default Blog

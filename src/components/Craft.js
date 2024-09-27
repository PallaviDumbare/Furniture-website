import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Craft() {
  return (
    <div>
        <Container>
            <div className='d-flex align-items-center justify-center'>
                <div className='p-2'>
                    <h1>Crafted with excellant material</h1>
                    <p>Donec vibe eith fshjfmd mmmmmm fgrh etry susic fje uuuuuuuuuu iiii loveee uhhhhh tejallll</p>
                    <Button variant="dark" className='rounded-pill px-4 fs-4'>Explore</Button>
                </div>
                <div className='p-2'>
                <Card style={{ width: '16rem' }} className='border-0'>
                                <Card.Img variant="top" src='./product-3.png' />
                                  <Card.Body>
                                    <Card.Title>NOrdiac chair</Card.Title>
                                      <Card.Text>
                                        <h4>$ 50.00</h4>
                                      </Card.Text>
                                     <Button variant="dark" className='btn1 rounded-circle w-25 fs-3'>+</Button>
                                 </Card.Body>
                            </Card>
                </div>
                <div className='p-2'></div>
                <div className='p-2'></div>
            </div>
        </Container>
      
    </div>
  )
}

export default Craft

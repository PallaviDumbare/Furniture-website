import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function Header()
{
    return (
        <div>
        <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Furniture</Navbar.Brand>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/shop" >Shop</Nav.Link>
            <Nav.Link href="/about">About US</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact US</Nav.Link>
            <Nav.Link href="/user" ><i className="fa-solid fa-person"></i></Nav.Link>
            <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}
export default Header
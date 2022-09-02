import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../images/logos/Group 1329.png'
import { Link } from "react-router-dom";
import "./Header.css"
import auth from '../../../firebase/Firebase.init';
import {signOut  } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
    return (
        <>
         <Navbar  expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home"><img src={logo} className="logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
           <Nav.Link as={Link} to="/volunteers" >Volunteers</Nav.Link>
          
            {
              user && <Nav.Link as={Link} to="/add-charity" >Add Charity</Nav.Link>
            }
            {
              user?.email ? <><Nav.Link><b>{user?.displayName}</b> </Nav.Link><Nav.Link onClick={()=> signOut(auth)}><Button >Logout</Button></Nav.Link></>
               : <><Nav.Link as={Link} to="/register"><Button variant="primary">Register</Button></Nav.Link>
              <Nav.Link href="#link"><Button variant="secondary">Admin</Button></Nav.Link></>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Header;
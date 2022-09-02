import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Login.css"
import auth from '../../firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
  const googleIcon = <FontAwesomeIcon icon={faGoogle} />

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
   
   let navigate = useNavigate();
   const location = useLocation()
   const from = location.state?.from.pathname || "/";
  
   if(user){
    return  <Navigate to={from} replace={true} />
   }
   
    return (
        <Container>
        <div className="form-size">
        <Form>
         <h2>Please Login</h2>
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" />
     <Form.Text className="text-muted">
       We'll never share your email with anyone else.
     </Form.Text>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Link to="/register">Don't Have An Account?</Link>
   </Form.Group>
   <Button variant="primary" type="submit">
     Login
   </Button>
  
 </Form>
 <div className="social-logins mt-5 text-center">
  <button className='btn'>{facebookIcon} </button>
  <button className='btn' onClick={()=> signInWithGoogle()}>{googleIcon} </button>
 </div>

        </div>
     </Container>
    );
};

export default Login;
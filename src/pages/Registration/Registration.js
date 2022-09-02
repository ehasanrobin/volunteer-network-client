import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import './Registration.css'
const Registration = () => {
    return (
        <Container>
           <div className="form-size">
           <Form>
            <h2>Please Register</h2>
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
      <Link to="/login">Already Have An account?</Link>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
     
    </Form>
   
           </div>
        </Container>
    );
};

export default Registration;
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from "react-router-dom";
import auth from '../../firebase/Firebase.init';
import './Vregistration.css';
const Vregistration = () => {
  const [user] = useAuthState(auth);
   let navigate = useNavigate();
    const {id} = useParams();
    const [event, setEvent] = useState({});
    useEffect(()=> {
      fetch(`https://fierce-brook-97765.herokuapp.com/events/${id}`)
      .then(res => res.json())
      .then(data => setEvent(data));
    },[])
    const handleVolunteer = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const date = event.target.date.value;
      const description = event.target.description.value;
      const events = event.target.events.value;
      const img = event.target.img.value;
      
      const volunterForm = {
        name: name,
        email: email,
        date: date,
        description: description,
        img: img,
        event: events,
        
      }
      // POST request using fetch() for volunteer form
fetch("https://fierce-brook-97765.herokuapp.com/volunteer", {    
  // Adding method type
  method: "POST",
  // Adding body or contents to send
  body: JSON.stringify(volunterForm), 
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }

})
.then(response => response.json())
.then(json => console.log(json));
event.target.reset();
navigate("/events", { replace: true });
    }
    return (
        <div>
            <Container>
           <div className="form-size">
           <Form onSubmit={handleVolunteer}>
            <h2>Registrater as a Volunteer </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Full Name" required />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' value={user?.email} disabled placeholder="Email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>date</Form.Label>
        <Form.Control type="date" name='date' placeholder="Date" required />
        <Form.Control type="hidden" name='img' value={event.img} placeholder="Date"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name='description' placeholder="Description" required />
      </Form.Group>
      <Form.Select name='events' aria-label="Default select example">
      <option  value={event.id} >{event.name}</option>
      
    </Form.Select>
      
      <Button variant="primary" className='mt-3' type="submit">
        Submit
      </Button>
     
    </Form>
   
           </div>
        </Container>
        </div>
    );
};

export default Vregistration;
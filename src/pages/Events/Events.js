import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/Firebase.init';
import "./Events.css";
const Events = () => {
    const [user,loading] = useAuthState(auth);
    const [events,setEvents] = useState([]);
    useEffect(()=> {
        fetch(`http://localhost:5000/volunteer?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setEvents(data));
    },[events])

    const handleDel = id => {
       const proceed = window.confirm("Are you sure? want to cancel this event?");
       if(proceed){
         fetch(`http://localhost:5000/volunteer/${id}`, {
  method: 'DELETE',
})
.then(res => res.json()) // or res.json()
.then(res => console.log(res))
       }
    }
    return (
        <div className='evens-table'>
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5">
                    {
                        events.map(event => <Col key={event._id}>
                        <Card className='volunteer-cart' >
                            <Card.Img variant="top" src={event.img} />
                            <Card.Body>
                            <Card.Title className='text-uppercase'>{event.name}</Card.Title>
                            <h5>{event.date}</h5>
                            <Card.Text>
                                {event.description}
                               
                            </Card.Text>
                             <Button className="btn btn-secondary" onClick={()=>handleDel(event._id)}>cancel</Button>
                            </Card.Body>
                        </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Events;
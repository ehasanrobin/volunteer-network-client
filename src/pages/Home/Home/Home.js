import React, { useEffect, useState } from 'react';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Service from '../Service/Service';
import "./Home.css";

const Home = () => {
    const [services,setServices] = useState([]);

    useEffect(()=> {
        fetch("https://fierce-brook-97765.herokuapp.com/events")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <section className='home-section'>
           <Container className='text-center'>
            <h1 className='text-capitalize pt-5'>I grow by helping people in need</h1>
                <form action="" className='py-3 search-form'>
                <InputGroup className="mb-3">
                    <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" className='px-4' id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
            </form>
            <div className=''>
                <Row xs={1} md={2} xl={4}>
                     {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
                </Row>
            </div>
            </Container>
        </section>
    );
};

export default Home;
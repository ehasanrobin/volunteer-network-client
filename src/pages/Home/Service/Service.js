import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
const Service = ({service}) => {
    return (
       <>
      <Col>
      <Card style={{ width: '18rem' }} as={Link} to={`/volunteer/${service._id}`}>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          
        </Card.Body>
      </Card>
      </Col>
       </>
      
    );
};

export default Service;
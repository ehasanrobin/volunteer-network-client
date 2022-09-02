import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const Volunteers = () => {
    const [volunteers,setVolunteers] = useState([]);
    useEffect(()=> {
        fetch("http://localhost:5000/volunteers")
        .then(res => res.json())
        .then(data => setVolunteers(data))
    },[])
    return (
        <div className=' mt-5'>
            <Container>
                  <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>FUll Name</th>
          <th>Email</th>
          <th>Event</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {
            volunteers.map(volunteer => <tr>
                                        <td>{volunteer.name}</td>
                                        <td>{volunteer.email}</td>
                                        <td>{volunteer.event}</td>
                                        <td>{volunteer.date}</td>
                                        </tr>
                                        
            )
        }
        
       
      </tbody>
    </Table>
            </Container>
        </div>
    );
};

export default Volunteers;
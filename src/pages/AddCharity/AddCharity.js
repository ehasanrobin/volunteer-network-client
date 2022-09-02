import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddCharity = () => {

    const handleCharity = event => {
        event.preventDefault();
        const name = event.target.charity.value;
        const img = event.target.img.value;
    
    const charitydoc = {
        name: name,
        img: img,
    }
    fetch('https://fierce-brook-97765.herokuapp.com/events', {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(charitydoc)
}).then(res => res.json())
  .then(res => console.log(res));


    }
    return (
        <div>
            <Container>
                <div className="form-size">
           <Form onSubmit={handleCharity}>
            <h2>Add Charity</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Charity Name</Form.Label>
        <Form.Control type="text" name="charity" placeholder="Charity name" autoComplete='off' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="img" placeholder="Image URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
     
      </Form.Group>
      <Button variant="primary"  type="submit">
        Add
      </Button>
     
    </Form>
   
           </div>
            </Container>
        </div>
    );
};

export default AddCharity;
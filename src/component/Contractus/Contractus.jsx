import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contractus = () => {
    return (
        <div>
            <div>
                <h3 className='container text-center mt-5'>Contract us for big order</h3>
                <Form className='container'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Your Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write here</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant='primary'>Send</Button>
                </Form>
            </div>
        </div>
    );
};

export default Contractus;
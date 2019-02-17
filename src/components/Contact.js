import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {

    constructor() {
        super();
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            message: this.state.message
        }

        console.log(data);
    }

    render() {
        return(
            <div id="Contact" style={{ background: '#1a1a1a', 'padding': '5% 0 5% 0' }}>
                <Container style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col>
                            <h1 style={{ color: '#cccccc' }}>Contact</h1>
                        </Col>
                        <Col style={{ paddingLeft: '2%', paddingRight: '2%' }}>
                            <Form
                                onSubmit={this.handleSubmit}
                                style={{ 
                                    color: '#cccccc', 
                                    display: 'block', 
                                    marginLeft: 'auto', 
                                    marginRight: 'auto'
                                }}
                            >
                                <Form.Row>
                                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{ width: '100%' }}>
                                            First Name
                                        </Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="first_name"
                                            placeholder="John"
                                            onChange={this.handleChange} 
                                            style={{ background: 'inherit', color: '#cccccc' }} 
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                        <Form.Label style={{ width: '100%' }}>
                                            Last Name
                                        </Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="last_name"
                                            placeholder="Smith"
                                            onChange={this.handleChange} 
                                            style={{ background: 'inherit', color: '#cccccc' }} 
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ width: '100%' }}>
                                        <FontAwesomeIcon icon="envelope" style={{ marginRight: '5%' }} />
                                        Email Address
                                    </Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="name@example.com" 
                                        name="email" 
                                        onChange={this.handleChange} 
                                        style={{ background: 'inherit', color: '#cccccc' }} 
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ width: '100%' }}>
                                        <FontAwesomeIcon icon="phone" style={{ marginRight: '5%' }} />
                                        Phone Number
                                    </Form.Label>
                                    <Form.Control 
                                        type="tel" 
                                        placeholder="1-800-555-6677" 
                                        name="phone_number" 
                                        onChange={this.handleChange} 
                                        style={{ background: 'inherit', color: '#cccccc' }} 
                                    />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows="3" name="message" 
                                        onChange={this.handleChange} 
                                        style={{ background: 'inherit', height: '15vh', color: '#cccccc' }} 
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="submit" value="Submit" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default Contact;
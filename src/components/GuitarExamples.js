import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class GuitarExamples extends Component {

    render() {
        return(
            <div id="GuitarExamples" style={{ background: '#0d0d0d', padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <Cards cardInfo={{
                                title: 'Example Ad',
                                image: 'https://i.imgur.com/SDMBh2j.png',
                                displayButton: 'true',
                                buttonText: 'View'
                            }} />
                        </Col>
                        <Col>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingTop: '5%', color: '#cccccc' }}>
                                <h1>Guitar Lick Campaigns</h1>
                                <br />
                                <p>
                                Whether it comes to teaching, listening, or writing music for guitar Just Lick It is a witty 
                                and attention-grabbing name. A guitar enthusiast may understand this quip immediately, but a potential 
                                customer or person interested in learning guitar may visit your domain out of curiosity alone.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default GuitarExamples;
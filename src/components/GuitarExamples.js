import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class GuitarExamples extends Component {

    render() {
        return(
            <div id="GuitarExamples" style={{ background: '#151515', padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <Cards 
                                        cardInfo={{ 
                                            title: 'Guitar Licks', 
                                            text: 'Example Guitar Company campaign',
                                            image: 'https://i.imgur.com/67x5P8Y.jpg'
                                        }} 
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Cards 
                                    cardInfo={{ 
                                        title: 'Ice Cream', 
                                        text: 'Example Ice Cream campaign' 
                                    }} 
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Cards 
                                        cardInfo={{ 
                                            title: 'Makeup', 
                                            text: 'Example Makeup Company campaign',
                                            image: 'https://i.imgur.com/TefSvS5.jpg' 
                                        }} 
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingTop: '5%' }}>
                                <h1 style={{ color: '#cccccc' }}>Guitar Lick Campaigns</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default GuitarExamples;
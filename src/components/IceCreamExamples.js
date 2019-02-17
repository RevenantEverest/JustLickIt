import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class IceCreamExamples extends Component {

    render() {
        return(
            <div id="IceCreamExamples" style={{ padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingBottom: '5%' }}>
                                <h1 style={{ color: '#cccccc' }}>Ice Cream Campaigns</h1>
                            </div>
                        </Col>
                        <Col>
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <Cards 
                                        cardInfo={{ 
                                            title: 'IceCream Licks', 
                                            text: 'Example IceCream Company campaign', 
                                            image: 'https://i.imgur.com/EqtDDyp.jpg'
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
                                        text: 'Example Makeup Company campaign' 
                                    }} 
                                />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default IceCreamExamples;
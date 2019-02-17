import React, { Component } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class MakeupExamples extends Component {

    render() {
        return(
            <div id="MakeupExamples" style={{ padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingBottom: '5%' }}>
                                <h1 style={{ color: '#cccccc' }}>Makeup Campaigns</h1>
                            </div>
                        </Col>
                        <Col>
                            <Carousel interval={null}>
                                <Carousel.Item>
                                    <Cards 
                                        cardInfo={{ 
                                            title: 'Makeup Licks', 
                                            text: 'Example Makeup Company campaign',
                                            image: 'https://cdn.pixabay.com/photo/2016/05/02/17/56/lipstick-1367771_960_720.jpg'
                                        }} 
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Cards cardInfo={{ 
                                            title: 'Ice Cream', 
                                            text: 'Example Ice Cream campaign',
                                            image: 'https://cdn.pixabay.com/photo/2016/02/19/11/35/make-up-1209798_960_720.jpg'
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

export default MakeupExamples;
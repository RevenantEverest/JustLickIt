import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class AdultEntertainmentExamples extends Component {

    render() {
        return(
            <div id="GuitarExamples" style={{ background: '#0d0d0d', padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <Cards cardInfo={{
                                title: 'Example Ad',
                                image: 'https://i.imgur.com/J2hiHXz.png',
                                displayButton: 'true',
                                buttonText: 'View'
                            }} />
                        </Col>
                        <Col>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingTop: '5%', color: '#cccccc' }}>
                                <h1>Adult Entertainment</h1>
                                <br />
                                <p>
                                Adult entertainment is an industry where making a name for yourself is important. Justlickit will 
                                immediately make sense for a site using this name, an innuendo that anyone can pick up on.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default AdultEntertainmentExamples;
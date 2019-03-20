import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class IceCreamExamples extends Component {

    render() {
        return(
            <div id="IceCreamExamples" style={{ background: "#151515",padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingBottom: '5%', color: '#cccccc' }}>
                                <h1>Ice Cream Campaigns</h1>
                                <br />
                                <p>
                                An important part of advertising is an interesting title. When you think of ice cream, 
                                you can immediately think of various company names, such as Baskin Robins, Ben & Jerry’s, Diary Queen, 
                                the list goes on. Just Lick It would be a great choice of name for a company looking to be memorable.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <Cards cardInfo={{
                                title: 'Example Ad',
                                image: 'https://i.imgur.com/pwCIkzc.png',
                                displayButton: 'true',
                                buttonText: 'View'
                            }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default IceCreamExamples;
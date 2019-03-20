import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Component Imports
import Cards from './Utils/Cards';

class MakeupExamples extends Component {

    render() {
        return(
            <div id="MakeupExamples" style={{ background: "#151515", padding: '5% 0 5% 0' }}>
                <Container fluid style={{ paddingLeft: '0', paddingRight: '0' }}>
                    <Row style={{ marginLeft: '0', marginRight: '0' }}>
                        <Col style={{ paddingLeft: '0', paddingRight: '0' }}>
                            <div style={{ textAlign: 'center', width: '50%', margin: 'auto', paddingBottom: '5%', color: '#cccccc' }}>
                                <h1>Makeup Campaigns</h1>
                                <br />
                                <p>
                                While you may not literally be licking the makeup you apply (though we wouldn’t judge!), the name still relates. 
                                If you’re looking for a fun and unique domain for your makeup campaign, this just may be the name you’re looking for.
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <Cards cardInfo={{
                                title: 'Example Ad',
                                image: 'https://i.imgur.com/WQxoMP1.png',
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

export default MakeupExamples;
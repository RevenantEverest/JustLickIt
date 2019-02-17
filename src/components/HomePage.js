import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';

//Component Imports
import Contact from './Contact';
import IceCreamExamples from './IceCreamExamples';
import GuitarExamples from './GuitarExamples';
import MakeupExamples from './MakeupExamples';

class HomePage extends Component {

    render() {
        return(
            <div id="HomePage">
                <Jumbotron fluid style={{ background: "#1a1a1a" }}>
                    <Container style={{ color: "#cccccc" }}>
                        <h1>JustLickIt.com</h1>
                        <p>
                        Premium domain for sale. Discover how you can take advantage of this domain below.
                        </p>
                        <Button href="#Examples">Learn More</Button>
                    </Container>
                </Jumbotron>
                <IceCreamExamples />
                <GuitarExamples />
                <MakeupExamples />
                <Contact />
            </div>
        );
    }
};

export default HomePage;
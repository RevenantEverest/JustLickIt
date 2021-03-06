import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import ImageModal from './ImageModal';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.cardInfo.title,
            text: this.props.cardInfo.text,
            image: this.props.cardInfo.image, 
            displayButton: this.props.cardInfo.displayButton,
            buttonText: this.props.cardInfo.buttonText,
            modalShow: false
        }
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() { this.setState({ modalShow: false }) }

    render() {
        return(
            <div id="Card">
                <Card 
                    style={{ 
                        display: 'block', 
                        marginLeft: 'auto', 
                        marginRight: 'auto', 
                        width: '24rem'
                    }}
                >
                <Card.Img variant="top" src={this.state.image ? this.state.image : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_168f94c40fb%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_168f94c40fb%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.2390625%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"} />
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>{this.state.text}</Card.Text>
                    {this.state.displayButton ? <Button variant="primary" onClick={() => this.setState({ modalShow: true })}>{this.state.buttonText}</Button> : ''}
                    <ImageModal show={this.state.modalShow} onHide={this.closeModal} image={this.state.image} />
                </Card.Body>
                </Card>
            </div>
        );
    }
};

export default Cards;
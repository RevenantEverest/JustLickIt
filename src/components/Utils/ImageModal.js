import React, { Component } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class ImageModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            onHide: this.props.modalClose,
            image: this.props.image 
        }
    }

    render() {
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body style={{ backgroundColor: '#1a1a1a' }}>
                    <Image src={this.state.image} thumbnail />
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' }}>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default ImageModal;
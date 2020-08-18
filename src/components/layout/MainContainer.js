import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export class MainContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col> 1 of 4</Col>
                    <Col> 2 of 4</Col>
                    <Col> 3 of 4</Col>
                    <Col> 4 of 4</Col>
                </Row>
            </Container>
        )
    }
};

export default MainContainer;
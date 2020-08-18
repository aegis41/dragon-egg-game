import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export class MainContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>Turn x of n</Col>
                    <Col>% Fire</Col>
                    <Col>% Water</Col>
                    <Col>% Earth</Col>
                    <Col>% Air</Col>
                </Row>
                <Row>
                    <Col> 1 of 5</Col>
                    <Col> 2 of 5</Col>
                    <Col> 3 of 5</Col>
                    <Col> 4 of 5</Col>
                    <Col> 5 of 5</Col>
                </Row>
            </Container>
        )
    }
};

export default MainContainer;
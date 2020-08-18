import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Egg from '../Egg';
import ElementalButton from '../ElementalButton';
import StatBlock from '../StatBlock';
import ExtraSpace from '../ExtraSpace';

export class MainContainer extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Egg></Egg>
                    </Col>
                    <Col>
                        <Row>
                            <StatBlock></StatBlock>
                        </Row>
                        <Row>
                            <ExtraSpace></ExtraSpace>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ElementalButton></ElementalButton>
                    </Col>
                    <Col>
                        <ElementalButton></ElementalButton>
                    </Col>
                    <Col>
                        <ElementalButton></ElementalButton>
                    </Col>
                    <Col>
                        <ElementalButton></ElementalButton>
                    </Col>
                    <Col>
                        <ElementalButton></ElementalButton>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default MainContainer;
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
                        <Egg label="Your Egg" />
                    </Col>
                    <Col>
                        <Row>
                            <StatBlock />
                        </Row>
                        <Row>
                            <ExtraSpace />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ElementalButton type="Fire" />
                    </Col>
                    <Col>
                        <ElementalButton type="Water" />
                    </Col>
                    <Col>
                        <ElementalButton type="Earth" />
                    </Col>
                    <Col>
                        <ElementalButton type="Air" />
                    </Col>
                    <Col>
                        <ElementalButton type="Magic" />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default MainContainer;
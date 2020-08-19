import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Egg from '../Egg';
import ElementalButton from '../ElementalButton';
import StatBlock from '../StatBlock';

export class MainContainer extends Component {

    render() {

        let gameData = {
            fire: {
                days: 0,
                percent: 0
            },
            water: {
                days: 0,
                percent: 0
            },
            air: {
                days: 0,
                percent: 0
            },
            earth: {
                days: 0,
                percent: 0
            },
            magic: {
                days: 0,
                percent: 0
            },
        };

        return (
            <Container className="game-container" fluid>
                <Row>
                    <Col>
                        <Egg label="Your Egg" />
                    </Col>
                    <Col>
                        <StatBlock day="1" days="30" gameData={gameData} />
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
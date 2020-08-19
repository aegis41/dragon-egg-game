import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Egg from '../Egg';
import ElementalButton from '../ElementalButton';
import StatBlock from '../StatBlock';

export class GameContainer extends Component {

    render() {

        const elementList = [
            "fire",
            "water",
            "air",
            "earth",
            "magic"
        ];

        const processTurn = (element) => {
            gameData.elements[element].days++;
            gameData.day++;
            updatePercents();
        }

        const updatePercents = () => {
            elementList.forEach(element => {
                let elementData = gameData.elements[element];
                elementData.percent = elementData.days > 0 ? elementData.days / gameData.day : 0;
            })
        }

        const handleClick = (element) => {
            processTurn(element.toLowerCase());
        };

        let gameData = {
            day: 0,
            elements: {
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
                }
            }
        };

        return (
            <Container className="game-container" fluid>
                <Row>
                    <Col>
                        <Egg label="Your Egg" />
                    </Col>
                    <Col>
                        <StatBlock day={gameData.day} days="30" gameData={gameData} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ElementalButton type="Fire" handleClick={handleClick} />
                    </Col>
                    <Col>
                        <ElementalButton type="Water" handleClick={handleClick} />
                    </Col>
                    <Col>
                        <ElementalButton type="Earth" handleClick={handleClick} />
                    </Col>
                    <Col>
                        <ElementalButton type="Air" handleClick={handleClick} />
                    </Col>
                    <Col>
                        <ElementalButton type="Magic" handleClick={handleClick} />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default GameContainer;
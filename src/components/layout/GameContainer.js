import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Egg from '../Egg';
import ElementalButton from '../ElementalButton';
import StatBlock from '../StatBlock';
import OutcomeList from '../../OutcomeList';
import StartGameState from '../../StartGameState';

export class GameContainer extends Component {

    state = JSON.parse(JSON.stringify(StartGameState));


    round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    };

    computeOutcome(elements) {
        let outcomes = OutcomeList.filter((outcome) => {
            let testArray = [];
            outcome.tests.forEach((test) => {
                for (const [key, value] of Object.entries(test)) {
                    testArray.push(elements[key].percent >= value);
                }
            });
            if (testArray.every(result => result === true)) {
                return true;
            } else {
                return false;
            }
        });
        return outcomes;
    };

    render() {
        const elementList = [
            "fire",
            "water",
            "air",
            "earth",
            "magic"
        ];

        const startGame = () => {
            let restartGame = JSON.parse(JSON.stringify(StartGameState));
            this.setState({ ...restartGame });
        }

        const processTurn = (element) => {
            let prevState = this.state;
            let elements = this.state.elements;
            elements[element].days++;
            prevState.elements = elements;
            prevState.day++;
            prevState.elements = updatePercents(prevState.elements);
            prevState.progress = calcProgress(prevState.day, prevState.gameLength);
            if (prevState.day >= prevState.gameLength) {
                prevState.gameOver = true;
                prevState.outcomes = this.computeOutcome(prevState.elements);
            }
            console.log(prevState.outcomes);
            this.setState({ ...prevState });
        }

        const updatePercents = (elements) => {
            elementList.forEach(element => {
                elements[element].percent = elements[element].days > 0 ? (this.round((elements[element].days / (this.state.day) * 100), 2)) : 0;
            })
            return elements;
        }

        const handleClick = (element) => {
            processTurn(element.toLowerCase());
        };

        const calcProgress = (day, gameLength) => {
            return this.round(((day) / gameLength) * 100, 2);
        }

        return (
            <Container className="game-container" fluid>
                <Row>
                    <Col>
                        <Egg label="Your Egg" gameOver={this.state.gameOver} elements={this.state.elements} />
                    </Col>
                    <Col>
                        <StatBlock
                            day={this.state.day}
                            progress={this.state.progress}
                            days={this.state.gameLength}
                            gameData={this.state}
                            gameOver={this.state.gameOver}
                            startGame={startGame}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ElementalButton type="Fire" handleClick={handleClick} disabled={this.state.gameOver} />
                    </Col>
                    <Col>
                        <ElementalButton type="Water" handleClick={handleClick} disabled={this.state.gameOver} />
                    </Col>
                    <Col>
                        <ElementalButton type="Air" handleClick={handleClick} disabled={this.state.gameOver} />
                    </Col>
                    <Col>
                        <ElementalButton type="Earth" handleClick={handleClick} disabled={this.state.gameOver} />
                    </Col>
                    <Col>
                        <ElementalButton type="Magic" handleClick={handleClick} disabled={this.state.gameOver} />
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default GameContainer;
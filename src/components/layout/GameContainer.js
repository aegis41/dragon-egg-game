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

    computeOutcome() {
        let outcomes = [];
        outcomes = OutcomeList.forEach(outcome => {
            outcome.tests.forEach(test => {
                let testElement = this.state.elements[outcome.outcome.toLowerCase()]
                if (testElement.percent >= test[testElement]) {
                    console.log(`Passed test ${testElement} : ${testElement.percent}`);
                }
            })
        })


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
            calcProgress();
            if (prevState.day + 1 >= prevState.gameLength) {
                prevState.gameOver = true;
                // this.computeOutcome();
            }
            console.log(prevState);
            this.setState({ ...prevState });
            // this.setState({ day: this.state.day + 1 });
            // this.setState({ elements: elements });
        }

        const updatePercents = (elements) => {
            console.log(elements);
            return elementList.map(element => {
                let elementData = elements[element];
                elementData.percent = elementData.days > 0 ? (this.round((elementData.days / (this.state.day + 1) * 100), 2)) : 0;
            })
        }

        const handleClick = (element) => {
            processTurn(element.toLowerCase());
        };

        const calcProgress = () => {
            let progress = this.round(((this.state.day + 1) / this.state.gameLength) * 100, 2);
            this.setState({ progress: progress });
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
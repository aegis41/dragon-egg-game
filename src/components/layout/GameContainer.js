import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Egg from '../Egg';
import ElementalButton from '../ElementalButton';
import StatBlock from '../StatBlock';

export class GameContainer extends Component {
    state = this.props.gameData || {
        day: 0,
        gameLength: 5,
        progress: 0,
        gameOver: false,
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
        },
        achievements: []
    };

    round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    render() {

        const elementList = [
            "fire",
            "water",
            "air",
            "earth",
            "magic"
        ];

        const startGame = () => {
            let elementReset = {
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
            };
            this.setState({ day: 0 });
            this.setState({ progress: 0 });
            this.setState({ gameOver: false });
            this.setState({ elements: elementReset });
            localStorage.setItem('gameData', JSON.stringify(this.state));
        };

        const processTurn = (element) => {
            let elements = this.state.elements;
            elements[element].days++;
            this.setState({ elements: elements });
            this.setState({ day: this.state.day + 1 });
            updatePercents();
            calcProgress();
            if (this.state.day + 1 >= this.state.gameLength) {
                this.setState({ gameOver: true });
            }
        }

        const updateProgress = (result) => {
            let gameData = this.state;
            if (result) {
                gameData.achievements.push(result);
            }
            localStorage.setItem('gameData', JSON.stringify(gameData));
        }

        const updatePercents = () => {
            elementList.forEach(element => {
                let elementData = this.state.elements[element];
                elementData.percent = elementData.days > 0 ? (this.round((elementData.days / (this.state.day + 1) * 100), 2)).toString() : 0;
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
                        <Egg
                            label="Your Egg"
                            gameOver={this.state.gameOver}
                            elements={this.state.elements}
                            updateProgress={updateProgress}
                            gameLength={this.state.gameLength}
                        />
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
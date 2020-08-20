import React from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'

class StatBlock extends React.Component {

    render() {
        return (
            <Card
                bg="dark"
                text="white"
                className="mb-3"
            >
                <Card.Header>Incubation Data</Card.Header>
                <Card.Body>
                    <Card.Title>
                        You are on day {this.props.day} of {this.props.days}
                        <ProgressBar striped animated now={this.props.progress} />
                    </Card.Title>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Element</th>
                                <th>Days Used</th>
                                <th>Incubation Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fire</td>
                                <td>{this.props.gameData.elements.fire.days}</td>
                                <td><ProgressBar striped animated now={this.props.gameData.elements.fire.percent} /></td>
                            </tr>
                            <tr>
                                <td>Water</td>
                                <td>{this.props.gameData.elements.water.days}</td>
                                <td><ProgressBar striped animated now={this.props.gameData.elements.water.percent} /></td>
                            </tr>
                            <tr>
                                <td>Air</td>
                                <td>{this.props.gameData.elements.air.days}</td>
                                <td><ProgressBar striped animated now={this.props.gameData.elements.air.percent} /></td>
                            </tr>
                            <tr>
                                <td>Earth</td>
                                <td>{this.props.gameData.elements.earth.days}</td>
                                <td><ProgressBar striped animated now={this.props.gameData.elements.earth.percent} /></td>
                            </tr>
                            <tr>
                                <td>Water</td>
                                <td>{this.props.gameData.elements.magic.days}</td>
                                <td><ProgressBar striped animated now={this.props.gameData.elements.magic.percent} /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card.Text>
                        Track your egg's incubation progress here.
                    </Card.Text>
                    {this.props.gameOver ? <Button variant="primary">Start a New Game</Button> : null}
                </Card.Body>
            </Card>
        );
    }
}

export default StatBlock;
import React from 'react';
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

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
                    <Card.Title>You are on day {this.props.day} of {this.props.days}</Card.Title>
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
                                <td>{this.props.gameData.fire.days}</td>
                                <td>{this.props.gameData.fire.percent}</td>
                            </tr>
                            <tr>
                                <td>Water</td>
                                <td>{this.props.gameData.water.days}</td>
                                <td>{this.props.gameData.water.percent}</td>
                            </tr>
                            <tr>
                                <td>Air</td>
                                <td>{this.props.gameData.air.days}</td>
                                <td>{this.props.gameData.air.percent}</td>
                            </tr>
                            <tr>
                                <td>Earth</td>
                                <td>{this.props.gameData.earth.days}</td>
                                <td>{this.props.gameData.earth.percent}</td>
                            </tr>
                            <tr>
                                <td>Water</td>
                                <td>{this.props.gameData.magic.days}</td>
                                <td>{this.props.gameData.magic.percent}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Card.Text>
                        Track your egg's incubation progress here.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default StatBlock;
import React from 'react';
import EggImage from './EggImage';
import Card from 'react-bootstrap/Card';

class Egg extends React.Component {
    render() {
        return (
            <Card
                bg="light"
                className="mb-3"
            >
                <Card.Header>{this.props.label}</Card.Header>
                <Card.Body>
                    <Card.Title>Incubation Chamber</Card.Title>
                    <EggImage egg={this.props.egg} />
                    <Card.Text>
                        {this.props.cardText}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Egg;
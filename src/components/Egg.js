import React from 'react';
import EggImage from './EggImage';
import Card from 'react-bootstrap/Card';

class Egg extends React.Component {

    computeEnding(elements) {
        let result = {
            text: "Your egg is ready. You have incubated a ",
            egg: "egg00"
        };
        if (this.props.gameOver) {
            if (elements.fire.percent >= 90) {
                result.text += "Fire Dragon";
                result.egg = "egg01"
            } else if (elements.water.percent >= 90) {
                result.text += "Water Dragon";
                result.egg = "egg02"
            } else if (elements.air.percent >= 90) {
                result.text += "Air Dragon";
                result.egg = "egg03"
            } else if (elements.earth.percent >= 90) {
                result.text += "Earth Dragon";
                result.egg = "egg04"
            } else if (elements.magic.percent >= 90) {
                result.text += "Magic Dragon";
                result.egg = "egg05"
            } else {
                result.text = "Your choices have resulted in an inert egg. Please try again";
            }
        }
        return result;
    };

    getCardText(gameOver, elements) {
        if (!gameOver) {
            return "You have 30 days to incubate your egg. Choose an element below for each day to see what hatches.";
        } else {
            return this.computeEnding(elements).text;
        }
    }

    render() {
        return (
            <Card
                bg="light"
                className="mb-3"
            >
                <Card.Header>{this.props.label}</Card.Header>
                <Card.Body>
                    <Card.Title>Incubation Chamber</Card.Title>
                    <EggImage egg={this.computeEnding(this.props.elements).egg} />
                    <Card.Text>
                        {this.getCardText(this.props.gameOver, this.props.elements)}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Egg;
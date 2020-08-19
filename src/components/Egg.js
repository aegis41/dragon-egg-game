import React from 'react';
import eggImg from '../assets/egg.png'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image';

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
                    <Image className="egg-image" src={eggImg} alt="Plain Egg" fluid />
                    <Card.Text>
                        You have 30 days to incubate your egg. Choose an element below for each day to see what hatches.
                    </Card.Text>
                </Card.Body>
            </Card>
            // <div className="card bg-light mb-3">
            //     <div className="card-header"></div>
            //     <div className="card-body">
            //         <h5 className="card-title">Light card title</h5>
            //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     </div>
            // </div>
        );
    }
}

export default Egg;
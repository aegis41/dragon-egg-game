import React from 'react';
import Button from 'react-bootstrap/Button';

class ElementalButton extends React.Component {

    render() {
        return (
            <Button className="btn-fire" size="lg" block variant={this.props.type.toLowerCase()}>
                {this.props.type}
            </Button >
        );
    };
};

export default ElementalButton;
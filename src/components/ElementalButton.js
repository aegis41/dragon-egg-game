import React from 'react';
import Button from 'react-bootstrap/Button';

class ElementalButton extends React.Component {

    render() {

        return (
            <Button
                onClick={() => this.props.handleClick(this.props.type)}
                size="lg"
                block
                variant={this.props.type.toLowerCase()}
            >
                {this.props.type}
            </Button >
        );
    };
};

export default ElementalButton;
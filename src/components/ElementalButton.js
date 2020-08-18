import React from 'react';

class ElementalButton extends React.Component {
    render() {
        return (
            <button>
                This is a {this.props.type} button
            </button>
        );
    }
}

export default ElementalButton;
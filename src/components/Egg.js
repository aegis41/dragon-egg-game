import React from 'react';
import egg from '../assets/egg.png'

class Egg extends React.Component {
    render() {
        return (
            <div class="card bg-light mb-3">
                <div class="card-header">{this.props.label}</div>
                <div class="card-body">
                    <h5 class="card-title">Light card title</h5>
                    <img src={egg} alt="Plain Egg" />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}

export default Egg;
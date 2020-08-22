import React from 'react';
import Image from 'react-bootstrap/Image';

class EggImage extends React.Component {
    getEggSource = (egg) => {
        return "../assets/" + egg + ".png";
    }

    render() {
        console.log(this.eggList);
        return (
            <Image className="egg-image" src={this.getEggSource(this.props.egg)} alt="Plain Egg" fluid />
        );
    };
};

export default EggImage;
import React from 'react';
import egg from '../assets/egg00.png';
import Image from 'react-bootstrap/Image';

class EggImage extends React.Component {
    eggContext = "../assets/";

    render() {
        return (
            <Image className="egg-image" src={egg} alt="Plain Egg" fluid />
        );
    };
};

export default EggImage;
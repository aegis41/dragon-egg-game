import React from 'react';

const style = {
    background: 'red'
}

class TileCard extends React.Component {
    render() {
        return (
            <div className="TileCard" style={style}>
                {tileCardContent}
            </div>
        );
    }
}

export default TileCard;
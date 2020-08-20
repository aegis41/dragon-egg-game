import React, { Component } from 'react';

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

const phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

export class Footer extends Component {
    render() {
        return (
            <div>
                <div style={phantom} />
                <div style={style}>
                    <p>&copy;2020 Noisy Fan Games. All rights reserved. Designed by Anthony A. Gaff, Developed by Anthony A. Gaff and Joshua Hall</p>
                </div>
            </div>
        )
    }
};


export default Footer;
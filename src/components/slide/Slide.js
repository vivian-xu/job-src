import React from 'react';

require('../../imgs/img1.png');
require('../../imgs/img2.png');
require('../../imgs/img3.png');


class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Slide';
    }


    render() {
        return (
            <div id="slideBox" className="slideBox">
                <div className="hd">
                    <ul><li></li><li></li><li></li></ul>
                </div>
                <div className="bd">
                    <ul>
                        <li><img src="./imgs/img1.png" /></li>
                        <li><img src="./imgs/img2.png" /></li>
                        <li><img src="./imgs/img3.png" /></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Slide;

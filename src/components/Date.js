import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Date';
    }
    render() {
        return (
            <section className="wrap-block date">
                <p className="section-title">
                    放心约
                </p>
                <p>
                    1. 文案文案文案  <br/>
                    2. 文案文案文案  <br/>
                    3. 文案文案文案  <br/>
                </p>
                <button className="contact-server">
                    联系客服
                </button>
            </section>
        );
    }
}

export default Date;

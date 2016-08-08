import React from 'react';

class Mentor extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Mentor';
    }
    render() {
        return (
            <section className="wrap-block mentor">
                <p className="section-title">
                    师姐说
                </p>
                <p>
                    以前在豌豆荚负责产品，略懂产品设计和用户体验，对创业公司的一些坑，也比较清楚。
                </p>
            </section>
        );
    }
}

export default Mentor;

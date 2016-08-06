import React from 'react';


class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className = "wrap-block info">
                <div >
                     <i className="iconfont img">&#xe601;
                    </i>
                    <div>
                        <p className="section-title">
                            <span className="industry"> 互联网
                            </span>
                            <span> 师姐 </span>
                        </p>

                        <p className="name">安然默默</p>
                    </div>
                </div>
                <p>
                    豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监 豌豆荚 产品总监
                </p>
            </section>
        );
    }
}

Info.propTypes = {
    children: React.PropTypes.node
}

export default Info;

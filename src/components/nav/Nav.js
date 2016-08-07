import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <i className="iconfont icon-left">
                </i>
                <i className="iconfont icon-updata">
                </i>
            </nav>
        );
    }
}

Nav.propTypes = {
    children: React.PropTypes.node
}

export default Nav;

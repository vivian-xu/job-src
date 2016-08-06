import React from 'react';

class ArticleNav extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ArticleNav';
    }
    render() {
        return (
            <nav>
                <i className="iconfont icon-left">
                </i>
                <i className="iconfont icon-updata">
                </i>
                <i className="iconfont icon-star1">
                </i>
            </nav>
        );
    }
}

export default ArticleNav;
